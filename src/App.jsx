import React, { useState } from 'react';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    const newEntry = {
      id: Date.now(),
      text: text,
      date: new Date().toLocaleDateString()
    };
    setEntries([...entries, newEntry]);
    setText('');
  };

  return (
    <div className="App">
      <h1>Daily Journal</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your journal entry..."
          rows={5}
        ></textarea>
        <button type="submit">Add Entry</button>
      </form>
      <div className="entries">
        {entries.map((entry) => (
          <div key={entry.id} className="entry">
            <p>{entry.date}</p>
            <p>{entry.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
