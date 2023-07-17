interface ConsumerGroupList {
  kind: string;
  metadata: {
    self: string;
    next: string | null;
  };
  data: ConsumerGroupData[];
}

export interface ConsumerGroupData {
  kind: string;
  metadata: {
    self: string;
    resource_name: string;
  };
  cluster_id: string;
  consumer_group_id: string;
  is_simple: boolean;
  partition_assignor: string;
  state: string;
  coordinator: {
    related: string;
  };
  consumers: {
    related: string;
  };
  lag_summary: {
    related: string;
  };
}

export async function getConsumerGroups(
  clusterId: string,
): Promise<ConsumerGroupList> {
  const res = await fetch(
    `${process.env.KAFKA_REST_API}/v3/clusters/${clusterId}/consumer-groups`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export function sortByGroupId(consumerGroups: ConsumerGroupData[]) {
  return consumerGroups.sort((a, b) => {
    if (a.consumer_group_id > b.consumer_group_id) return 1;
    else if (a.consumer_group_id < b.consumer_group_id) return -1;

    return 0;
  });
}
