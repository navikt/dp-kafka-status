import React from "react";
import type { ConsumerGroupData } from "@/lib/api/kafka-rest/consumer-groups";

interface ConsumerGroupProps {
  consumerGroup: ConsumerGroupData;
}

function ConsumerGroup({ consumerGroup }: ConsumerGroupProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">
        {consumerGroup.consumer_group_id}
      </h2>
      <p>State: {consumerGroup.state}</p>
    </div>
  );
}

export default ConsumerGroup;
