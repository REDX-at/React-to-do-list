import Todoitems from "./Todoitems";
import styles from "./todolist.module.css";

export default function Todolist({ todos, settodos }) {
  return (
    <div className={styles.todolist}>
      {todos.map((item) => (
        <Todoitems
          key={item.name}
          item={item}
          todos={todos}
          settodos={settodos}
        />
      ))}
    </div>
  );
  s;
}
