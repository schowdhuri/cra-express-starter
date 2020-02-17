import * as ACTIONS from "../../constants/actions";
import * as Types from "../../types/actions";
import Todo from "../../types/todo";

const initialState: Array<Todo> = [];

export default (state=initialState, action:Types.GetTodosSuccessAction | Types.SaveTodoSuccessAction) => {
  const { type } = action;

  switch(type) {
    case ACTIONS.GET_TODOS_OK:
      return action.value;

    case ACTIONS.SAVE_TODO_OK:
      return [
        ...state,
        action.value
      ];
  }
  return state;
};
