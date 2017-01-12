import React from "react"
import ProjectEdit from "./ProjectEdit"
import ProjectRemove from "./ProjectRemove"
import TagList from "./TagList"
import { Link } from 'react-router'

export default class Project extends React.Component {

    render() {
        const { item } = this.props

        return (
            <div class="overflow">
                <div class="row">
                    <div class="col-sm-11">
                        <Link to={`/project/${item.key}`} class="lnk-block">{item.name}</Link>
                    </div>
                    <div class="col-sm-1">
                        <ProjectEdit projectId={item.key} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-11">
                        <TagList tags={item.tags} />
                    </div>
                    <div class="col-sm-1">
                        <ProjectRemove projectId={item.key} />
                    </div>
                </div>
            </div>
        )
    }
}

Project.propTypes = {
    item: React.PropTypes.object.isRequired
}