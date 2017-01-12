import React from "react"
import Auth from "../utils/Auth"
import { Link } from "react-router"
import "../../sass/app.scss"
import "react-tagsinput/react-tagsinput.css"

export default class Layout extends React.Component {
  render() {

    return (
      <div class="container-fluid">
        <ul hidden={!Auth.loggedIn()}>
          <li><Link to={`/projects`}>Projects</Link></li>
          <li><Link to={`/settings`}>Settings</Link></li>
          <li><Link to={`/logout`}>Logout</Link></li>
        </ul>
        <ul hidden={Auth.loggedIn()}>
          <li><Link to={`/`}>Login</Link></li>
          <li><Link to={`/register`}>Register</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
