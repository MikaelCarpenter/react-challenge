import useTodos from "../hooks/useTodos";
import { Page } from "../types";

interface Props {
  navigate: (page: Page) => void;
}

const Detail = ({ navigate }: Props) => {
  const { selectedTodo } = useTodos();

  const goToList = () => {
    navigate("list");
  };

  if (!selectedTodo)
    return (
      <div>
        <h3>No selected Todo</h3>
        <button onClick={goToList}>Go Back</button>
      </div>
    );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: 16,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ margin: 0 }}>Detail</h2>
        <button onClick={goToList}>Go Back</button>
      </div>
      <p>{selectedTodo.id}</p>
      <p>{selectedTodo.description}</p>
      <p>{`${selectedTodo.isComplete}`}</p>
      <p>{selectedTodo.createdAt}</p>
    </div>
  );
};

export default Detail;
