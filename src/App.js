import React, { useState } from 'react';
import boardData from './data/boardData.json';
import './App.css'; // You can add some styles here if you want!

function App() {
  // State to keep track of the search term and sort criteria
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('ranking'); // default sort

  // Filter data based on the search term (by name)
  const filteredData = boardData.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort data based on the selected sort criteria
  const sortedData = filteredData.sort((a, b) => {
    if (sortBy === 'ranking') {
      return a.ranking - b.ranking;
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="App">
      <h1>Fortune 500 Board Repository</h1>

      <div>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="ranking">Sort by Ranking</option>
          <option value="name">Sort by Name</option>
          {/* You can add more sort options here */}
        </select>
      </div>

      <ul>
        {sortedData.map(member => (
          <li key={member.id}>
            {member.name} – Ranking: {member.ranking} – Company: {member.company}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
