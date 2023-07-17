import React from "react";
import ConsumerGroup from "@/components/consumer-group";
import type { ConsumerGroupData } from "@/lib/api/kafka-rest/consumer-groups";

interface ConsumerGroupListProps {
  consumerGroups: ConsumerGroupData[];
}

function ConsumerGroupList({ consumerGroups }: ConsumerGroupListProps) {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Consumer groups</h1>
      <div className="space-y-4">
        {consumerGroups.map((consumerGroup, index) => (
          <ConsumerGroup key={index} consumerGroup={consumerGroup} />
        ))}
      </div>
    </div>
  );
}

export default ConsumerGroupList;
