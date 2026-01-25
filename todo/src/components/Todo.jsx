import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    // e.preventDefault();
    const payload = {
      id: todos.length + 1,
      title: input,
      isCompeleted: false,
    };
    setTodos((prev) => [...prev, payload]);
    setInput("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const handleComplete = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, isCompeleted: !item.isCompeleted } : item,
      ),
    );
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleSubmit()}>Add</button>
      <ul>
        {todos.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.id} </span>
              <input
                checked={item.isCompeleted}
                onChange={() => handleComplete(item.id)}
                type="checkbox"
              />
              <span
                style={{
                  marginLeft: "8px",
                  textDecoration: item.isCompeleted ? "line-through" : "none",
                  opacity: item.isCompeleted ? 0.6 : 1,
                }}
              >
                {item.title}{" "}
              </span>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
