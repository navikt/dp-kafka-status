import React from "react";
import type { ConsumerGroupData } from "@/lib/api/kafka-rest/consumer-groups";
import { getLagSummary } from "@/lib/api/kafka-rest/consumer-groups/lag-summary";
import type { KafkaConsumerLag } from "@/lib/api/kafka-rest/consumer-groups/lags";
import { getLags } from "@/lib/api/kafka-rest/consumer-groups/lags";

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
      <p>Partition assignor: {consumerGroup.partition_assignor}</p>
      <LagSummary
        clusterId={consumerGroup.cluster_id}
        consumerGroupId={consumerGroup.consumer_group_id}
      />
      <KafkaConsumerLagList
        clusterId={consumerGroup.cluster_id}
        consumerGroupId={consumerGroup.consumer_group_id}
      />
    </div>
  );
}

export default ConsumerGroup;

async function LagSummary({
  clusterId,
  consumerGroupId,
}: {
  clusterId: string;
  consumerGroupId: string;
}) {
  const lagSummary = await getLagSummary(clusterId, consumerGroupId);
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">
        Kafka Consumer Group Lag Summary
      </h2>
      <p>Max Lag: {lagSummary.max_lag}</p>
      <p>Total Lag: {lagSummary.total_lag}</p>
      <p>Max Lag Consumer ID: {lagSummary.max_lag_consumer_id}</p>
      <p>Max Lag Client ID: {lagSummary.max_lag_client_id}</p>
      <p>Max Lag Instance ID: {lagSummary.max_lag_instance_id}</p>
      <p>Max Lag Topic Name: {lagSummary.max_lag_topic_name}</p>
      <p>Max Lag Partition ID: {lagSummary.max_lag_partition_id}</p>
    </div>
  );
}

async function KafkaConsumerLagList({
  clusterId,
  consumerGroupId,
}: {
  clusterId: string;
  consumerGroupId: string;
}) {
  const data = await getLags(clusterId, consumerGroupId);
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Kafka Consumer Lag List</h2>
      {data.data.map((lag) => (
        <KafkaConsumerLagItem key={lag.metadata.self} lag={lag} />
      ))}
    </div>
  );
}

function KafkaConsumerLagItem({ lag }: { lag: KafkaConsumerLag }) {
  return (
    <div>
      <h3 className="text-base font-bold mb-2">
        Partition: {lag.partition_id}
      </h3>
      <p>Topic: {lag.topic_name}</p>
      <p>Consumer ID: {lag.consumer_id}</p>
      <p>Instance ID: {lag.instance_id}</p>
      <p>Client ID: {lag.client_id}</p>
      <p>Current Offset: {lag.current_offset}</p>
      <p>Log End Offset: {lag.log_end_offset}</p>
      <p>Lag: {lag.lag}</p>
    </div>
  );
}
