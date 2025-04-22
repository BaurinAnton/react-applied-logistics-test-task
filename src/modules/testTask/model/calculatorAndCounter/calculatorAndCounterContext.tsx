"use client";
import { createContext, useContext } from "react";
import { useCalculatorAndCounterModel } from "./calculatorAndCounter";

type TCalculatorAndCounterProviderProps = { children: React.ReactNode };

const DataLocalStorageContext = createContext<
  ReturnType<typeof useCalculatorAndCounterModel>["localStorageModel"] | null
>(null);

const CalculatorContext = createContext<
  ReturnType<typeof useCalculatorAndCounterModel>["calculatorModel"] | null
>(null);

const CounterContext = createContext<
  ReturnType<typeof useCalculatorAndCounterModel>["counterModel"] | null
>(null);

const QueueEventContext = createContext<
  ReturnType<typeof useCalculatorAndCounterModel>["queueEventModel"] | null
>(null);

export const useDataLocalStorageContext = () => {
  return useContext(DataLocalStorageContext);
};

export const useCalculatorContext = () => {
  return useContext(CalculatorContext);
};

export const useCounterContext = () => {
  return useContext(CounterContext);
};

export const useQueueEventContext = () => {
  return useContext(QueueEventContext);
};

export const CalculatorAndCounterModelProvider = ({
  children,
}: TCalculatorAndCounterProviderProps) => {
  const { calculatorModel, counterModel, queueEventModel, localStorageModel } =
    useCalculatorAndCounterModel();

  return (
    <DataLocalStorageContext.Provider value={localStorageModel}>
      <CalculatorContext.Provider value={calculatorModel}>
        <CounterContext.Provider value={counterModel}>
          <QueueEventContext.Provider value={queueEventModel}>
            {children}
          </QueueEventContext.Provider>
        </CounterContext.Provider>
      </CalculatorContext.Provider>
    </DataLocalStorageContext.Provider>
  );
};
