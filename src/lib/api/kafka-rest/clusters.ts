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

export async function getClusters(): Promise<KafkaCluster[]> {
  const res = await fetch(`${process.env.KAFKA_REST_API}/v3/clusters/`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json().then((response: KafkaClusterList) => response.data);
}

export function getFirstClisterId(clusters: KafkaCluster[]) {
  return clusters[0].cluster_id;
}
