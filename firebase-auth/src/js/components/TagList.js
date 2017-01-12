import React from "react"
import Tag from "./Tag"

export default class TagList extends React.Component {

  render() {
    const { tags } = this.props

    let items = tags.map((item, index) => {
      return (
        <Tag key={index} text={item} />
      )
    })

    return (
      <div>{items}</div>
    )
  }
}

TagList.propTypes = {
    tags: React.PropTypes.array.isRequired
}