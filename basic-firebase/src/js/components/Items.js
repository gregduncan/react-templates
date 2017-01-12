var React = require('react');

class Items extends React.Component{
  render(){
   
    var items = this.props.items.map((item, index) => {
      return (
        <li key={index} className="list-group-item">
          <span>
            {item.name}
          </span>
        </li>
      )
    });
    return (
       <ul className="list-group">
          {items}
        </ul>
    )
  }
};

module.exports = Items;
