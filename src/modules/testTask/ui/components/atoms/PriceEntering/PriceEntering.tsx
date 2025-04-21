import styles from "./PriceEntering.module.css";

export function PriceEntering() {
  return (
    <div className={styles.container}>
      <input type="number" placeholder="цена" />
      <label htmlFor="price">test</label>
    </div>
  );
}
