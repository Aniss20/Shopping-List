import React, {useState} from "react";
import "./App.css"
import {v4 as uuidv4} from "uuid";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    const newItem = {
      id: uuidv4(),
      item,
      complete: false,
    };
    e.preventDefault();
    if (item) {
      setList([...list, newItem]);
      setItem("");
    }
  };

  const handleChange = e => {
    setItem (e.target.value);

  };

  return(
    <div className= "App">
      <h1>Shopping list</h1>
      <form onSubmit={handleSubmit}>
        <input type = "text" value={item} onChange={handleChange} />
        <button type = "submit">ADD</button>
      </form>
    </div>
  );

  
}

export default App;


