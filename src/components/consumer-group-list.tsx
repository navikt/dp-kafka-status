import React from "react";
import ConsumerGroup from "@/components/consumer-group";
import { ConsumerGroupData } from "@/lib/api/kafka-rest/fetch";

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
