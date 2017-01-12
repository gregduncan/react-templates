import React from "react"
import PostForm from "./PostForm"
import { Modal } from 'react-bootstrap'
import { firebase } from "../config/Firebase"
import { Post } from "../models/Post"

const rebase = firebase()

export default class PostEdit extends React.Component {

    constructor() {
        super()
        this.state = {
            showModal: false,
            post: Post
        }
        this.handleModal = this.handleModal.bind(this)
        this.handleTags = this.handleTags.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        rebase.fetch(`projects/${this.props.projectId}/posts/${this.props.postId}`, {
            context: this,
            asArray: false,
            then(data) {
                this.setState({ post: data })
            }
        })
    }

    handleModal() {
        this.setState({ showModal: this.state.showModal ? false : true })
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
        rebase.update(`projects/${this.props.projectId}/posts/${this.props.postId}`, { data: this.state.post })
        this.setState({ showModal: false })
        e.preventDefault()
    }

    render() {
        const { handleChange, handleSubmit, handleModal, handleTags, state} = this

        return (
            <div>
                <a class="text-info pull-right" onClick={handleModal}><i class="glyphicon glyphicon-edit"></i></a>
                <Modal show={state.showModal} onHide={handleModal}>
                    <Modal.Body>
                        <PostForm handleSubmit={handleSubmit} handleChange={handleChange} handleTags={handleTags} item={state.post} />
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

PostEdit.propTypes = {
    projectId: React.PropTypes.string.isRequired,
    postId: React.PropTypes.string.isRequired
}