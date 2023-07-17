import type { KafkaTopic } from "@/lib/api/kafka-rest/topics";

export function Topic({ topic }: { topic: KafkaTopic }) {
  return (
    <div className="container mx-auto">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{topic.topic_name}</h1>
        <div className="space-y-4">
          <p>Replication Factor: {topic.replication_factor}</p>
          <p>Partitions Count: {topic.partitions_count}</p>
          <p>Is Internal: {topic.is_internal.toString()}</p>
        </div>
      </div>
    </div>
  );
}
