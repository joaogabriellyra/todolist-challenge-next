'use client'

import Image from "next/image";
import Header from "./components/header";
import styles from "./page.module.css";
import plusIcon from "@/public/plus.svg";
import WithoutTasks from "./components/withoutTasks";
import Task from "./components/task";
import { ChangeEvent, useState } from "react";
import ITask from "./interfaces/itask";
import clsx from "clsx";

export default function Home() {
  const [task, setTask] = useState<ITask>({
    text: '',
  });
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [finishedTasks, setFinishedTasks] = useState<ITask[]>([]);
  const [finishedTasksRendered, setFinishedTasksRendered] = useState(false);
  const [error, setError] = useState(false);
  const [counterOfFinishedTasks, setCounterOfFinishedTasks] = useState(0);

  function handleTaskTextChange(e: ChangeEvent<HTMLInputElement>) {
    setError(false);
    setTask({ text: e.target.value });
  }
  
  function hadleTaskText(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (task.text) {
      const taskObject = { text: task.text, id: Date.now(), finished: false }
      const arrayOfTasks = [...tasks, taskObject]
      setTask({...taskObject, text: ''})
      setTasks(arrayOfTasks);
    } else {
      setError(true);
    }
  }

  function changeFinishedState(id: number) {
    const someTaskHasChangedTheFinishedState = tasks.map((task) => {
      if (task.id === id) {
        return {...task, finished: !task.finished}
      }
      return task
    });
    const taskWhoChangedTheFinishedStatus = tasks.find(task => task.id === id);
    taskWhoChangedTheFinishedStatus?.finished ? setCounterOfFinishedTasks(counterOfFinishedTasks - 1) : setCounterOfFinishedTasks(counterOfFinishedTasks + 1)
    setTasks(someTaskHasChangedTheFinishedState);
  }

  function deleteTask(id: number) {
    const theDeletedOne = tasks.find((task) => task.id === id);
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);
    setTasks(tasksWithoutDeletedOne);
    if (theDeletedOne?.finished) {
      setCounterOfFinishedTasks(counterOfFinishedTasks - 1);
    if (finishedTasksRendered) {
      const finishedTasksToRender = tasksWithoutDeletedOne.filter((task) => task.finished);
      setFinishedTasks(finishedTasksToRender);
    }
    }
  }

  function handleFinishedTasks() {
    if (finishedTasksRendered) {
      setFinishedTasks([]);
      setFinishedTasksRendered(false);
    } else {
      const finishedTasksToRender = tasks.filter((task) => task.finished);
      setFinishedTasks(finishedTasksToRender);
      setFinishedTasksRendered(true);
    }
  }

  return (
    <>
    <Header />
    <main className={styles.main}>
      <form onSubmit={hadleTaskText} className={styles.divTaskInputAndButton}>
        <input 
          type="text"
          placeholder="Adicione uma nova tarefa"
          className={clsx(styles.typeTaskInput, error && styles.typeTaskInputError)}
          value={task.text}
          onChange={handleTaskTextChange}
        />
        <button type='submit' className={styles.createTaskButton}>
          <span>Criar</span>
          <Image 
            src={plusIcon}
            alt="plus icon"
            width={16}
            height={16}
          />
        </button>
      </form>
      <div className={styles.boxWithInfoAboutTasks}>
        <div className={styles.boxWithInfoAboutTasksCreated}>
          <span>Tarefas criadas</span>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.boxWithInfoAboutTasksDone}>
          <span 
            onClick={handleFinishedTasks}
            className={clsx(finishedTasksRendered && finishedTasks.length && styles.finishedTasksRendered)}
          >
            Concluídas
          </span>
          <span>{tasks.length > 0 ? `${counterOfFinishedTasks} de ${tasks.length}` : 0}</span>
        </div>
      </div>
      <div className={tasks.length ? undefined : styles.boxWithoutTasks}>
        { tasks.length ? (finishedTasks.length ? finishedTasks.map(({text, id, finished}) => (
          <Task 
            text={text} 
            key={id} id={id} 
            finished={finished} 
            changeFinishedState={changeFinishedState}
            deleteTask={deleteTask}
          />
        )) : tasks.map(({text, id, finished}) => (
          <Task 
            text={text} 
            key={id} id={id} 
            finished={finished} 
            changeFinishedState={changeFinishedState}
            deleteTask={deleteTask}
          />
        )) ) : <WithoutTasks />}
      </div>
    </main>
    </>
  );
}
