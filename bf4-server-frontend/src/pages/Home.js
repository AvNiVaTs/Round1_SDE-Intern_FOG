import React, { useState } from 'react';
import ItemList from '../components/ItemList';

function Home() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div>
      <h2>Welcome to My Full-Stack App</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add an item"
      />
      <button onClick={handleAddItem}>Add</button>
      <ItemList items={items} />
    </div>
  );
}

export default Home;
