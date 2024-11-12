import styles from "./Todoitems.module.css";

export default function Todoitems({ item, todos, settodos }) {
  function handleDelete(item) {
    console.log("Delete", item);
    settodos(todos.filter((todo) => todo !== item));
  }

  function chnageStyle(name) {
    const newTodos = todos.map((todo) => {
      if (todo.name === name) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    settodos(newTodos);
  }

  const done = item.done ? styles.change : "";
  return (
    <>
      <div className={styles.flexitem}>
        <h1 onClick={() => chnageStyle(item.name)} className={done}>
          {item.name}
        </h1>
        <button onClick={() => handleDelete(item)} className={styles.delet}>
          Delete
        </button>
      </div>
    </>
  );
}
