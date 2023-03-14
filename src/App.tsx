import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AddTodo from "./components/todos/addTodo";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // setTodos([
  //   {
  //     id: 1,
  //     title: "ssss",
  //     is_done: false,
  //   },
  // ]);

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
            <AddTodo add={setTodos} />
          </div>
        </section>
        <div className="todosList">
          <div className="container">
            <div className="d-flex flex-column align-items-center ">
              <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active font-weight-bold"
                    id="nav-home-tab"
                  >
                    undone <span className="badge badge-secondary">9</span>
                  </a>
                  <a
                    className="nav-item nav-link font-weight-bold"
                    id="nav-profile-tab"
                  >
                    done <span className="badge badge-success">9</span>
                  </a>
                </div>
              </nav>
              <div className="col-6 mb-2">
                <div className="d-flex justify-content-between align-items-center border rounded p-3">
                  <div>hello roocket</div>
                  <div>
                    <button type="button" className="btn btn-info btn-sm">
                      edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm ml-1"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className="d-flex justify-content-between align-items-center border rounded p-3">
                  <div>hello roocket</div>
                  <div>
                    <button type="button" className="btn btn-info btn-sm">
                      edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm ml-1"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className="d-flex justify-content-between align-items-center border rounded p-3">
                  <div>hello roocket</div>
                  <div>
                    <button type="button" className="btn btn-info btn-sm">
                      edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm ml-1"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
