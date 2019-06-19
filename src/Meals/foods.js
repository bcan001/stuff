import React, { Component } from "react";

export default class Foods extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { foodList } = this.props;
    return (
      <div style={{ marginLeft: '50px' }}>
        <div style={{ display: 'flex'}}>
          <span style={{ flex: 1, fontWeight: 'bold' }}>Name</span>
          <span style={{ flex: 1, fontWeight: 'bold' }}>Serving Count</span>
          <span style={{ flex: 1, fontWeight: 'bold' }}>Total Calories</span>
        </div>
        {foodList.map(food => (
          <div key={food.id} style={{ display: 'flex'}}>
            <span style={{ flex: 1 }}>{food.name}</span>
            <span style={{ flex: 1 }}>{food.serving_count}</span>
            <span style={{ flex: 1 }}>{food.total_calories}</span>
          </div>
        ))}
      </div>
    );
  }
}



