import React from "react";
import type { ConsumerGroupData } from "@/lib/api/kafka-rest/consumer-groups";
import Link from "next/link";

interface ConsumerGroupListProps {
  consumerGroups: ConsumerGroupData[];
}

function ConsumerGroupList({ consumerGroups }: ConsumerGroupListProps) {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Consumer groups</h1>
      <div className="space-y-4">
        {consumerGroups.map((consumerGroup, index) => (
          <ConsumerGroupItem key={index} consumerGroup={consumerGroup} />
        ))}
      </div>
    </div>
  );
}

export default ConsumerGroupList;

interface ConsumerGroupProps {
  consumerGroup: ConsumerGroupData;
}

function ConsumerGroupItem({ consumerGroup }: ConsumerGroupProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">
        <Link href={`/consumer-groups/${consumerGroup.consumer_group_id}`}>
          {consumerGroup.consumer_group_id}
        </Link>
      </h2>
      <p>State: {consumerGroup.state}</p>
    </div>
  );
}
