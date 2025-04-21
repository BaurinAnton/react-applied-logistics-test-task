import styles from "./QuantityEntering.module.css";

export function QuantityEntering() {
  return (
    <div className={styles.container}>
      <input type="number" placeholder="кол-во" />
      <label htmlFor="price">test</label>
    </div>
  );
}
