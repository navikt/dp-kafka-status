import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    kind: "KafkaBrokerList",
    metadata: {
      self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/brokers",
      next: null,
    },
    data: [
      {
        kind: "KafkaBroker",
        metadata: {
          self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/brokers/89",
          resource_name: "crn:///kafka=yn2PKSI4Q8SadECfap0AMA/broker=89",
        },
        cluster_id: "yn2PKSI4Q8SadECfap0AMA",
        broker_id: 89,
        host: "12.4.2.104",
        port: 26484,
        rack: null,
        configs: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/brokers/89/configs",
        },
        partition_replicas: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/brokers/89/partition-replicas",
        },
      },
      {
        kind: "KafkaBroker",
        metadata: {
          self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/brokers/90",
          resource_name: "crn:///kafka=yn2PKSI4Q8SadECfap0AMA/broker=90",
        },
        cluster_id: "yn2PKSI4Q8SadECfap0AMA",
        broker_id: 90,
        host: "12.4.2.105",
        port: 26484,
        rack: null,
        configs: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/brokers/90/configs",
        },
        partition_replicas: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/brokers/90/partition-replicas",
        },
      },
      {
        kind: "KafkaBroker",
        metadata: {
          self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/brokers/91",
          resource_name: "crn:///kafka=yn2PKSI4Q8SadECfap0AMA/broker=91",
        },
        cluster_id: "yn2PKSI4Q8SadECfap0AMA",
        broker_id: 91,
        host: "12.4.2.106",
        port: 26484,
        rack: null,
        configs: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/brokers/91/configs",
        },
        partition_replicas: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/brokers/91/partition-replicas",
        },
      },
    ],
  });
}
