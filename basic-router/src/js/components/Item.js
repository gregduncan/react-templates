import React from "react";

export default class Item extends React.Component {
  
  navigate(){
    const target  = 'Details/' + this.props.page; 
    console.log(target);
  }
  
  render() {
    const { title} = this.props;

    return (
      <li class="list-group-item">
        <h4>{title}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <a class="btn btn-default" onClick={this.navigate.bind(this)}>More Info</a>
      </li>
    );
  }
}
