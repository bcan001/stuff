import React, { PureComponent } from "react";

export default class child extends PureComponent {

      state = {
        title: "Title"
      };

      click = () => {
        this.setState({ title: "Title1" });
        console.log('hello from child')
      };

  render() {
    console.log("render child");
    // const { user } = this.props;
    return (
      <div>
        <h1>{this.state.title} from child</h1>
        <h2>from parent to child</h2>
        <button onClick={this.click}>Clicked Child</button>
      </div>
    );
  }
}




