"use client";
import { useCalculatorContext } from "../../../../model/calculatorAndCounter";
import styles from "./PriceEntering.module.css";

export function PriceEntering() {
  const calculatorModel = useCalculatorContext();

  function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    calculatorModel?.onPriceChange(event.target.value);
  }

  if (!calculatorModel) return null;

  return (
    <div className={styles.container}>
      <input
        type="number"
        name="price"
        placeholder="цена"
        onChange={onChangeInput}
        value={calculatorModel.priceInputValue}
      />
      <label htmlFor="price">{calculatorModel.price}</label>
    </div>
  );
}
