import React, { Component } from "react";
import Weeks from '../Listings/weeks';


export default class MealsThisMonth extends Component {
	// super(props);
	state = {
		meals: [
      {
        'id' : 1,
        'title' : 'McDonalds For Lunch',
        'time' : '12:00',
        'day_of_the_week' : 'Monday',
        'week_of_the_month' : 1,
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
        'time' : '22:00',
        'day_of_the_week' : 'Monday',
        'week_of_the_month' : 1,
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
        'time' : '22:00',
        'day_of_the_week' : 'Monday',
        'week_of_the_month' : 1,
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
          },
          {
            'id' : 9,
            'name' : 'Fries',
            'serving_count' : 1,
            'total_calories' : 500
          }
        ]
      },
      {
        'id' : 4,
        'title' : 'McDonalds For Dinner Again',
        'time' : '22:00',
        'day_of_the_week' : 'Monday',
        'week_of_the_month' : 2,
        'health_rating' : 2.0,
        'foods' : [
          {
            'id' : 10,
            'name' : 'bread',
            'serving_count' : 6,
            'total_calories' : 600
          },
          {
            'id' : 11,
            'name' : 'beef',
            'serving_count' : 4,
            'total_calories' : 1600
          },
          {
            'id' : 12,
            'name' : 'Coca Cola',
            'serving_count' : 1,
            'total_calories' : 300
          },
          {
            'id' : 13,
            'name' : 'Fries',
            'serving_count' : 1,
            'total_calories' : 500
          }
        ]
      },
      {
        'id' : 5,
        'title' : 'McDonalds For Dinner Again2',
        'time' : '22:00',
        'day_of_the_week' : 'Monday',
        'week_of_the_month' : 3,
        'health_rating' : 2.5,
        'foods' : [
          {
            'id' : 14,
            'name' : 'bread',
            'serving_count' : 6,
            'total_calories' : 600
          },
          {
            'id' : 15,
            'name' : 'beef',
            'serving_count' : 4,
            'total_calories' : 1600
          },
          {
            'id' : 16,
            'name' : 'Coca Cola',
            'serving_count' : 1,
            'total_calories' : 300
          },
          {
            'id' : 17,
            'name' : 'Fries',
            'serving_count' : 1,
            'total_calories' : 500
          }
        ]
      },
      {
        'id' : 6,
        'title' : 'McDonalds For Dinner Again3',
        'time' : '22:00',
        'day_of_the_week' : 'Tuesday',
        'week_of_the_month' : 3,
        'health_rating' : 2.15,
        'foods' : [
          {
            'id' : 18,
            'name' : 'bread',
            'serving_count' : 6,
            'total_calories' : 600
          },
          {
            'id' : 19,
            'name' : 'beef',
            'serving_count' : 4,
            'total_calories' : 1600
          },
          {
            'id' : 20,
            'name' : 'Coca Cola',
            'serving_count' : 1,
            'total_calories' : 300
          },
          {
            'id' : 21,
            'name' : 'Fries',
            'serving_count' : 1,
            'total_calories' : 500
          }
        ]
      }
    ]
	}

	render() {
		const { meals } = this.state;
    return (
    	<div>
    		<Weeks meals={meals} />
    	</div>
    )
  }
}





