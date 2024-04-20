import React from 'react';

function TopPart() {
  return (
    <div style={{ margin: '10px' ,display: 'flex' }}>
      <select style={{ flex: 1 }}> /* Make dropdown flexible */
        <option value="first">First</option>
        <option value="second">Second</option>
        <option value="third">Third</option>
      </select>
      <div style={{ margin: '5px', width: '30%', height: '30px', border: '1px solid black' }}></div>
      <div style={{ margin: '5px', width: '50px', height: '30px', border: '1px solid black' }}></div>
    </div>
  );

}

export default TopPart;
