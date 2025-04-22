import { useCalculatorContext } from "../../../../model/calculatorAndCounter/calculatorAndCounterContext";
import styles from "./AmountEntering.module.css";

export function AmountEntering() {
  const calculatorModel = useCalculatorContext();

  function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    calculatorModel?.onAmountChange(event.target.value);
  }

  if (!calculatorModel) return null;

  return (
    <div className={styles.container}>
      <input
        type="number"
        name="amount"
        placeholder="сумма"
        onChange={onChangeInput}
        value={calculatorModel.amountInputValue}
      />
      <label htmlFor="price">{calculatorModel.amount}</label>
    </div>
  );
}
