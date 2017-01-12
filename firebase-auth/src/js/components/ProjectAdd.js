import React from "react"
import ProjectForm from "./ProjectForm"
import { Modal } from 'react-bootstrap'
import { firebase } from "../config/Firebase"
import { Project } from "../models/Project"

const rebase = firebase()

export default class ProjectAdd extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            project: Project
        }
        this.handleModal = this.handleModal.bind(this)
        this.handleTags = this.handleTags.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleModal() {
        this.setState({ showModal: this.state.showModal ? false : true })
    }

    handleChange({ target }) {
        let project = Object.assign({}, this.state.project, { [target.id]: target.value })
        this.setState({ project: project })
    }

    handleTags(tags) {
        let project = Object.assign({}, this.state.project, { tags })
        this.setState({ project: project })
    }

    handleSubmit(e) {
        rebase.push(`projects`, { data: this.state.project })
        let project = Object.assign({}, this.state.project, Project)
        this.setState({ project: project, showModal: false })
        e.preventDefault()
    }

    render() {
        const { handleChange, handleSubmit, handleModal, handleTags, state} = this

        return (
            <div class="pull-right">
                <a class="btn btn-default" onClick={handleModal}><i class="glyphicon glyphicon-plus"></i></a>
                <Modal show={state.showModal} onHide={handleModal}>
                    <Modal.Body>
                        <ProjectForm handleSubmit={handleSubmit} handleChange={handleChange} handleTags={handleTags} item={state.project} />
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}