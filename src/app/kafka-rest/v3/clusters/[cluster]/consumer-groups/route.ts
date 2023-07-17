import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    kind: "KafkaConsumerGroupList",
    metadata: {
      self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups",
      next: null,
    },
    data: [
      {
        kind: "KafkaConsumerGroup",
        metadata: {
          self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups/dp-data-innlop-v1",
          resource_name:
            "crn:///kafka=yn2PKSI4Q8SadECfap0AMA/consumer-group=dp-data-innlop-v1",
        },
        cluster_id: "yn2PKSI4Q8SadECfap0AMA",
        consumer_group_id: "dp-data-innlop-v1",
        is_simple: false,
        partition_assignor: "range",
        state: "STABLE",
        coordinator: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/brokers/89",
        },
        consumers: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups/dp-data-innlop-v1/consumers",
        },
        lag_summary: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups/dp-data-innlop-v1/lag-summary",
        },
      },
      {
        kind: "KafkaConsumerGroup",
        metadata: {
          self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups/dp-soknad-v1",
          resource_name:
            "crn:///kafka=yn2PKSI4Q8SadECfap0AMA/consumer-group=dp-soknad-v1",
        },
        cluster_id: "yn2PKSI4Q8SadECfap0AMA",
        consumer_group_id: "dp-soknad-v1",
        is_simple: false,
        partition_assignor: "range",
        state: "STABLE",
        coordinator: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/brokers/90",
        },
        consumers: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups/dp-soknad-v1/consumers",
        },
        lag_summary: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups/dp-soknad-v1/lag-summary",
        },
      },
    ],
  });
}
