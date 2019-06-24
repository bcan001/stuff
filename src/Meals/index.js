import React, { Component } from "react";
import MealsToday from '../MealsToday';
import MealsThisWeek from '../MealsThisWeek';


export default class Meals extends Component {
  state = {
    subTitle: 'Meals Today',    
  }

  changeSubtitle = (event) => {
    this.setState({subTitle: event.target.value});
  }

  render() {
    const { subTitle } = this.state;
    if (subTitle === 'Meals Today') {
      return (
        <div>
          <select onChange={this.changeSubtitle} value={this.state.subTitle}>
            <option value="Meals Today">Meals Today</option>
            <option value="Meals This Week">Meals This Week</option>
          </select>
          <h2>{subTitle}</h2>
          <MealsToday />
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
          <MealsThisWeek />
        </div>
      );
    }
  }
}











