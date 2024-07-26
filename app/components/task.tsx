import clsx from "clsx";
import ITask from "../interfaces/itask";
import styles from "./task.module.css";
import { Trash, CheckCircle, Circle } from "@phosphor-icons/react/dist/ssr"

export default function Task({text, id, finished, changeFinishedState, deleteTask, setFinishedTasks}: ITask, ) {
  function handleFinishedState() {
    if (id) changeFinishedState?.(id);
  }

  function handleDeleteTask() {
    if (id) deleteTask?.(id);
  }

  return (
    <div className={styles.task}>
      <div className={styles.textAndCheckbox}>
      <span onClick={handleFinishedState}>
      { finished ? <CheckCircle className={styles.checked}/> : <Circle className={styles.check}/>}
      </span>
      <p className={clsx(finished && styles.finishedParagraph)}>{text}</p>
      </div>
      <button 
        className={styles.trashButton}
        onClick={handleDeleteTask}
      >
        <Trash/>
      </button>
    </div>
  )
}