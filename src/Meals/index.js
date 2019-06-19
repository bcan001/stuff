import React, { Component } from "react";
import Meal from './meal';

export default class Meals extends Component {
  state = {
    subTitle: 'Meals This Week',
    allMeals: [
      {
        'id' : 1,
        'title' : 'McDonalds For Lunch',
        'date' : '05/09/2019',
        'time' : '12:00',
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
        'date' : '05/09/2019',
        'time' : '22:00',
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
      }
    ]
  }

  render() {
    const { allMeals,subTitle } = this.state;
    return (
      <div>
        <h2>{subTitle}</h2>
        <div style={{ display: 'flex'}}>
          <span style={{ flex: 1, fontWeight: 'bold' }}>Title</span>
          <span style={{ flex: 1, fontWeight: 'bold' }}>Date</span>
          <span style={{ flex: 1, fontWeight: 'bold' }}>Time</span>
          <span style={{ flex: 1, fontWeight: 'bold' }}>Total Calories</span>
          <span style={{ flex: 1, fontWeight: 'bold' }}>Foods</span>
        </div>
        {allMeals.map(meal => (
          <div key={meal.id}>
            <Meal meal={meal} />
          </div>
        ))}
      </div>
    );
  }
}











