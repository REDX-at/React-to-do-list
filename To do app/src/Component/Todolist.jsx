import Todoitems from "./Todoitems";

export default function Todolist({ todos }) {
  return (
    <div>
      {todos.map((item, index) => (
        <Todoitems key={index} item={item} />
      ))}
    </div>
  );
}
