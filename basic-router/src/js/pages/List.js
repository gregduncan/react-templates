import React from "react";
import Item from "../components/Item";

export default class List extends React.Component {
  constructor() {
    super()
    this.state = {
      history: {},
    };
		this.navigate = this.navigate.bind(this);
  }

  componentDidMount() {
		this.setState({history: this.props.history});   
	}

  navigate(i){
    let target = "details/" + i; 
    this.state.history.pushState(null, target);
  }
  
  render() {
     
     const Items = [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
      "Item 6",
      "Item 7",
      "Item 8",
      "Item 9",
      "Item 10",
    ].map((title, i) => <Item key={i} title={title} id={i + 1} navigate={this.navigate} /> );

    return (
      <div>
        <h1>List of Items</h1>
        <ul class="list-group">{Items}</ul>
      </div>
    );
  }
}
