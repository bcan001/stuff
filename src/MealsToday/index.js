import React, { Component } from "react";

import Meals from '../Listings/meals';

export default class MealsToday extends Component {
	// super(props);
	state = {
		meals: [
      {
        'id' : 1,
        'title' : 'McDonalds For Lunch',
        'time' : '12:00',
        'day_of_the_week' : 'Monday',
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
      }
    ]
	}

	render() {
		const { meals } = this.state;
    return (
    	<div>
    		<Meals meals={meals} />
    	</div>
    )
  }
}



