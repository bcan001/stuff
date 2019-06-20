import React, { Component } from "react";
import DayHeader from './dayHeader';
import Day from './day';
import MealHeader from './mealHeader';
import Meal from './meal';

export default class Days extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	meals: []
    };
  }

  componentDidMount() {
  	// filter meals to see if they fit within the days of this week.
  	const { meals,currentDay,currentDayId,currentWeekId,currentMonthId,currentYearId } = this.props;
  	this.setState({
      meals: meals.filter(x => 
      	(x.week_id === currentWeekId) &&
      	(x.month_id === currentMonthId) &&
      	(x.year_id === currentYearId)
      )
    });
  }

  render() {
  	const { currentDay,currentDayId,currentWeekId,currentMonthId,currentYearId } = this.props;
  	console.log(this.state.meals);
    return (
    	<div>
    		<DayHeader />

    		<Day meals={this.state.meals} dayOfTheWeek={'Monday'} dayOfTheWeekId={1} />
    		<Day meals={this.state.meals} dayOfTheWeek={'Tuesday'} dayOfTheWeekId={2} />
    		<Day meals={this.state.meals} dayOfTheWeek={'Wednesday'} dayOfTheWeekId={3} />
    		<Day meals={this.state.meals} dayOfTheWeek={'Thursday'} dayOfTheWeekId={4} />
    		<Day meals={this.state.meals} dayOfTheWeek={'Friday'} dayOfTheWeekId={5} />
    		<Day meals={this.state.meals} dayOfTheWeek={'Saturday'} dayOfTheWeekId={6} />
    		<Day meals={this.state.meals} dayOfTheWeek={'Sunday'} dayOfTheWeekId={7} />

    	</div>
    );
  }
}






