import React from "react"
import Validation from "react-validation"
import Auth from "../utils/Auth"
import { firebase } from "../config/Firebase"
import { Comment } from "../models/Comment"
import { getDate } from "../utils/Helpers"

const rebase = firebase()

export default class CommentAdd extends React.Component {

    constructor() {
        super()
        this.state = {
            comment: Comment
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange({ target }) {
        let comment = Object.assign({}, this.state.comment, { [target.id]: target.value })
        this.setState({ comment: comment })
    }

    handleSubmit(e) {
        let data = Object.assign({}, this.state.comment, { createdBy: Auth.getToken(), createdOn: getDate(), displayOrder: new Date().valueOf() })
        rebase.push(`projects/${this.props.projectId}/posts/${this.props.postId}/comments`, { data: data})
        let comment = Object.assign({}, this.state.comment, Comment)
        this.setState({ comment: comment })
        e.preventDefault()
    }

    render() {
        const { handleChange, handleSubmit } = this
        const { comment } = this.state

        return (
            <Validation.components.Form onSubmit={handleSubmit}>
                <div class="form-group">
                    <Validation.components.Textarea placeholder="Add comment..." type="text" name="text" value={comment.text} id="text" onChange={handleChange} className="form-control" validations={['required']} />
                </div>
                <div class="form-group">
                    <Validation.components.Button className="btn btn-primary">Add</Validation.components.Button>
                </div>
            </Validation.components.Form>
        )
    }
}

CommentAdd.propTypes = {
    projectId: React.PropTypes.string.isRequired,
    postId: React.PropTypes.string.isRequired
}