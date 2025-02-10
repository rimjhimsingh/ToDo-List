import React from "react";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value; //we only got one value as there is only one input
    setText(newValue);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, text];
    });
    setText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={text} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDo) => {
            return <li>{toDo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
