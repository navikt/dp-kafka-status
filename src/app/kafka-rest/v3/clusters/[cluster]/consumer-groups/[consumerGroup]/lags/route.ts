import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    kind: "KafkaConsumerLagList",
    metadata: {
      self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups/dp-soknad-v1/lags",
      next: null,
    },
    data: [
      {
        kind: "KafkaConsumerLag",
        metadata: {
          self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups/dp-soknad-v1/lags/teamdagpenger.journalforing.v1/partitions/0",
          resource_name:
            "crn:///kafka=yn2PKSI4Q8SadECfap0AMA/consumer-group=dp-soknad-v1/lag=teamdagpenger.journalforing.v1/partition=0",
        },
        cluster_id: "yn2PKSI4Q8SadECfap0AMA",
        consumer_group_id: "dp-soknad-v1",
        topic_name: "teamdagpenger.journalforing.v1",
        partition_id: 0,
        consumer_id:
          "dp-soknad-57c589df5c-2mzwv-17e55f0e-7f67-4896-b0a7-11c9f417e1c9",
        instance_id: "dp-soknad-57c589df5c-2mzwv",
        client_id: "consumer-dp-soknad-57c589df5c-2mzwv",
        current_offset: 205719,
        log_end_offset: 205719,
        lag: 0,
      },
      {
        kind: "KafkaConsumerLag",
        metadata: {
          self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups/dp-soknad-v1/lags/teamdagpenger.journalforing.v1/partitions/1",
          resource_name:
            "crn:///kafka=yn2PKSI4Q8SadECfap0AMA/consumer-group=dp-soknad-v1/lag=teamdagpenger.journalforing.v1/partition=1",
        },
        cluster_id: "yn2PKSI4Q8SadECfap0AMA",
        consumer_group_id: "dp-soknad-v1",
        topic_name: "teamdagpenger.journalforing.v1",
        partition_id: 1,
        consumer_id:
          "dp-soknad-57c589df5c-pj9lf-84446144-c177-4f14-818d-650be6070081",
        instance_id: "dp-soknad-57c589df5c-pj9lf",
        client_id: "consumer-dp-soknad-57c589df5c-pj9lf",
        current_offset: 205624,
        log_end_offset: 205624,
        lag: 0,
      },
      {
        kind: "KafkaConsumerLag",
        metadata: {
          self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups/dp-soknad-v1/lags/teamdagpenger.journalforing.v1/partitions/2",
          resource_name:
            "crn:///kafka=yn2PKSI4Q8SadECfap0AMA/consumer-group=dp-soknad-v1/lag=teamdagpenger.journalforing.v1/partition=2",
        },
        cluster_id: "yn2PKSI4Q8SadECfap0AMA",
        consumer_group_id: "dp-soknad-v1",
        topic_name: "teamdagpenger.journalforing.v1",
        partition_id: 2,
        consumer_id:
          "dp-soknad-57c589df5c-vdh8g-5b09a1b6-a949-426b-bbec-747487b287e8",
        instance_id: "dp-soknad-57c589df5c-vdh8g",
        client_id: "consumer-dp-soknad-57c589df5c-vdh8g",
        current_offset: 205208,
        log_end_offset: 205208,
        lag: 0,
      },
      {
        kind: "KafkaConsumerLag",
        metadata: {
          self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups/dp-soknad-v1/lags/teamdagpenger.rapid.v1/partitions/0",
          resource_name:
            "crn:///kafka=yn2PKSI4Q8SadECfap0AMA/consumer-group=dp-soknad-v1/lag=teamdagpenger.rapid.v1/partition=0",
        },
        cluster_id: "yn2PKSI4Q8SadECfap0AMA",
        consumer_group_id: "dp-soknad-v1",
        topic_name: "teamdagpenger.rapid.v1",
        partition_id: 0,
        consumer_id:
          "dp-soknad-57c589df5c-2mzwv-17e55f0e-7f67-4896-b0a7-11c9f417e1c9",
        instance_id: "dp-soknad-57c589df5c-2mzwv",
        client_id: "consumer-dp-soknad-57c589df5c-2mzwv",
        current_offset: 22388593,
        log_end_offset: 22388593,
        lag: 0,
      },
      {
        kind: "KafkaConsumerLag",
        metadata: {
          self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups/dp-soknad-v1/lags/teamdagpenger.rapid.v1/partitions/1",
          resource_name:
            "crn:///kafka=yn2PKSI4Q8SadECfap0AMA/consumer-group=dp-soknad-v1/lag=teamdagpenger.rapid.v1/partition=1",
        },
        cluster_id: "yn2PKSI4Q8SadECfap0AMA",
        consumer_group_id: "dp-soknad-v1",
        topic_name: "teamdagpenger.rapid.v1",
        partition_id: 1,
        consumer_id:
          "dp-soknad-57c589df5c-pj9lf-84446144-c177-4f14-818d-650be6070081",
        instance_id: "dp-soknad-57c589df5c-pj9lf",
        client_id: "consumer-dp-soknad-57c589df5c-pj9lf",
        current_offset: 21985507,
        log_end_offset: 21985507,
        lag: 0,
      },
      {
        kind: "KafkaConsumerLag",
        metadata: {
          self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/consumer-groups/dp-soknad-v1/lags/teamdagpenger.rapid.v1/partitions/2",
          resource_name:
            "crn:///kafka=yn2PKSI4Q8SadECfap0AMA/consumer-group=dp-soknad-v1/lag=teamdagpenger.rapid.v1/partition=2",
        },
        cluster_id: "yn2PKSI4Q8SadECfap0AMA",
        consumer_group_id: "dp-soknad-v1",
        topic_name: "teamdagpenger.rapid.v1",
        partition_id: 2,
        consumer_id:
          "dp-soknad-57c589df5c-vdh8g-5b09a1b6-a949-426b-bbec-747487b287e8",
        instance_id: "dp-soknad-57c589df5c-vdh8g",
        client_id: "consumer-dp-soknad-57c589df5c-vdh8g",
        current_offset: 21963555,
        log_end_offset: 21963555,
        lag: 0,
      },
    ],
  });
}
