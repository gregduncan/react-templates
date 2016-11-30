import React from "react";

export default class Details extends React.Component {
  render() {    
    
    const { id } = this.props.params;

    return (
      <div>
        <h1>Item {id}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
      </div>
    );
  }
}
