import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todos, settodos }) {
  const [Todo, settodo] = useState({ name: "", done: false });

  function ProgressEvent(e) {
    e.preventDefault();
    settodos([...todos, Todo]);
    settodo({ name: "", done: false });
    console.log(todos);
  }
  return (
    <form className={styles.todoform} onSubmit={(e) => ProgressEvent(e)}>
      <input
        className={styles.moderInput}
        onChange={(e) => settodo({ name: e.target.value, done: false })}
        type="text"
        value={Todo.name}
        placeholder="Add a Task"
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
}
