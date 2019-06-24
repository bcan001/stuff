import React, { Component } from "react";
import FoodHeader from '../Headers/foodHeader';


export default class Foods extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { foodList } = this.props;
    return (
      <div style={{ marginLeft: '50px' }}>
        <FoodHeader />
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



