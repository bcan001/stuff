import React, { PureComponent } from "react";
import Meals from './Meals';
// import MealForm from './Forms/mealForm';

export default class App extends PureComponent {
	state = {
    title: "Meal Tracking App"
  };

  render() {
  	const { title } = this.state;
  	// <Meals />
    return (
    	<div>
    		<h1>{title}</h1>
        <Meals />
      </div>
    );
  }
}

