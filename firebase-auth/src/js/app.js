import React from "react"
import ReactDOM from "react-dom"
import Auth from "./utils/Auth"
import Layout from "./pages/Layout"
import Projects from "./pages/Projects"
import Project from "./pages/Project"
import Settings from "./pages/Settings"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import Register from "./pages/Register"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import "./config/Rules"

const app = document.getElementById('app')

const requireAuth = (nextState, replace) => {
  if (!Auth.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Login}></IndexRoute>
      <Route path="projects" component={Projects} onEnter={requireAuth}></Route>
      <Route path="project(/:id)" component={Project} onEnter={requireAuth}></Route>
      <Route path="settings" component={Settings} onEnter={requireAuth}></Route>
      <Route path="register" component={Register}></Route>
      <Route path="logout" component={Logout}></Route>
    </Route>
  </Router>,
  app);