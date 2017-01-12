import React from "react"
import PostForm from "./PostForm"
import Auth from "../utils/Auth"
import { firebase } from "../config/Firebase"
import { Post } from "../models/Post"
import { getDate } from "../utils/Helpers"

const rebase = firebase()

export default class PostAdd extends React.Component {

    constructor() {
        super()
        this.state = {
            post: Post
        }
        this.handleTags = this.handleTags.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange({ target }) {
        let post = Object.assign({}, this.state.post, { [target.id]: target.value })
        this.setState({ post: post })
    }

    handleTags(tags) {
        let post = Object.assign({}, this.state.post, { tags })
        this.setState({ post: post })
    }

    handleSubmit(e) {
        let data = Object.assign({}, this.state.post, { createdBy: Auth.getToken(), createdOn: getDate(), displayOrder: new Date().valueOf() })
        rebase.push(`projects/${this.props.projectId}/posts/`, { data: data})
        let post = Object.assign({}, this.state.post, Post)
        this.setState({ post: post })
        e.preventDefault()
    }

    render() {
        const { handleChange, handleSubmit, handleModal, handleTags, state} = this

        return (
            <PostForm handleSubmit={handleSubmit} handleChange={handleChange} handleTags={handleTags} item={state.post} />
        )
    }
}

PostAdd.propTypes = {
    projectId: React.PropTypes.string.isRequired
}