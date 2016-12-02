import React from "react";
import { Router, Route, Link, browserHistory } from 'react-router'

export default class Item extends React.Component {
  
  constructor(props) {
    super();
  }

  navigate(i){
     return this.props.navigate(i);
  }
  
  render() {
    const { text, id } = this.props;

    return (
      <li class="list-group-item">
        <h4><i class="glyphicon glyphicon-asterisk"></i> {text}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <a class="btn btn-default" onClick={this.navigate.bind(this, id)}>Prog Lnk</a>&nbsp;
        <Link to={`/details/${id}`}><button class="btn btn-default">React Lnk</button></Link>
      </li>
    );
  }
}
