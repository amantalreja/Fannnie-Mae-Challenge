import React, { useState, useEffect } from 'react';
import './App.css';
import TopPart from './TopPart';
import Map from './Map/Map';
import ScrollableTable from './Table';
import PieChart from './PieChart';
import Papa from 'papaparse';

const populateAndSortTable = (data, columnIndex, sortOrder) => {
  const tableBody = document.querySelector('tbody');

  // Clear any existing rows
  tableBody.innerHTML = '';

  // Sort the data first
  const sortedData = [...data].sort((a, b) => {
    const valueA = a[columnIndex].toLowerCase();
    const valueB = b[columnIndex].toLowerCase();

    if (sortOrder === 'asc') {
      return valueA < valueB ? -1 : 1;
    } else { // Descending
      return valueA > valueB ? -1 : 1;
    }
  });
  // Create rows and cells (populating the table)
  sortedData.forEach(rowData => {
    const row = tableBody.insertRow();
    rowData.forEach(cellData => {
      const cell = row.insertCell();
      cell.textContent = cellData;
      cell.style.border = '1px solid black';
      cell.style.padding = '8px';
    });
  });
};

function loadCSV(filePath) {
  return new Promise((resolve, reject) => {
    Papa.parse(filePath, {
      download: true, // If the file is remote  // Assume the first row contains headers
      dynamicTyping: true, // Automatically infer data types
      complete: (results) => {
        resolve(results.data);  // Resolve with the 2D arra
      },
      error: (error) => {
        reject(error);
        // Reject with the error
      }
    });
  });
}

function App() {

  function filterNulls(data) {
    return data.filter(row => row[0] !== null);
  }
  const [give, setInput] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    loadCSV('https://raw.githubusercontent.com/amantalreja/Fannnie-Mae-Challenge/main/mortgage-master/src/testing.csv')
      .then(csvData => {
        console.log(csvData)
        //setInput(filterNulls(csvData)); // Update state with CSV data
        //populateAndSortTable(filterNulls(csvData),1,'asc'); // Update state with CSV data
        const give = [
          ['Row55 - Data 1', 'Row 1 - Data 2', 'Row 1 - Data 3', 'Row 1 - Data 4', 'Row 1 - Data 5', 'Row 1 - Data 6'],
          ['aow 2 - Data 1', 'tow 2 - Data 2', 'Row 2 - Data 3', 'Row 2 - Data 4', 'Row 2 - Data 5', 'Row 2 - Data 6'],
          ['aow 2 - Data 1', 'tow 2 - Data 2', 'Row 2 - Data 3', 'Row 2 - Data 4', 'Row 2 - Data 5', 'Row 2 - Data 6'],        // ... more rows with unique values
        ];
        setInput(filterNulls(csvData)); // Update state with CSV data
        populateAndSortTable(filterNulls(csvData), 1, 'asc'); // Update state with CSV data
      })
      .catch(error => {
        setError(error); // Store the error
        populateAndSortTable([[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]], 1, 'asc');
        setIsLoading(false);
        console.log(error)
      });
  }, []);

  // Empty dependency array: Execute the effect only once on component mount
  return (
    <div >
      <Map setInput={setInput} />

      <div style={{display:"flex",margin:"30px" }}>
      <div style={{width:"80%",marginRight:"40px" }}><ScrollableTable givenData={give} style={{ width: "100px"}} /></div>
        <div style={{width:"250px"}}>
        <PieChart/>
        </div>
      </div>
    </div>
  );

}

export default App;
