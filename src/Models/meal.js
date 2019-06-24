import React, { Component } from "react";
import Foods from '../Listings/foods';

export default class Meal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodsAreOpen: false,
      totalCalories: 0
    };
  }

  showFoods = () => {
    if (this.state.foodsAreOpen === true) {
      this.setState({ foodsAreOpen: false });
    } else {
      this.setState({ foodsAreOpen: true });
    }
  }

  componentDidMount() {
    let totalCalorieCount = 0;
    this.props.meal.foods.map(food => (
      totalCalorieCount += food.total_calories
    ));
    this.setState({
      totalCalories: totalCalorieCount
    })
  }

  render() {
    const { meal } = this.props;
    return (
      <div>
        <div style={{ display: 'flex'}}>
          <span style={{ flex: 1 }}>{meal.title}</span>
          <span style={{ flex: 1 }}>{meal.day}</span>
          <span style={{ flex: 1 }}>{meal.date}</span>
          <span style={{ flex: 1 }}>{meal.time}</span>
          <span style={{ flex: 1 }}>{this.state.totalCalories}</span>
          <span style={{ flex: 1 }}>{meal.health_rating}</span>
          <span style={{ flex: 1 }}><button onClick={() => this.showFoods()}>show foods</button></span>
        </div>
        {this.state.foodsAreOpen ? <Foods foodList={meal.foods} /> : <div></div>}
      </div>
    );
  }
}


