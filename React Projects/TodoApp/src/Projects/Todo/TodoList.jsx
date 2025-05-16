import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  id,
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button
        className="check-btn"
        onClick={() => onHandleCheckedTodo(id)}
        aria-label="Mark as completed"
      >
        <MdCheck />
      </button>
      <button
        className="delete-btn"
        onClick={() => onHandleDeleteTodo(id)}
        aria-label="Delete task"
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};