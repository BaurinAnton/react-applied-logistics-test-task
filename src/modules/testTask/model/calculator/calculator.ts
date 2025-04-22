"use client";
import {
  calculateAmount,
  calculatePrice,
  calculateQuantity,
  getCurrentQueue,
  convertInputValueInNumber,
} from "./calculatorHelpers";
import type { TQueue, TQueueEventModel } from "./calculatorTypes";
import { DEFAULT_QUEUE, DELAY_DEBOUNCE } from "./calculatorConstants";
import { useRef, useState } from "react";

export function useCalculatorModel(queueEventModel: TQueueEventModel) {
  const [amount, setAmount] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [queue, setQueue] = useState<TQueue>(DEFAULT_QUEUE as TQueue);
  const [amountInputValue, setAmountInputValue] = useState<string>(
    String(amount)
  );
  const [priceInputValue, setPriceInputValue] = useState<string>(String(price));
  const [quantityInputValue, setQuantityInputValue] = useState<string>(
    String(quantity)
  );
  const idTimeoutAmount = useRef<NodeJS.Timeout>(null);
  const idTimeoutPrice = useRef<NodeJS.Timeout>(null);
  const idTimeoutQuantity = useRef<NodeJS.Timeout>(null);

  function changePrice(value: string) {
    const convertedPrice = convertInputValueInNumber(value);

    if (convertedPrice === null) return;

    const currentQueue = getCurrentQueue(queue, "price");
    const lastImmutableField = currentQueue[currentQueue.length - 1];
    setPrice(convertedPrice);
    setQueue(currentQueue);

    if (lastImmutableField === "amount") {
      const calculatedAmount = calculateAmount({
        quantity,
        price: convertedPrice,
      });
      setAmount(calculatedAmount);
      setAmountInputValue(String(calculatedAmount));
    }

    if (lastImmutableField === "quantity") {
      const calculatedQuantity = calculateQuantity({
        price: convertedPrice,
        amount,
      });
      setQuantity(calculatedQuantity);
      setQuantityInputValue(String(calculatedQuantity));
    }
  }

  function changeQuantity(value: string) {
    const convertedQuantity = convertInputValueInNumber(value);

    if (convertedQuantity === null) return;

    const currentQueue = getCurrentQueue(queue, "quantity");
    const lastImmutableField = currentQueue[currentQueue.length - 1];
    setQuantity(convertedQuantity);
    setQueue(currentQueue);

    if (lastImmutableField === "price") {
      const calculatedPrice = calculatePrice({
        quantity: convertedQuantity,
        amount,
      });
      setPrice(calculatedPrice);
      setPriceInputValue(String(calculatedPrice));
    }

    if (lastImmutableField === "amount") {
      const calculatedAmount = calculateAmount({
        quantity: convertedQuantity,
        price,
      });
      setAmount(calculatedAmount);
      setAmountInputValue(String(calculatedAmount));
    }
  }

  function changeAmount(value: string) {
    const convertedAmount = convertInputValueInNumber(value);

    if (convertedAmount === null) return;

    const currentQueue = getCurrentQueue(queue, "amount");
    const lastImmutableField = currentQueue[currentQueue.length - 1];
    setAmount(convertedAmount);
    setQueue(currentQueue);

    if (lastImmutableField === "price") {
      const calculatedPrice = calculatePrice({
        quantity,
        amount: convertedAmount,
      });
      setPrice(calculatedPrice);
      setPriceInputValue(String(calculatedPrice));
    }

    if (lastImmutableField === "quantity") {
      const calculatedQuantity = calculateQuantity({
        price,
        amount: convertedAmount,
      });
      setQuantity(calculatedQuantity);
      setQuantityInputValue(String(calculatedQuantity));
    }
  }

  function onPriceChange(value: string) {
    setPriceInputValue(value);

    if (idTimeoutPrice.current) {
      clearTimeout(idTimeoutPrice.current);
    }

    idTimeoutPrice.current = setTimeout(() => {
      changePrice(value);
      queueEventModel.setEvent("событие изменения input-ов (1)");
    }, DELAY_DEBOUNCE);
  }

  function onQuantityChange(value: string) {
    setQuantityInputValue(value);

    if (idTimeoutQuantity.current) {
      clearTimeout(idTimeoutQuantity.current);
    }

    idTimeoutQuantity.current = setTimeout(() => {
      changeQuantity(value);
      queueEventModel.setEvent("событие изменения input-ов (2)");
    }, DELAY_DEBOUNCE);
  }

  function onAmountChange(value: string) {
    setAmountInputValue(value);

    if (idTimeoutAmount.current) {
      clearTimeout(idTimeoutAmount.current);
    }

    idTimeoutAmount.current = setTimeout(() => {
      changeAmount(value);
      queueEventModel.setEvent("событие изменения input-ов (3)");
    }, DELAY_DEBOUNCE);
  }

  return {
    amount,
    price,
    quantity,
    quantityInputValue,
    priceInputValue,
    amountInputValue,
    onPriceChange,
    onQuantityChange,
    onAmountChange,
  };
}
