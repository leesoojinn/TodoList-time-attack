import React from "react";

function TodoList({ todos, setTodos, isDone }) {
  return (
    <div>
      <h2>{isDone ? "완료된 일 목록" : "할 일 목록"}</h2>
      {todos
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                border: "1px solid black",
                margin: "10px",
                paddingLeft: "10px",
                paddingBottom: "10px",
              }}
            >
              <p>{todo.id} </p>
              <h3>{todo.title} </h3>
              <p>{todo.contents} </p>
              <p>{todo.isDone.toString()} </p>
              <button
                onClick={() => {
                  const newTodos = todos.map((item) => {
                    if (item.id === todo.id) {
                      return { ...item, isDone: !item.isDone };
                    } else {
                      return item;
                    }
                  });
                  setTodos(newTodos);
                }}
              >
                {isDone ? "취소" : "완료"}
              </button>
              <button
                onClick={() => {
                  const deletedTodos = todos.filter((item) => {
                    return item.id !== todo.id;
                  });
                  setTodos(deletedTodos);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;
