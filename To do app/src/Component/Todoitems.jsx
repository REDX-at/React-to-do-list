import style from "./Todoitems.css";

export default function Todoitems({ item, todos, settodos }) {
  function handleDelete(item) {
    console.log("Delete", item);
    settodos(todos.filter((todo) => todo !== item));
  }

  function chnageStyle(name) {
    console.log(name);
    item.done = !item.done;
    console.log(item.done);
  }
  return (
    <>
      <h1 onClick={() => chnageStyle(item.name)} className="item">
        {item.name}
      </h1>
      <button onClick={() => handleDelete(item)} className="delet">
        Delete
      </button>
    </>
  );
}
