import React from "react"
import { firebase } from "../config/Firebase"

const rebase = firebase()

export default class CommentRemove extends React.Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        rebase.remove(`projects/${this.props.projectId}/posts/${this.props.postId}/comments/${this.props.commentId}`)
    }

    render() {
        const { handleSubmit } = this

        return (
            <a class="text-danger" onClick={handleSubmit}><i class="glyphicon glyphicon-remove"></i></a>
        )
    }
}

CommentRemove.propTypes = {
    projectId: React.PropTypes.string.isRequired,
    postId: React.PropTypes.string.isRequired,
    commentId: React.PropTypes.string.isRequired
}