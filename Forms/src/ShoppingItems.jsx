import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListForm from "./ShoppingList";

function ShoppingItems({ value }) {
  const [items, setItems] = useState([
    { id: uuid(), product: "banana", quantity: 8 },
  ]);

  const addItems = (item) => {
    setItems((newItems) => {
      return [...newItems, { ...item, id: uuid() }];
    });
  };
  const handleDelete = (id) => {
    setItems((newItems) => {
      return newItems.filter((el) => {
        if (el.id !== id) {
          return el;
        }
      });
    });
  };
  return (
    <div>
      <ul>
        {items.map((el) => {
          return (
            <li key={el.id} onClick={() => handleDelete(el.id)}>
              {el.product}-{el.quantity}
            </li>
          );
        })}
      </ul>
      <ShoppingListForm value={addItems}></ShoppingListForm>
    </div>
  );
}

export default ShoppingItems;
