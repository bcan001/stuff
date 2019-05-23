import React, { PureComponent } from "react";
import Child from './child';

export default class App extends PureComponent {
  state = {
    label: "HELLO ALL FROM PARENT",
    user: {
      firstName: 'Ben',
      lastName: 'Caneba'
    }
  };

  click = () => {
    // let { user } = this.state;
    // user = { ...user, name: { ...user.name, lastName: "modh" } };
    // console.log(user);
    this.setState({ label: "hello this changed" });
    console.log('Hello from Parent onclick. label has changed');
  };

  render() {
    console.log("render parent");
    // const { user } = this.state;
    return (
      <div>
        <h1>this is from the parent</h1>
        <button onClick={this.click}>Clicked Parent</button>
        <Child />
      </div>
    );
  }
}

