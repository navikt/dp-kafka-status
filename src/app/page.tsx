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

async function getData(): Promise<KafkaClusterList> {
  const res = await fetch("http://dp-kafka-rest/v3/clusters/");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const clusters = await getData();
  console.log(clusters);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      clusterId: {clusters.data[0].cluster_id}
    </main>
  );
}
