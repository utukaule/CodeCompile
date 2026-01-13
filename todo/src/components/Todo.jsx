import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todosList, setTodoList] = useState([]);
  const [error, setError] = useState(false);
  const handleInput = () => {
    if (input.length == 0) {
      return setError(true);
    }

    const payload = {
      id: todosList.length + 1,
      todo: input,
      complete: false,
      delete: false,
    };
    setTodoList([...todosList, payload]);
    setInput("");
    setError(false);
  };
  const handleDelete = (id) => {
    setTodoList(
      todosList
        .filter((item) => item.id !== id)
        .map((item, index) => ({
          ...item,
          id: index + 1,
        }))
    );
  };
  return (
    <div>
      todo
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="submit" onClick={handleInput} />
      <div>{error ? "input length is 0" : <></>}</div>
      <div>
        {todosList.map((todo, index) => {
          return (
            <p key={todo.id}>
              <span>{todo.id + "."} </span>
              {todo.todo}
              <button onClick={() => handleDelete(todo.id)}> delete</button>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
