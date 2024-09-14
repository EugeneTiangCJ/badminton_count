import React, { useState } from "react";

const CreateToDo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const tasks = ["t1", "t2", "t3"];

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Tasks: {count} </h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      Input: {input}
      {tasks.map((t) => (
        <ul key={t}>{t}</ul>
      ))}
    </>
  );
};

export default CreateToDo;
