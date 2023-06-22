import { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "제목1",
      contents: "내용1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목2",
      contents: "내용2",
      isDone: true,
    },
    {
      id: uuid(),
      title: "제목3",
      contents: "내용3",
      isDone: false,
    },
  ]);

  return (
    <>
      <header
        style={{
          backgroundColor: "#b6fcc9",
          padding: "10px",
        }}
      >
        헤더
      </header>
      <main
        style={{
          backgroundColor: "#c0faf6",
          padding: "10px",
        }}
      >
        <div>
          <Input todos={todos} setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} isDone={false} />
          <TodoList todos={todos} setTodos={setTodos} isDone={true} />
        </div>
      </main>
      <footer
        style={{
          backgroundColor: "#f3c0fa",
          padding: "10px",
        }}
      >
        푸터
      </footer>
    </>
  );
}

export default App;
