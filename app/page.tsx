import Image from "next/image";
import Header from "./components/header";
import styles from "./page.module.css";
import plusIcon from "@/public/plus.png";
import clipboardIcon from "@/public/clipboard.png";

export default function Home() {
  console.log(plusIcon)
  return (
    <>
    <Header />
    <main className={styles.main}>
      <div>
        <input 
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button>
          Criar
          <Image 
            src={plusIcon}
            alt="plus icon"
            width={16}
            height={16}
          />
        </button>
      </div>
      <div>
        <div>
          <span>Tarefas criadas</span>
          <span></span>
        </div>
        <div>
          <span>Concluídas</span>
          <span></span>
        </div>
      </div>
      <div>
        <Image
          src={clipboardIcon}
          alt="clipboard"
        />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </main>
    </>
  );
}
