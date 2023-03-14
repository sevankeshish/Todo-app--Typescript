import { useState } from "react";
import Todo from "../../models/todo";

interface Props {
  title?: string;
  add: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const AddTodo: React.FC<Props> = ({ add }) => {
  const [input, setInput] = useState<string>("");

  return (
    <div className="form-inline">
      <div className="form-group">
        <input
          type="text"
          value={input}
          className="form-control mx-sm-3"
          placeholder="i want to do ..."
        />
        <button className="btn btn-primary">add</button>
      </div>
    </div>
  );
};

export default AddTodo;
