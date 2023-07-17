export interface KafkaTopic {
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

export async function getTopics(clusterId: string): Promise<KafkaTopicList> {
  const res = await fetch(
    `${process.env.KAFKA_REST_API}/v3/clusters/${clusterId}/topics`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
