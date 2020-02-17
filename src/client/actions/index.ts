import * as ACTIONS from "../../constants/actions";
import * as Types from "../../types/actions";
import Todo from "../../types/todo";

export const setLoading = (id: string, status: boolean): Types.LoadingAction => ({
  type: ACTIONS.IS_LOADING,
  id,
  status
});

export const saveTodo = (data: Todo): Types.SaveTodoAction => ({
  type: ACTIONS.SAVE_TODO,
  data
});

export const saveTodoSuccess = (todo: Todo): Types.SaveTodoSuccessAction => ({
  type: ACTIONS.SAVE_TODO_OK,
  value: todo
});

export const saveTodoFailure = (error: string): Types.FailureAction => ({
  type: ACTIONS.SAVE_TODO_ERR,
  error
});

export const getTodos = () => ({
  type: ACTIONS.GET_TODOS
});

export const getTodosSuccess = (value: Todo[]): Types.GetTodosSuccessAction => ({
  type: ACTIONS.GET_TODOS_OK,
  value
});

export const getTodosFailure = (error: string): Types.FailureAction => ({
  type: ACTIONS.GET_TODOS_ERR,
  error
});
