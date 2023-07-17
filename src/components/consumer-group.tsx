import React from "react";
import { ConsumerGroupData } from "@/components/consumer-group-list";

interface ConsumerGroupProps {
  consumerGroup: ConsumerGroupData;
}

function ConsumerGroup({ consumerGroup }: ConsumerGroupProps) {
  return (
    <div className="border border-gray-200 rounded p-4 my-4">
      <h2 className="text-xl font-bold mb-2">
        {consumerGroup.consumer_group_id}
      </h2>
      <p>State: {consumerGroup.state}</p>
      {/* Render other consumer group data here */}
    </div>
  );
}

export default ConsumerGroup;
