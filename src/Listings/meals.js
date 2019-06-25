import React, { Component } from "react";
import MealHeader from '../Headers/mealHeader';
import Meal from '../Models/meal';
import NewMeal from '../Forms/newMeal';


export default class Meals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMeals: []
    };
  }

  addMeal = () => {
    // console.log('add new meal form')
    let { newMeals } = this.state;
    // Title,Day,Date,Time,Total Calories,Health Rating,Foods
    let newMeal = {
      'id' : newMeals.length + 1,
      'title' : '',
      'total_calories' : 0,
      'health_rating' : 0,
      'foods' : []
    }
    this.setState({
      newMeals: [...newMeals, newMeal]
    })
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
        {this.state.newMeals.map(newMeal => (
            <div key={newMeal.id} >
              <NewMeal newMeal={newMeal}/>
            </div>
          )
        )}
        <button onClick={() => this.addMeal()}>add meal</button>
	  	</div>
    );
  }
}









