import React, { FunctionComponent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/index";
import Todo from "../../types/todo";
import { getTodos } from "../selectors";
import logo from "../images/logo.svg";
import "./App.css";

interface AppProps {
  children: any;
}

const App: FunctionComponent<AppProps> = () => {
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector(getTodos);
  useEffect(() => {
    dispatch(actions.getTodos());
  }, []);
  const changeName = (ev: React.FormEvent<EventTarget>) => {
    const target = ev.target as HTMLInputElement;
    setName(target.value);
  };
  const changeCompleted = (ev: React.FormEvent<EventTarget>) => {
    const target = ev.target as HTMLInputElement;
    setCompleted(target.checked);
  };
  const createTodo = () => {
    if (name) {
      dispatch(actions.saveTodo({ name, completed }));
      setName("");
      setCompleted(false);
    }
  };
  const onSubmit = (ev: React.FormEvent<EventTarget>) => {
    ev.preventDefault();
    return false;
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span>{todo.name}</span>
              <span>{todo.completed}</span>
            </li>
          ))}
        </ul>
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input type="text" onChange={changeName} value={name} />
          </label>
          <label>
            Completed
            <input
              type="checkbox"
              checked={completed}
              onChange={changeCompleted}
            />
          </label>
          <button onClick={createTodo}>Create</button>
        </form>
      </header>
    </div>
  );
};

export default App;
