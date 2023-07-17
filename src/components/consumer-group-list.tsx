import React from "react";
import ConsumerGroup from "@/components/consumer-group";

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

interface ConsumerGroupListProps {
  consumerGroups: ConsumerGroupList;
}

function ConsumerGroupList({ consumerGroups }: ConsumerGroupListProps) {
  return (
    <div>
      {consumerGroups.data.map((consumerGroup, index) => (
        <ConsumerGroup key={index} consumerGroup={consumerGroup} />
      ))}
    </div>
  );
}

export default ConsumerGroupList;
