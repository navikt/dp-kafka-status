import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    kind: "KafkaConsumerGroupLagSummary",
    metadata: {
      self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups/dp-soknad-v1/lag-summary",
      resource_name:
        "crn:///kafka=yn2PKSI4Q8SadECfap0AMA/consumer-group=dp-soknad-v1/lag-summary",
    },
    cluster_id: "yn2PKSI4Q8SadECfap0AMA",
    consumer_group_id: "dp-soknad-v1",
    max_lag: 0,
    total_lag: 0,
    max_lag_consumer_id:
      "dp-soknad-57c589df5c-pj9lf-84446144-c177-4f14-818d-650be6070081",
    max_lag_consumer: {
      related:
        "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups/dp-soknad-v1/consumers/dp-soknad-57c589df5c-pj9lf-84446144-c177-4f14-818d-650be6070081",
    },
    max_lag_client_id: "consumer-dp-soknad-57c589df5c-pj9lf",
    max_lag_instance_id: "dp-soknad-57c589df5c-pj9lf",
    max_lag_topic_name: "teamdagpenger.journalforing.v1",
    max_lag_partition_id: 1,
    max_lag_partition: {
      related:
        "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/topics/teamdagpenger.journalforing.v1/partitions/1",
    },
  });
}
