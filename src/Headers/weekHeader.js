import React from 'react';

function WeekHeader() {
  return (
  	<div style={{ display: 'flex'}}>
      <span style={{ flex: 1, fontWeight: 'bold' }}>week number</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>start week date</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>end week date</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Total Calories</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Average Health Rating</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>show days</span>
    </div>
  );
}


export default WeekHeader;