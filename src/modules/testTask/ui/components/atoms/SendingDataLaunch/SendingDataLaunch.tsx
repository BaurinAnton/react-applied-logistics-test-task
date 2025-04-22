import { useDataLocalStorageContext } from "../../../../model/calculatorAndCounter";
import styles from "./SendingDataLaunch.module.css";

export function SendingDataLaunch() {
  const dataLocalStorageModel = useDataLocalStorageContext();

  function onClick() {
    dataLocalStorageModel?.setDataForLocalStorage();
  }

  if (!dataLocalStorageModel) return null;

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        Отправить
      </button>
      <label>{dataLocalStorageModel.dataLocalStorage}</label>
    </div>
  );
}
