import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    kind: "KafkaTopicList",
    metadata: {
      self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/topics",
      next: null,
    },
    data: [
      {
        kind: "KafkaTopic",
        metadata: {
          self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/topics/teamdagpenger.mottak.v1",
          resource_name:
            "crn:///kafka=yn2PKSI4Q8SadECfap0AMA/topic=teamdagpenger.mottak.v1",
        },
        cluster_id: "yn2PKSI4Q8SadECfap0AMA",
        topic_name: "teamdagpenger.mottak.v1",
        is_internal: false,
        replication_factor: 2,
        partitions_count: 3,
        partitions: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/topics/teamdagpenger.mottak.v1/partitions",
        },
        configs: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/topics/teamdagpenger.mottak.v1/configs",
        },
        partition_reassignments: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/topics/teamdagpenger.mottak.v1/partitions/-/reassignment",
        },
        authorized_operations: [],
      },
      {
        kind: "KafkaTopic",
        metadata: {
          self: "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/topics/teamdagpenger.rapid.v1",
          resource_name:
            "crn:///kafka=yn2PKSI4Q8SadECfap0AMA/topic=teamdagpenger.rapid.v1",
        },
        cluster_id: "yn2PKSI4Q8SadECfap0AMA",
        topic_name: "teamdagpenger.rapid.v1",
        is_internal: false,
        replication_factor: 2,
        partitions_count: 3,
        partitions: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/topics/teamdagpenger.rapid.v1/partitions",
        },
        configs: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/topics/teamdagpenger.rapid.v1/configs",
        },
        partition_reassignments: {
          related:
            "http://localhost:8082/v3/clusters/yn2PKSI4Q8SadECfap0AMA/topics/teamdagpenger.rapid.v1/partitions/-/reassignment",
        },
        authorized_operations: [],
      },
    ],
  });
}
