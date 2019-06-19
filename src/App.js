import React, { PureComponent } from "react";
import Meals from './Meals';

export default class App extends PureComponent {
	state = {
    title: "Meal Tracking App"
  };

  render() {
  	const { title } = this.state;
    return (
    	<div>
    		<h1>{title}</h1>
        <Meals />
      </div>
    );
  }
}

