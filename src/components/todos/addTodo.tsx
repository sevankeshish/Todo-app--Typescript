import React, { useState } from "react";
import Todo from "../../models/todo";

interface Props {
  title?: string;
  //   add: React.Dispatch<React.SetStateAction<Todo[]>>;
  add: (todo: Todo) => void;
}

// const AddTodo: React.FC<Props> = ({ add }) => {
const AddTodo: React.FC<Props> = ({ add }) => {
  const [input, setInput] = useState<string>("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (input !== "") {
      //   add((todos: Todo[]): Todo[] => {
      //     return [
      //       ...todos,
      //       {
      //         id: Date.now(),
      //         title: input,
      //         is_done: false,
      //       },
      //     ];
      //   });
      add({
        id: Date.now(),
        title: input,
        is_done: false,
      });
      setInput("");
    }
  };

  return (
    <form onSubmit={submitHandler} className="form-inline mb-4">
      <div className="form-group d-flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control mx-sm-3"
          placeholder="i want to do ..."
        />
        <button type="submit" className="btn btn-primary">
          add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
