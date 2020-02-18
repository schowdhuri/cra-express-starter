import React, { FunctionComponent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as actions from "../actions/index";
import Todo from "../../types/todo";
import { getTodos } from "../selectors";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

import "./App.css";

interface AppProps {
  children: any;
}

const App: FunctionComponent<AppProps> = () => {
  return (
    <Wrapper>
      <Card>
        <CreateTodo />
        <TodoList />
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;
const Card = styled.div`
  background: #e2e2e2;
  border-radius: 16px;
  box-shadow: 20px 20px 60px #c0c0c0, -20px -20px 60px #ffffff;
  padding: 32px;
  width: 60rem;
`;

export default App;
