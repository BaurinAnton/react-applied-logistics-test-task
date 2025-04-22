import { useMemo, useState } from "react";

export function useQueueEvent() {
  const [queueEvent, setQueueEvent] = useState<{ id: string; value: string }[]>(
    []
  );

  function setEvent(event: string) {
    setQueueEvent((currentQueueEvent) => [
      { id: String(currentQueueEvent.length + 1), value: event },
      ...currentQueueEvent,
    ]);
  }

  const memoQueueEvent = useMemo(
    () => ({
      queueEvent,
      setEvent,
    }),
    [queueEvent]
  );

  return memoQueueEvent;
}
