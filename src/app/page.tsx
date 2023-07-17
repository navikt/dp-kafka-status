import ConsumerGroupList from "@/components/consumer-group-list";

interface KafkaClusterList {
  kind: string;
  metadata: {
    self: string;
    next: string | null;
  };
  data: KafkaCluster[];
}

interface KafkaCluster {
  kind: string;
  metadata: {
    self: string;
    resource_name: string;
  };
  cluster_id: string;
  controller: {
    related: string;
  };
  acls: {
    related: string;
  };
  brokers: {
    related: string;
  };
  broker_configs: {
    related: string;
  };
  consumer_groups: {
    related: string;
  };
  topics: {
    related: string;
  };
  partition_reassignments: {
    related: string;
  };
}

interface KafkaTopic {
  kind: string;
  metadata: {
    self: string;
    resource_name: string;
  };
  cluster_id: string;
  topic_name: string;
  is_internal: boolean;
  replication_factor: number;
  partitions_count: number;
  partitions: {
    related: string;
  };
  configs: {
    related: string;
  };
  partition_reassignments: {
    related: string;
  };
}

interface KafkaTopicList {
  kind: string;
  metadata: {
    self: string;
    next: string | null;
  };
  data: KafkaTopic[];
}

export const dynamic = "force-dynamic";

async function getKafkaClusters(): Promise<KafkaCluster[]> {
  const res = await fetch(`${process.env.KAFKA_REST_API}/v3/clusters/`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json().then((response: KafkaClusterList) => response.data);
}

async function getTopics(): Promise<KafkaTopicList> {
  const clusters = await getKafkaClusters();
  if (clusters.length != 1) throw new Error("Håndterer bare ett cluster");
  const res = await fetch(
    `${process.env.KAFKA_REST_API}/v3/clusters/${clusters[0].cluster_id}/topics`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getConsumerGroups(): Promise<ConsumerGroupList> {
  const clusters = await getKafkaClusters();
  if (clusters.length != 1) throw new Error("Håndterer bare ett cluster");
  const res = await fetch(
    `${process.env.KAFKA_REST_API}/v3/clusters/${clusters[0].cluster_id}/consumer-groups`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const clusters = await getKafkaClusters();
  const topics = await getTopics();
  const consumerGroups = await getConsumerGroups();
  consumerGroups.data.sort((a, b) => {
    if (a.consumer_group_id > b.consumer_group_id) return 1;
    else if (a.consumer_group_id < b.consumer_group_id) return -1;

    return 0;
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      clusterId: {clusters[0].cluster_id}
      <ConsumerGroupList consumerGroups={consumerGroups} />;
      <TopicList topics={topics.data} />;
    </main>
  );
}

function TopicList({ topics }: { topics: KafkaTopic[] }) {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Kafka Topics</h1>
      <div className="space-y-4">
        {topics.map((topic) => (
          <Topic key={topic.topic_name} topic={topic} />
        ))}
      </div>
    </div>
  );
}

function Topic({ topic }: { topic: KafkaTopic }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">{topic.topic_name}</h2>
      <p>Replication Factor: {topic.replication_factor}</p>
      <p>Partitions Count: {topic.partitions_count}</p>
      <p>Is Internal: {topic.is_internal.toString()}</p>
      <p>
        Partitions:{" "}
        <a href={topic.partitions.related}>{topic.partitions.related}</a>
      </p>
      <p>
        Configs: <a href={topic.configs.related}>{topic.configs.related}</a>
      </p>
      <p>
        Partition Reassignments:{" "}
        <a href={topic.partition_reassignments.related}>
          {topic.partition_reassignments.related}
        </a>
      </p>
    </div>
  );
}
