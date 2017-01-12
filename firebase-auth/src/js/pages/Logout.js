import React from "react"
import RegisterForm from "../components/RegisterForm"
import Auth from "../utils/Auth"
import { hashHistory } from "react-router"

export default class Logout extends React.Component {

  componentDidMount() {
    Auth.logout()
    hashHistory.push('/')
  }

  render() {
    return false
  }
}
