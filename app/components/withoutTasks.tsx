import Image from "next/image";
import clipboardIcon from "@/public/clipboard.svg";
import styles from "./withoutTasks.module.css";

export default function WithoutTasks() {
  return (
    <div className={styles.divWithoutTasks}>
      <Image
        src={clipboardIcon}
        alt="clipboard"
      />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}