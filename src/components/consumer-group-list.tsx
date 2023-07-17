import React from "react";
import ConsumerGroup from "@/components/consumer-group";
import type { ConsumerGroupData } from "@/lib/api/kafka-rest/consumer-groups";

interface ConsumerGroupListProps {
  consumerGroups: ConsumerGroupData[];
}

function ConsumerGroupList({ consumerGroups }: ConsumerGroupListProps) {
  return (
    <div>
      {consumerGroups.map((consumerGroup, index) => (
        <ConsumerGroup key={index} consumerGroup={consumerGroup} />
      ))}
    </div>
  );
}

export default ConsumerGroupList;
