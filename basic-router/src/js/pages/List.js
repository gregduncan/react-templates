import React from "react";
import Item from "../components/Item";

export default class List extends React.Component {
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
    ].map((title, i) => <Item key={i} title={title} page={i + 1}/> );

    return (
      <div>
        <h1>List of Items</h1>
        <ul class="list-group">{Items}</ul>
      </div>
    );
  }
}
