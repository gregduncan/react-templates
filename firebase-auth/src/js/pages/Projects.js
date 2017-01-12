import React from "react"
import ProjectAdd from "../components/ProjectAdd"
import ProjectList from "../components/ProjectList"

export default class Projects extends React.Component {

  render() {
    return (
      <div>
        <h1>Projects <ProjectAdd /></h1>
        <ProjectList />
      </div>
    )
  }
}

