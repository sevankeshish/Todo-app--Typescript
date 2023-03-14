import { useState, Dispatch, SetStateAction } from "react";
import Todo from "../../models/todo";

interface Props {
  todo: Todo;
  editItems: (id: number, value: string) => void;
  setEditStatus: Dispatch<SetStateAction<boolean>>;
}

const EditTodo: React.FC<Props> = ({ todo, editItems, setEditStatus }) => {
  const [input, setInput] = useState<string>(todo.title);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (input !== "") {
      editItems(todo.id, input);
      setInput("");
      setEditStatus(false);
    }
  };

  return (
    <form onSubmit={submitHandler} className="col-6 mb-2">
      <div className="d-flex justify-content-between align-items-center border rounded p-3">
        <div>
          <input type="text" value={input} onChange={inputHandler}></input>
        </div>
        <div>
          <button type="submit" className="btn btn-info btn-sm">
            edit
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditTodo;
