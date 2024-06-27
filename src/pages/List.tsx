import useTodos from "../hooks/useTodos";
import { Page, Todo } from "../types";

interface Props {
  navigate: (page: Page) => void;
}

const List = ({ navigate }: Props) => {
  const { todos, selectTodo } = useTodos();

  const goToDetail = (todo: Todo) => {
    selectTodo(todo);
    navigate("detail");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: 16,
      }}
    >
      <h2 style={{ margin: 0 }}>List</h2>
      {todos.map((todo) => (
        <div key={todo.id} style={{ display: "flex", marginTop: 8 }}>
          <input
            type="checkbox"
            checked={todo.isComplete}
            style={{ marginRight: 8 }}
          />
          <p onClick={goToDetail.bind(null, todo)}>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
