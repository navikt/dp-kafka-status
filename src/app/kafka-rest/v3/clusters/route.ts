import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    kind: "KafkaClusterList",
    metadata: {
      self: "http://localhost:8082/v3/clusters",
      next: null,
    },
    data: [
      {
        kind: "KafkaCluster",
        metadata: {
          self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA",
          resource_name: "crn:///kafka=yn2PKSI4Q8SadECfap0AMA",
        },
        cluster_id: "yn2PKSI4Q8SadECfap0AMA",
        controller: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/brokers/92",
        },
        acls: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/acls",
        },
        brokers: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/brokers",
        },
        broker_configs: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/broker-configs",
        },
        consumer_groups: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups",
        },
        topics: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/topics",
        },
        partition_reassignments: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/topics/-/partitions/-/reassignment",
        },
      },
    ],
  });
}
