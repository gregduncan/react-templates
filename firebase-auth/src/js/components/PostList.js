import React from "react"
import Post from "./Post"
import { firebase } from "../config/Firebase"

const rebase = firebase()

export default class PostList extends React.Component {

    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.ref = rebase.bindToState(`projects/${this.props.projectId}/posts/`, {
            context: this,
            state: 'posts',
            asArray: true
        })
    }

    componentWillUnmount() {
        rebase.removeBinding(this.ref)
    }

    render() {
        const { posts } = this.state

        let items = posts.map((item, index) => {
            return (
                <div key={item.key}>
                    <Post item={item} projectId={this.props.projectId} />
                </div>
            )
        })
        return (
            <div>{items.reverse()}</div>
        )
    }
}

PostList.propTypes = {
    projectId: React.PropTypes.string.isRequired
}