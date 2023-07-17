import type { KafkaTopic } from "@/lib/api/kafka-rest/topics";

export function TopicList({ topics }: { topics: KafkaTopic[] }) {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Kafka Topics</h1>
      <div className="space-y-4">
        {topics.map((topic) => (
          <Topic key={topic.topic_name} topic={topic} />
        ))}
      </div>
    </div>
  );
}

function Topic({ topic }: { topic: KafkaTopic }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">{topic.topic_name}</h2>
      <p>Replication Factor: {topic.replication_factor}</p>
      <p>Partitions Count: {topic.partitions_count}</p>
      <p>Is Internal: {topic.is_internal.toString()}</p>
      <p>
        Partitions:{" "}
        <a href={topic.partitions.related}>{topic.partitions.related}</a>
      </p>
      <p>
        Configs: <a href={topic.configs.related}>{topic.configs.related}</a>
      </p>
      <p>
        Partition Reassignments:{" "}
        <a href={topic.partition_reassignments.related}>
          {topic.partition_reassignments.related}
        </a>
      </p>
    </div>
  );
}
