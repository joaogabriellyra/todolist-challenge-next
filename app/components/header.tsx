import Image from "next/image";
import rocketIcon from "@/public/rocket.jpg"
import toDoIcon from "@/public/todo.png"

export default function Header() {
  return (
    <header>
      <div>
        <Image 
          src={rocketIcon}
          alt="Rocket"
          width={rocketIcon.width}
          height={rocketIcon.height}   
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