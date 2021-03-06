import React, { FunctionComponent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import styled from "styled-components";

import history from "../utils/history";
import Todo from "../../types/todo";
import { getTodos } from "../selectors";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

import "./App.css";

interface AppProps {
  children: any;
}

const Skeleton: FunctionComponent<AppProps> = (props: AppProps) => {
  return (
    <Wrapper>
      <Card>{props.children}</Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  @media all and (min-width: 780px) {
    padding: 2rem;
  }
`;
const Card = styled.div`
  padding: 2rem 1rem;
  width: 100vw;
  @media all and (min-width: 780px) {
    background: #e2e2e2;
    border-radius: 16px;
    box-shadow: 20px 20px 60px #c0c0c0, -20px -20px 60px #ffffff;
    max-width: 60rem;
    padding: 2rem;
    width: 80vw;
  }
`;

// Routes
export default () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact>
        <Skeleton>
          <CreateTodo />
          <TodoList />
        </Skeleton>
      </Route>
    </Switch>
  </ConnectedRouter>
);
