import styles from "./task.module.css";
import { Trash, CheckCircle, Circle } from "@phosphor-icons/react/dist/ssr"

export default function Task() {
  return (
    <div className={styles.task}>
      <CheckCircle className={styles.checked} />
      <p>Integer urna medium massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button>
        <Trash/>
      </button>
    </div>
  )
}