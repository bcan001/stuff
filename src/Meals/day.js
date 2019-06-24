import React, { Component } from "react";
import MealHeader from './mealHeader';
import Meal from './meal';


export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCalories: 0,
      averageHealthRating: 0.00
    };
  }

  // componentDidMount() {
  //   console.log('hey')
  //   console.log(this.props)
  //   const { meals,dayOfTheWeekId } = this.props;
  //   // {calculateTotalCaloriesForDay(dayOfTheWeekId.id)}
  //   this.setState({
  //     totalCalories: this.props.calculateTotalCaloriesForDay(meals,dayOfTheWeekId),
  //   })
  // }

  // calculateTotalCaloriesForDay = (meals,dayOfTheWeekId) => {
  //   let totalCalorieCount = 0;
  //   meals.map(meal => (
  //     meal.foods.map(food => (
  //       (meal.day_id === dayOfTheWeekId ? totalCalorieCount += food.total_calories : totalCalorieCount += 1)
  //     ))
  //   ));
  //   return totalCalorieCount
  // }

  // calculateAverageHealthRatingForDay = (meals,dayOfTheWeekId) => {
  //   let totalAverageHealthRating = 0.0;
  //   let totalMealsForDay = 0.0;
  //   console.log('broken here')
  //   console.log(meals)
  //   meals.map(meal => (
  //     meal.foods.map(food => (
  //       meal.day_id === dayOfTheWeekId ? totalAverageHealthRating += food.health_rating : totalAverageHealthRating += 0.0
  //     ))
  //   ));
  //   meals.map(meal => (
  //     meal.foods.map(food => (
  //       meal.day_id === dayOfTheWeekId ? totalMealsForDay += 1.0 : totalMealsForDay += 0.0
  //     ))
  //   ));
  //   console.log('health rating')
  //   console.log(totalAverageHealthRating)
  //   console.log('meal count')
  //   console.log(totalMealsForDay)
  //   return String(totalAverageHealthRating / totalMealsForDay)
  // }

  render() {
    const { meals,dayOfTheWeek,dayOfTheWeekId } = this.props;
    return (
      <div>
        <div style={{ display: 'flex'}}>
          <span style={{ flex: 1 }}>{dayOfTheWeek}</span>
          <span style={{ flex: 1 }}>&nbsp;</span>
          <span style={{ flex: 1 }}>{this.state.totalCalories}</span>
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




