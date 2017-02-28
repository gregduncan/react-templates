import React from "react"
import { connect } from "react-redux"

class PageOne extends React.Component {
    render() {
        return (
            <span>Default data: {this.props.data}</span>
        )
    }
}

export default connect(store => ({
    data: store.generic.data
}))(PageOne)