import Image from "next/image";
import Header from "./components/header";
import styles from "./page.module.css";
import plusIcon from "@/public/plus.svg";
import WithoutTasks from "./components/withoutTasks";
import Task from "./components/task";

export default function Home() {
  return (
    <>
    <Header />
    <main className={styles.main}>
      <div className={styles.divTaskInputAndButton}>
        <input 
          type="text"
          placeholder="Adicione uma nova tarefa"
          className={styles.typeTaskInput}
        />
        <button className={styles.createTaskButton}>
          <span>Criar</span>
          <Image 
            src={plusIcon}
            alt="plus icon"
            width={16}
            height={16}
          />
        </button>
      </div>
      <div className={styles.boxWithInfoAboutTasks}>
        <div className={styles.boxWithInfoAboutTasksCreated}>
          <span>Tarefas criadas</span>
          <span>0</span>
        </div>
        <div className={styles.boxWithInfoAboutTasksDone}>
          <span>Concluídas</span>
          <span>0</span>
        </div>
      </div>
      <div className={styles.boxWithoutTasks}>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </div>
    </main>
    </>
  );
}
