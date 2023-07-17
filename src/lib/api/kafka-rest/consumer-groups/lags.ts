type KafkaConsumerLagList = {
  kind: string;
  metadata: {
    self: string;
    next: null | string;
  };
  data: KafkaConsumerLag[];
};

export type KafkaConsumerLag = {
  kind: string;
  metadata: {
    self: string;
    resource_name: string;
  };
  cluster_id: string;
  consumer_group_id: string;
  topic_name: string;
  partition_id: number;
  consumer_id: string;
  instance_id: string;
  client_id: string;
  current_offset: number;
  log_end_offset: number;
  lag: number;
};

export async function getLags(
  clusterId: string,
  consumerGroupId: string,
): Promise<KafkaConsumerLagList> {
  const res = await fetch(
    `${process.env.KAFKA_REST_API}/v3/clusters/${clusterId}/consumer-groups/${consumerGroupId}/lags`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
