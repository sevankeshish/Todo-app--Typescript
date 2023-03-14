import { useState } from "react";
import Todo from "../../models/todo";
import EditTodo from "./editTodo";

interface Props {
  todo: Todo;
  deleteItems: (id: number) => void;
  editItems: (id: number, value: string) => void;
  ToggleTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({
  todo,
  deleteItems,
  editItems,
  ToggleTodo,
}) => {
  const [editStatus, setEditStatus] = useState<boolean>(false);

  return !editStatus ? (
    <div className="col-6 mb-2">
      <div className="d-flex justify-content-between align-items-center border rounded p-3">
        <div
          onClick={() => ToggleTodo(todo.id)}
          style={{ textDecoration: todo.is_done ? "line-through" : "none" }}
        >
          {todo.title}
        </div>
        <div>
          <button
            type="button"
            className="btn btn-info btn-sm"
            onClick={(e) => setEditStatus(true)}
          >
            edit
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm ml-1"
            onClick={() => deleteItems(todo.id)}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  ) : (
    <EditTodo todo={todo} editItems={editItems} setEditStatus={setEditStatus} />
  );
};

export default TodoItem;
