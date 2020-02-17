import express from "express";

import DAO from "./utils/dao";
import Item from "./models/Item";

const dao = new DAO();
const app = express();

app.use(express.json());

app.get("/api/ping", (req, res) => {
  res.send("OK");
});

app.post("/api/todo", async (req, res) => {
  const { name, completed=false } = req.body;
  const todo = new Item();
  todo.name = name;
  todo.completed = completed;
  res.json(await dao.save(todo));
});

app.get("/api/todos", async (req, res) => {
  const todos = await dao.find(Item);
  res.json(todos);
});

app.listen(3001, () => {
  console.log("API server ready...");
});
