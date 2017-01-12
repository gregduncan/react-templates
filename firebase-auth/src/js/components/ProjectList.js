import React from "react"
import Project from "./Project"
import { firebase } from "../config/Firebase"

const rebase = firebase()

export default class ProjectsList extends React.Component {

    constructor() {
        super()
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        this.ref = rebase.bindToState('projects', {
            context: this,
            state: 'projects',
            asArray: true,
            queries: {
                orderByChild: 'name'
            }
        })
    }

    componentWillUnmount() {
        rebase.removeBinding(this.ref)
    }

    render() {
        const { projects } = this.state

        var items = projects.map((item, index) => {
            return (
                <li key={item.key} class="list-group-item">
                    <Project item={item} />
                </li>
            )
        })
        return (
            <ul className="list-group">
                {items}
            </ul>
        )
    }
}