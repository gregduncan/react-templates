var React = require('react');
var ReactDOM = require('react-dom');

class AddItem extends React.Component{
  handleSubmit(e){
    if(e.keyCode === 13){
      this.props.add(ReactDOM.findDOMNode(this.refs.newItem).value);
      ReactDOM.findDOMNode(this.refs.newItem).value = '';
    }
  }
  render(){
    return (
      <input
          type="text"
          ref="newItem"
          class="form-control"
          placeholder="Add Item"
          onKeyDown={this.handleSubmit.bind(this)} />
    )
  }
}

module.exports = AddItem;
