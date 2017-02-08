import React from "react";
import Rebase from 're-base';
import Items from "../components/Items";
import AddItem from "../components/AddItem";

var base = Rebase.createClass({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: ""
});

export default class List extends React.Component {
  
  constructor() {
    super()
    this.state = {
      items: [],
      loading: true
    };
  }

  componentDidMount() {
    this.ref = base.syncState('projects/1', {
      context: this,
      state: 'items',
      asArray: true,
      then(){
        this.setState({loading: false})
      },
      onFailure: function(data){
          console.log(data);
      }
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  handleAddItem(newItem){
   let item = {id: new Date().getDate(), name: newItem, desc: "" }

    this.setState({
      items: this.state.items.concat([item])
    });
  }

  render() {

    return (
      <div>
        <h1>List of Items</h1>
        <AddItem add={this.handleAddItem.bind(this)}/>
        <Items items={this.state.items} />
      </div>
    );
  }
}
