import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todos, settodos }) {
  const [Todo, settodo] = useState("");

  function ProgressEvent(e) {
    e.preventDefault();
    settodos([...todos, Todo]);
    settodo("");
    console.log(todos);
  }
  return (
    <form className={styles.todoform} onSubmit={(e) => ProgressEvent(e)}>
      <input
      className={styles.moderInput}
        onChange={(e) => settodo(e.target.value)}
        type="text"
        value={Todo}
        placeholder="Add a Task"
      />
      <button className={styles.modernButton} type="submit">Add</button>
    </form>
  );
}
