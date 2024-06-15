import { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    setTodos((prev) => [...prev, inputValue]);
    setInputValue('');
  };

  const deleteItem = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <main>
      <h1>TODO LIST APP</h1>
      <InputContainer value={inputValue} onChange={handleInputChange} onClick={addItem} />
      <TodoContainer todos={todos} deleteItem={deleteItem} />
    </main>
  );
};

export default App;
