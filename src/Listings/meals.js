import React, { Component } from "react";
import MealHeader from '../Headers/mealHeader';
import Meal from '../Models/meal';

export default class Meals extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { meals } = this.props;
    return (
    	<div>
    		<MealHeader />
	      {meals.map(meal => (
	  				<div key={meal.id} >
	  					<Meal meal={meal}/>
	  				</div>
	  			)
	  		)}
	  	</div>
    );
  }
}




