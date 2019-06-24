import React, { Component } from "react";


export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCalories: 0,
      averageHealthRating: 0.00
    };
  }

  componentDidMount() {
    let totalCalorieCount = 0;
    let totalHealthRating = 0.00;
    let totalMealsCount = 0;
    let { meals } = this.props;
    meals.map(meal => (
      meal.foods.map(food => (
        totalCalorieCount += food.total_calories
      ))
    ));
    meals.map(meal => (
      totalHealthRating += meal.health_rating,
      totalMealsCount += 1
    ));
    this.setState({
      totalCalories: totalCalorieCount,
      averageHealthRating: totalHealthRating / totalMealsCount
    })
  }

  render() {
    const { meals,dayOfTheWeek } = this.props;
    return (
    	<div style={{ display: 'flex'}}>
        <span style={{ flex: 1 }}>{dayOfTheWeek}</span>
        <span style={{ flex: 1 }}>&nbsp;</span>
        <span style={{ flex: 1 }}>{this.state.totalCalories}</span>
        <span style={{ flex: 1 }}>{this.state.averageHealthRating}</span>
      </div>
    )
  }
}

