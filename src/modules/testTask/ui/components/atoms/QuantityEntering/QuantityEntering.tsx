import { useCalculatorContext } from "../../../../model/calculatorAndCounter";
import styles from "./QuantityEntering.module.css";

export function QuantityEntering() {
  const calculatorModel = useCalculatorContext();

  function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    calculatorModel?.onQuantityChange(event.target.value);
  }

  if (!calculatorModel) return null;

  return (
    <div className={styles.container}>
      <input
        type="number"
        name="amount"
        placeholder="кол-во"
        onChange={onChangeInput}
        value={calculatorModel.quantityInputValue}
      />
      <label htmlFor="price">{calculatorModel.quantity}</label>
    </div>
  );
}
