import React, { useState } from "react";
import uuid from "react-uuid";

function Input({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTodo = {
            id: uuid(),
            title,
            contents,
            isDone: false,
          };
          setTodos([...todos, newTodo]);
        }}
      >
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        />
        <button>추가</button>
      </form>
    </div>
  );
}

export default Input;
