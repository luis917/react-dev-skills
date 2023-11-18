import ToDoListItem from "../ToDoListItem/ToDoListItem";
import "./ToDoList.css";

export default function ToDoList({ todos }: { todos: string[] }) {
  // Application logic, etc. goes here
  return (
    <ul className="ToDoList">
      {todos.map((t, idx) => (
        <ToDoListItem todo={t} index={idx} key={idx} />
      ))}
    </ul>
  );
}
