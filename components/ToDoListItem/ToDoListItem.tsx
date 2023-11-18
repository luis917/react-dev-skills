import "./ToDoListItem.css";

export default function ToDoListItem({
  todo,
  index
}: {
  todo: string;
  index: number;
}) {
  return (
    <li
      className="ToDoListItem"
      style={{ backgroundColor: index % 2 ? "lavender" : "plum" }}
    >
      <li className="ToDoNumber">{index + 1}</li>
      {todo}
    </li>
  );
}
