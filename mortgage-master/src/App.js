import React, { useState } from 'react';
import './App.css';
import TopPart from './TopPart';
import Map from './Map/Map';
import ScrollableTable from './Table';
import PieChart from './PieChart';
import Papa from 'papaparse';
function loadCSV(filePath) {
  return new Promise((resolve, reject) => {
    Papa.parse(filePath, {
      download: true, // If the file is remote
      header: true,   // Assume the first row contains headers
      dynamicTyping: true, // Automatically infer data types
      complete: (results) => {
        resolve(results.data);  // Resolve with the 2D array
      },
      error: (error) => {
        reject(error);
             // Reject with the error
      }
    });
  });
}

function App() {
  loadCSV('testing.csv')
  .then(csvData => {
    console.log("CSV Data Structure:", csvData);
    // ... (Do things with your CSV data here)
  })
  .catch(error => {
    console.error("Error loading CSV:", error);
  });
const [give,setInput] = useState([
  ['Row 1 - Data 1', 'Row 1 - Data 2', 'Row 1 - Data 3', 'Row 1 - Data 4', 'Row 1 - Data 5', 'Row 1 - Data 6'],
  ['aow 2 - Data 1', 'tow 2 - Data 2', 'Row 2 - Data 3', 'Row 2 - Data 4', 'Row 2 - Data 5', 'Row 2 - Data 6'],
  ['aow 2 - Data 1', 'tow 2 - Data 2', 'Row 2 - Data 3', 'Row 2 - Data 4', 'Row 2 - Data 5', 'Row 2 - Data 6'],
  // ... more rows with unique values
]);

  return (
    <div >
    <TopPart/>
    <Map setInput={setInput}/>
    <ScrollableTable givenData={give}/>
    <PieChart/>
    </div>
  );

}

export default App;
