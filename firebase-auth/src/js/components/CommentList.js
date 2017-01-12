import React from "react"
import Comment from "./Comment"
import { firebase } from "../config/Firebase"

const rebase = firebase()

export default class CommentList extends React.Component {

    constructor() {
        super()
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        this.ref = rebase.bindToState(`projects/${this.props.projectId}/posts/${this.props.postId}/comments`, {
            context: this,
            state: 'comments',
            asArray: true
        })
    }

    componentWillUnmount() {
        rebase.removeBinding(this.ref)
    }

    render() {
        const { comments } = this.state

        let items = comments.map((item, index) => {
            return (
                <div key={item.key}>
                    <Comment item={item} projectId={this.props.projectId} postId={this.props.postId} />
                </div>
            )
        })
        return (
            <div>{items}</div>
        )
    }
}

CommentList.propTypes = {
    projectId: React.PropTypes.string.isRequired,
    postId: React.PropTypes.string.isRequired
}