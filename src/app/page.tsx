import ConsumerGroupList from "@/components/consumer-group-list";
import { getClusters, getFirstClisterId } from "@/lib/api/kafka-rest/clusters";
import { getTopics } from "@/lib/api/kafka-rest/topics";
import {
  getConsumerGroups,
  sortByGroupId,
} from "@/lib/api/kafka-rest/consumer-groups";
import { TopicList } from "@/components/topic-list";
import { getBrokers } from "@/lib/api/kafka-rest/brokers";
import { BrokerList } from "@/components/broker-list";

export const dynamic = "force-dynamic";

export default async function Home() {
  const clusters = await getClusters();
  const activeClusterId = getFirstClisterId(clusters);
  const brokers = await getBrokers(activeClusterId);
  const topics = await getTopics(activeClusterId);
  const consumerGroups = await getConsumerGroups(activeClusterId);
  sortByGroupId(consumerGroups.data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      clusterId: {clusters[0].cluster_id}
      <BrokerList brokers={brokers.data} />
      <ConsumerGroupList consumerGroups={consumerGroups.data} />
      <TopicList topics={topics.data} />
    </main>
  );
}
