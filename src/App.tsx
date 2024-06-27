import { useState } from "react";
import List from "./pages/List";
import Detail from "./pages/Detail";
import { Page } from "./types";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("list");

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>Hello!</h1>
      {currentPage === "list" ? (
        <List navigate={setCurrentPage} />
      ) : (
        <Detail navigate={setCurrentPage} />
      )}
    </div>
  );
}
