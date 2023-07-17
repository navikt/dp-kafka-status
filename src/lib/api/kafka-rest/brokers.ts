type KafkaBrokerList = {
  kind: string;
  metadata: {
    self: string;
    next: null | string;
  };
  data: KafkaBroker[];
};

export type KafkaBroker = {
  kind: string;
  metadata: {
    self: string;
    resource_name: string;
  };
  cluster_id: string;
  broker_id: number;
  host: string;
  port: number;
  rack: null | string;
  configs: {
    related: string;
  };
  partition_replicas: {
    related: string;
  };
};

export async function getBrokers(clusterId: string): Promise<KafkaBrokerList> {
  const res = await fetch(
    `${process.env.KAFKA_REST_API}/v3/clusters/${clusterId}/brokers`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
