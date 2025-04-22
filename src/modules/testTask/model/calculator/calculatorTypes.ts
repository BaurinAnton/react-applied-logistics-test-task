export type TQueue = Array<"price" | "quantity" | "amount">;

export type TQueueEventModel = {
  queueEvent: {
    id: string;
    value: string;
  }[];
  setEvent: (event: string) => void;
};
