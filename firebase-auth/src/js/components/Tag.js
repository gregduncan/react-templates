import React from "react"

export default class Tag extends React.Component {

  render() {
    const { text } = this.props

    return (
      <span class="label label-info label-tag">{text}</span> 
    )
  }
}

Tag.propTypes = {
    text: React.PropTypes.string.isRequired
}