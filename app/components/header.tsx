import Image from "next/image";
import rocketIcon from "@/public/rocket.svg"
import toDoIcon from "@/public/todo.svg"
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.div}>
        <Image 
          src={rocketIcon}
          alt="Rocket"
          width={rocketIcon.width}
          height={rocketIcon.height}   
          className={styles.rocket}
        />
        <Image 
          src={toDoIcon}
          alt="ToDo"
          width={toDoIcon.width}
          height={toDoIcon.height}   
        />
      </div>
    </header>
  )
}