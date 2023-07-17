type KafkaConsumerGroupLagSummary = {
  kind: string;
  metadata: {
    self: string;
    resource_name: string;
  };
  cluster_id: string;
  consumer_group_id: string;
  max_lag: number;
  total_lag: number;
  max_lag_consumer_id: string;
  max_lag_consumer: {
    related: string;
  };
  max_lag_client_id: string;
  max_lag_instance_id: string;
  max_lag_topic_name: string;
  max_lag_partition_id: number;
  max_lag_partition: {
    related: string;
  };
};

export async function getLagSummary(
  clusterId: string,
  consumerGroupId: string,
): Promise<KafkaConsumerGroupLagSummary> {
  const res = await fetch(
    `${process.env.KAFKA_REST_API}/v3/clusters/${clusterId}/consumer-groups/${consumerGroupId}/lag-summary`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
