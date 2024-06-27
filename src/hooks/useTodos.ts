import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../types";

const initialTodos = [
  {
    id: uuidv4(),
    description: "Fix checkboxes",
    isComplete: false,
    createdAt: new Date().getTime(),
  },
];

const useTodos = () => {
  const [state, dispatch] = useReducer(reducer, {
    todos: initialTodos,
    selectedTodo: null,
  });

  const { todos, selectedTodo } = state;

  const selectTodo = (todo: Todo) => {
    dispatch({
      type: "selectTodo",
      payload: {
        selectedTodo: todo,
      },
    });
  };

  return {
    todos,
    selectedTodo,
    selectTodo,
  };
};

interface State {
  todos: Todo[];
  selectedTodo: Todo | null;
}

interface Action {
  type: string;
  payload: {
    newTodo?: Pick<Todo, "description">;
    selectedTodo?: Todo;
  };
}

const reducer = (state: State, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case "selectTodo":
      const { selectedTodo } = payload;

      if (!selectedTodo) return state;

      return { ...state, selectedTodo };
    default:
      return state;
  }
};

export default useTodos;
