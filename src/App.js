import "./styles.css";
import { useState } from "react";

export default function App() {
  const [Array, setArray] = useState([]);
  const [Value, setValue] = useState("Add a new ");

  function onRemoveItem(itemToRemove) {
    const newItems = Array.filter((item) => {
      return item !== itemToRemove;
    });
    setArray(newItems);
  }
  function handleClick(e) {
    e.preventDefault();
    const nav = e.target.item.value;
    const newItem = [...Array, nav];

    setValue("Add a new item");
    setArray(newItem);
  }
  return (
    <>
      <h1>Project 4: Shopping List</h1>
      <div className="shopping-list">
        <h2>Items To Buy</h2>
        <form onSubmit={handleClick}>
          <input type="text" name="item" placeholder={Value} required />
          <button>Add</button>
        </form>
        <ul>
          {Array.map((items, index) => (
            <Item item={items} onRemoveItem={onRemoveItem} />
          ))}
        </ul>
      </div>
    </>
  );
}

function Item({ item, onRemoveItem }) {
  return (
    <li>
      {item}
      <button className="delete" onClick={() => onRemoveItem(item)}>
        x
      </button>
    </li>
  );
}
