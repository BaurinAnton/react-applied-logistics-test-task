"use client";
import styles from "./TestTask.module.css";
import { AmountEntering } from "../../atoms/AmountEntering";
import { PriceEntering } from "../../atoms/PriceEntering";
import { QuantityEntering } from "../../atoms/QuantityEntering";
import { SendingDataLaunch } from "../../atoms/SendingDataLaunch";
import { CalculatorAndCounterModelProvider } from "../../../../model/calculatorAndCounter";
import { QueueEventList } from "../../atoms/QueueEventList/QueueEventList";
import { MonotonouslyIncreasingNumber } from "../../atoms/MonotonouslyIncreasingNumber";

export function TestTask() {
  return (
    <CalculatorAndCounterModelProvider>
      <div className={styles.container}>
        <PriceEntering />
        <QuantityEntering />
        <AmountEntering />
        <SendingDataLaunch />
      </div>
      <MonotonouslyIncreasingNumber />
      <QueueEventList />
    </CalculatorAndCounterModelProvider>
  );
}
