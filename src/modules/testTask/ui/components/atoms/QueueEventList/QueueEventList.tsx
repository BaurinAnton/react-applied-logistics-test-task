import { useQueueEventContext } from "../../../../model/calculatorAndCounter";

export function QueueEventList() {
  const queueEventModel = useQueueEventContext();

  if (!queueEventModel) return null;

  return (
    <ul>
      {queueEventModel.queueEvent.map(({ value, id }) => (
        <li key={id}>{value}</li>
      ))}
    </ul>
  );
}
