import { getClusters, getFirstClisterId } from "@/lib/api/kafka-rest/clusters";
import { getTopics } from "@/lib/api/kafka-rest/topics";
import {
  getConsumerGroups,
  sortByGroupId,
} from "@/lib/api/kafka-rest/consumer-groups";
import { Topic } from "@/components/topic";

export const dynamic = "force-dynamic";

export default async function TopicPage({
  params,
}: {
  params: { topic: string };
}) {
  const clusters = await getClusters();
  const activeClusterId = getFirstClisterId(clusters);
  const topics = await getTopics(activeClusterId);
  const consumerGroups = await getConsumerGroups(activeClusterId);
  sortByGroupId(consumerGroups.data);

  const topicName = params.topic;
  const topic = topics.data.find((el) => (el.topic_name = topicName))!;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <Topic topic={topic} />
    </main>
  );
}
