import React from 'react';  // Import the React library

  function ScrollableTable() {



    // ... rest of your ScrollableTable component, including handleSort  ...

    return (
      <div className=" table-hover" style={{ height:"300px", overflowY: 'auto'}}>
      <table className="table" style= {{marginLeft:"10px", width:'90%'}}>
          <thead style={{border:"0px"}}>
          <tr>
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
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Row 1 - Data 1</td>
          </tr>
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

  export default ScrollableTable;  // Export the ScrollableTable component
