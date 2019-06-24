import React, { Component } from "react";
import Meal from './meal';
import MealHeader from './mealHeader';
import Days from './days';


export default class Meals extends Component {
  state = {
    subTitle: 'Meals Today',
    currentDay: 'Monday',
    currentDayId: 1,
    currentWeekId: 2,
    currentMonthId: 5,
    currentYearId: 1,
    allMeals: [
      {
        'id' : 1,
        'title' : 'McDonalds For Lunch',
        'day' : 'Monday',
        'date' : '05/09/2019',
        'time' : '12:00',
        'day_id' : 1,
        'week_id' : 2,
        'month_id' : 5,
        'year_id' : 1,
        'health_rating' : 2.0,
        'foods' : [
          {
            'id' : 1,
            'name' : 'bread',
            'serving_count' : 3,
            'total_calories' : 300
          },
          {
            'id' : 2,
            'name' : 'beef',
            'serving_count' : 2,
            'total_calories' : 800
          }
        ]
      },
      {
        'id' : 2,
        'title' : 'McDonalds For Dinner',
        'day' : 'Monday',
        'date' : '05/09/2019',
        'time' : '22:00',
        'day_id' : 1,
        'week_id' : 2,
        'month_id' : 5,
        'year_id' : 1,
        'health_rating' : 1.0,
        'foods' : [
          {
            'id' : 3,
            'name' : 'bread',
            'serving_count' : 6,
            'total_calories' : 600
          },
          {
            'id' : 4,
            'name' : 'beef',
            'serving_count' : 4,
            'total_calories' : 1600
          },
          {
            'id' : 5,
            'name' : 'Coca Cola',
            'serving_count' : 1,
            'total_calories' : 300
          }
        ]
      },
      {
        'id' : 3,
        'title' : 'McDonalds For Dinner Again',
        'day' : 'Tuesday',
        'date' : '05/10/2019',
        'time' : '22:00',
        'day_id' : 2,
        'week_id' : 2,
        'month_id' : 5,
        'year_id' : 1,
        'health_rating' : 1.0,
        'foods' : [
          {
            'id' : 6,
            'name' : 'bread',
            'serving_count' : 6,
            'total_calories' : 600
          },
          {
            'id' : 7,
            'name' : 'beef',
            'serving_count' : 4,
            'total_calories' : 1600
          },
          {
            'id' : 8,
            'name' : 'Coca Cola',
            'serving_count' : 1,
            'total_calories' : 300
          }
          ,
          {
            'id' : 9,
            'name' : 'Fries',
            'serving_count' : 1,
            'total_calories' : 500
          }
        ]
      }
    ]
  }

  changeSubtitle = (event) => {
    this.setState({subTitle: event.target.value});
  }

  render() {
    const { allMeals,subTitle,currentDay,currentDayId,currentWeekId,currentMonthId,currentYearId } = this.state;
    if (subTitle === 'Meals Today') {
      return (
        <div>
          <select onChange={this.changeSubtitle} value={this.state.subTitle}>
            <option value="Meals Today">Meals Today</option>
            <option value="Meals This Week">Meals This Week</option>
          </select>
          <h2>{subTitle}</h2>
          <MealHeader />
          {allMeals.map(meal => (
            (
              (meal.day_id === currentDayId) &&
              (meal.week_id === currentWeekId) &&
              (meal.month_id === currentMonthId) &&
              (meal.year_id === currentYearId)
            )  ?
            <div key={meal.id}>
              <Meal meal={meal} />
            </div> :
            <span key={meal.id}></span>
          ))}
        </div>
      );
    } else if (subTitle === 'Meals This Week') {
      return (
        <div>
          <select onChange={this.changeSubtitle} value={this.state.subTitle}>
            <option value="Meals Today">Meals Today</option>
            <option value="Meals This Week">Meals This Week</option>
          </select>

          <h2>{subTitle}</h2>
          <Days meals={allMeals} currentDay={currentDay} currentDayId={currentDayId} currentWeekId={currentWeekId} currentMonthId={currentMonthId} currentYearId={currentYearId}/>
        </div>
      );
    }
  }
}











