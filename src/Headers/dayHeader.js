import React from 'react';

function DayHeader() {
  return (
  	<div style={{ display: 'flex'}}>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Day</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Date</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Total Calories</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Total Health Rating</span>
    </div>
  );
}

export default DayHeader;


