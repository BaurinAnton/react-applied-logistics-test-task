import { TestTask } from "@/modules/testTask";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <TestTask />
    </div>
  );
}
