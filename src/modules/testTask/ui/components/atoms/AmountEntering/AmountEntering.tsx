import styles from "./AmountEntering.module.css";

export function AmountEntering() {
  return (
    <div className={styles.container}>
      <input type="number" placeholder="сумма" />
      <label htmlFor="price">test</label>
    </div>
  );
}
