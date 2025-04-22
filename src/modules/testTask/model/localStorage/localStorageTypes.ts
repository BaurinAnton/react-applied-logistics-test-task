export type TCalculatorModel = {
  amount: number;
  price: number;
  quantity: number;
  quantityInputValue: string;
  priceInputValue: string;
  amountInputValue: string;
  onPriceChange: (value: string) => void;
  onQuantityChange: (value: string) => void;
  onAmountChange: (value: string) => void;
};

export type TQueueEventModel = {
  queueEvent: {
    id: string;
    value: string;
  }[];
  setEvent: (event: string) => void;
};

export type TCounterModel = {
  counter: number;
};
