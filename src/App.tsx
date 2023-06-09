import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AddTodo from "./components/todos/addTodo";
import Todo from "./models/todo";
import TodoItem from "./components/todos/todoItem";

enum FilterTypes {
  Undone = "undone",
  Done = "done",
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo): void => {
    setTodos([...todos, todo]);
  };

  const [filter, setFilter] = useState<FilterTypes>(FilterTypes.Undone);

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo: Todo) => todo.id !== id));
  };

  const editTodo = (id: number, value: string): void => {
    setTodos(
      todos.map((todo: Todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: value,
          };
        }
        return todo;
      })
    );
  };

  const ToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo: Todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            is_done: !todo.is_done,
          };
        }
        return todo;
      })
    );
  };

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === FilterTypes.Done) {
      return todo.is_done;
    } else {
      return !todo.is_done;
    }
  });

  return (
    <div className="App">
      <header>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <strong>Todo App</strong>
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className="jumbotron">
          <div className="container d-flex flex-column align-items-center">
            <h1 className="jumbotron-heading">Welcome!</h1>
            <p className="lead text-muted">
              To get started, add some items to your list:
            </p>
            <AddTodo
              // add={setTodos}
              add={addTodo}
            />
          </div>
        </section>
        <div className="todosList">
          <div className="container">
            <div className="d-flex flex-column align-items-center ">
              <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    onClick={(e) => setFilter(FilterTypes.Undone)}
                    className={`nav-item nav-link font-weight-bold ${
                      filter === FilterTypes.Undone ? "active" : ""
                    }`}
                    id="nav-home-tab"
                  >
                    undone <span className="badge badge-secondary">9</span>
                  </a>
                  <a
                    onClick={(e) => setFilter(FilterTypes.Done)}
                    className={`nav-item nav-link font-weight-bold ${
                      filter === FilterTypes.Done ? "active" : ""
                    }`}
                    id="nav-profile-tab"
                  >
                    done <span className="badge badge-success">9</span>
                  </a>
                </div>
              </nav>

              {filteredTodos.map((todo: Todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  deleteItems={deleteTodo}
                  editItems={editTodo}
                  ToggleTodo={ToggleTodo}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
