import React from 'react';
import { useEffect } from 'react';
import arrow from './arrow.svg';
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
  function ScrollableTable({givenData}) {
    console.log(givenData);
    useEffect(() => {
      // Initial call (e.g., sort by first column ascending)
      populateAndSortTable(givenData, 2, 'asc');
    }, [givenData]);

    // ... rest of your ScrollableTable component, including handleSort  ...

    return (
      <div className="table-container table-hover" style={{ height: '100%', overflowY: 'auto'}}>
      <table className="table" style= {{marginLeft:"10px", width:'90%'}}>
          <thead style={{border:"0px"}}>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }} onClick={()=>{populateAndSortTable(givenData, 0, 'asc');}}>Column 1</th>
            <th style={{ border: '1px solid black', padding: '8px' }} onClick={()=>{populateAndSortTable(givenData, 1, 'asc');}}>Column 1</th>
            <th style={{ border: '1px solid black', padding: '8px' }} >Column 1
            <img src={arrow} alt="Sort up" style={{ width: 16, height: 16, marginLeft: 5 }} /> </th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Column 1</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Column 1</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Column 1</th>
            {/* Add 5 more <th /> elements for the remaining columns */}
          </tr>
        </thead>
        <tbody>
          {/* Add 19 more <tr> blocks below */}
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
          <tr>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }

export default ScrollableTable;

