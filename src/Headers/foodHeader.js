import React from 'react';

function FoodHeader() {
  return (
  	<div style={{ display: 'flex'}}>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Name</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Serving Count</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Total Calories</span>
    </div>
  );
}

export default FoodHeader;


