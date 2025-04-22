"use client";
import { useCalculatorModel } from "../calculator";
import { useCounterModel } from "../counter";
import { useQueueEvent } from "../queueEvent";
import { useLocalStorageModel } from "../localStorage/localStorage";

export function useCalculatorAndCounterModel() {
  const counterModel = useCounterModel();
  const queueEventModel = useQueueEvent();
  const calculatorModel = useCalculatorModel(queueEventModel);
  const localStorageModel = useLocalStorageModel(
    calculatorModel,
    queueEventModel,
    counterModel
  );

  return {
    calculatorModel,
    counterModel,
    queueEventModel,
    localStorageModel,
  };
}
