import Todoitems from "./Todoitems";
import Footer from "./Footer";
import styles from "./todolist.module.css";

export default function Todolist({ todos, settodos }) {
  const taskDone = todos.filter((todo) => todo.done).length;
  const totalTask = todos.length;

  const sorttodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  console.log(sorttodos);
  return (
    <>
      <div className={styles.todolist}>
        {sorttodos.map((item) => (
          <Todoitems
            key={item.name}
            item={item}
            todos={todos}
            settodos={settodos}
          />
        ))}
      </div>
      <Footer taskDone={taskDone} totalTask={totalTask} />
    </>
  );
  s;
}
