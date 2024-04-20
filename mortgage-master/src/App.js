import React from 'react';
import TopPart from './TopPart';
import { useEffect } from 'react';
function ScrollableTable() {
  useEffect(() => {
    // Function to populate the table
    const populateTable = () => {
      const tableBody = document.querySelector('tbody');

      // Sample data (replace with your actual data source)
      const data = [
        ['Row 1 - Data 1', 'Row 1 - Data 2', 'Row 1 - Data 3', 'Row 1 - Data 4', 'Row 1 - Data 5', 'Row 1 - Data 6'],
        ['Row 1 - Data 1', 'Row 1 - Data 2', 'Row 1 - Data 3', 'Row 1 - Data 4', 'Row 1 - Data 5', 'Row 1 - Data 6'],
        ['Row 1 - Data 1', 'Row 1 - Data 2', 'Row 1 - Data 3', 'Row 1 - Data 4', 'Row 1 - Data 5', 'Row 1 - Data 6'],
        ['Row 1 - Data 1', 'Row 1 - Data 2', 'Row 1 - Data 3', 'Row 1 - Data 4', 'Row 1 - Data 5', 'Row 1 - Data 6'],
        ['Row 1 - Data 1', 'Row 1 - Data 2', 'Row 1 - Data 3', 'Row 1 - Data 4', 'Row 1 - Data 5', 'Row 1 - Data 6'],
        ['Row 1 - Data 1', 'Row 1 - Data 2', 'Row 1 - Data 3', 'Row 1 - Data 4', 'Row 1 - Data 5', 'Row 1 - Data 6'],
        ['Row 1 - Data 1', 'Row 1 - Data 2', 'Row 1 - Data 3', 'Row 1 - Data 4', 'Row 1 - Data 5', 'Row 1 - Data 6'],
        ['Row 1 - Data 1', 'Row 1 - Data 2', 'Row 1 - Data 3', 'Row 1 - Data 4', 'Row 1 - Data 5', 'Row 1 - Data 6'],
        ['Row 1 - Data 1', 'Row 1 - Data 2', 'Row 1 - Data 3', 'Row 1 - Data 4', 'Row 1 - Data 5', 'Row 1 - Data 6'],
      ];

      // Clear any existing rows
      tableBody.innerHTML = '';

      // Create rows and cells
      data.forEach(rowData => {
        const row = tableBody.insertRow();  // Create a row element
        rowData.forEach(cellData => {
          const cell = row.insertCell(); // Create a cell element
          cell.textContent = cellData;
          cell.style.border = '1px solid black';
          cell.style.padding = '8px';
        });

      });
    };

    // Call the function to populate initially
    populateTable();
  }, []);
  return (
    <div style={{ height: '400px', overflowY: 'auto', width: '600px' }}>
      <table style={{ borderCollapse: 'collapse', width:'100%',margin:'10px'}}>
        <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Column 1</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Column 1</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Column 1</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Column 1</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Column 1</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Column 1</th>
          {/* Add 5 more <th /> elements for the remaining columns */}
        </tr>
      </thead>
      <tbody>
        {/* Add 19 more <tr> blocks below */}
        <tr>
        </tr>
        <tr>
        </tr>
      </tbody>
      </table>
    </div>
  );
}
function App() {

  return (
    <div>
    <TopPart/>
    <ScrollableTable/>
    </div>
  );

}

export default App;
