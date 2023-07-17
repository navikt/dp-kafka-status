import ConsumerGroupList from "@/components/consumer-group-list";
import {
  getFirstClisterId,
  getKafkaClusters,
} from "@/lib/api/kafka-rest/clusters";
import { getTopics } from "@/lib/api/kafka-rest/topics";
import {
  getConsumerGroups,
  sortByGroupId,
} from "@/lib/api/kafka-rest/consumer-groups";
import { TopicList } from "@/components/topic-list";

export default async function Home() {
  const clusters = await getKafkaClusters();
  const topics = await getTopics(getFirstClisterId(clusters));
  const consumerGroups = await getConsumerGroups(getFirstClisterId(clusters));
  sortByGroupId(consumerGroups.data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      clusterId: {clusters[0].cluster_id}
      <ConsumerGroupList consumerGroups={consumerGroups.data} />;
      <TopicList topics={topics.data} />;
    </main>
  );
}
