import styles from "./TestTask.module.css";
import { AmountEntering } from "../../atoms/AmountEntering";
import { PriceEntering } from "../../atoms/PriceEntering";
import { QuantityEntering } from "../../atoms/QuantityEntering";
import { SendingDataLaunch } from "../../atoms/SendingDataLaunch";

export function TestTask() {
  return (
    <div className={styles.container}>
      <PriceEntering />
      <QuantityEntering />
      <AmountEntering />
      <SendingDataLaunch />
    </div>
  );
}
