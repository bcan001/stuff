import React, { Component } from "react";
import MealHeader from './mealHeader';
import Meal from './meal';


export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCalories: 0
    };
  }

  calculateTotalCaloriesForDay = (meals,dayOfTheWeekId) => {
    let totalCalorieCount = 0;
    meals.map(meal => (
      meal.foods.map(food => (
        (meal.day_id === dayOfTheWeekId ? totalCalorieCount += food.total_calories : null)
      ))
    ));
    return totalCalorieCount
  }

  render() {
    const { meals,dayOfTheWeek,dayOfTheWeekId } = this.props;
    return (
      <div>
        <div style={{ display: 'flex'}}>
          <span style={{ flex: 1 }}>{dayOfTheWeek}</span>
          <span style={{ flex: 1 }}>&nbsp;</span>
          <span style={{ flex: 1 }}>{this.calculateTotalCaloriesForDay(meals,dayOfTheWeekId)}</span>
          <span style={{ flex: 1 }}>&nbsp;</span>
        </div>
        <div style={{ marginLeft: '50px' }}>
          <MealHeader />
          {meals.map(meal => (
            (meal.day_id === dayOfTheWeekId) ?
            <div key={meal.id}>
              <Meal meal={meal} />
            </div> :
            <span key={meal.id}></span>
          ))}
        </div>
      </div>
    );
  }
}




