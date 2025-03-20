import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleAdd() {
    if (inputText.trim()) {
      props.onAdd(inputText);
      setInputText("");
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleAdd();
    }
  }

  return (
    <div className="form">
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        value={inputText}
      />
      <button onClick={handleAdd}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
