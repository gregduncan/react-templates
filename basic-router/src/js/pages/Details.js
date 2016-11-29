import React from "react";

export default class Details extends React.Component {
  render() {    
    const { params } = this.props;

    console.log(params)
    return (
      <div>
        <h1>Item {params.page}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
      </div>
    );
  }
}
