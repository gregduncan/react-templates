import React from "react";

import Item from "../components/Item";
import * as ItemActions from "../actions/ItemActions";
import ItemStore from "../stores/ItemStore";

export default class List extends React.Component {
  constructor() {
    super()
    this.navigate = this.navigate.bind(this);
    this.getItems = this.getItems.bind(this);
    this.state = {
      history: {},
      items: ItemStore.getAll()
    };
  }

  componentDidMount() {
    this.setState({history: this.props.history});
  }

  componentWillMount() {
    ItemStore.on("change", this.getItems);
  }

  componentWillUnmount() {
    ItemStore.removeListener("change", this.getItems);
  }

  getItems() {
    this.setState({
      items: ItemStore.getAll(),
    });
  }

  reloadItems() {
    ItemActions.reloadItems();
  }

  navigate(i){
    let target = "details/" + i; 
    this.state.history.pushState(null, target);
  }
  
  render() {
     
    const { items } = this.state;

    const ItemComponents = items.map((item) => {
      return <Item key={item.id} text={item.text} id={1} navigate={this.navigate} />
    });

    return (
      <div>
        <h1>List of Items <a class="btn btn-default btn-lrg" onClick={this.reloadItems.bind(this)}>Reload</a></h1>
        <ul class="list-group">{ItemComponents}</ul>
      </div>
    );
  }
}
