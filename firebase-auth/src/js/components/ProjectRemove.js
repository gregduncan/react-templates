import React from "react"
import { firebase } from "../config/Firebase"

const rebase = firebase()

export default class ProjectRemove extends React.Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        rebase.remove(`projects/${this.props.projectId}`)
    }

    render() {
        const { handleSubmit } = this

        return (
            <a class="text-danger pull-right" onClick={handleSubmit}><i class="glyphicon glyphicon-remove"></i></a>
        )
    }
}

ProjectRemove.propTypes = {
    projectId: React.PropTypes.string.isRequired
}