import { KafkaBroker } from "@/lib/api/kafka-rest/brokers";

export function BrokerList({ brokers }: { brokers: KafkaBroker[] }) {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Brokers</h1>
      <div className="space-y-4">
        {brokers.map((broker) => (
          <Broker key={broker.broker_id} broker={broker} />
        ))}
      </div>
    </div>
  );
}

function Broker({ broker }: { broker: KafkaBroker }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">{broker.broker_id}</h2>
      <p>Host: {broker.host}</p>
      <p>Port: {broker.port}</p>
      <p>Replicas: {broker.partition_replicas.related}</p>
    </div>
  );
}
