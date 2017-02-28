import React from "react"
import { Route, IndexRoute } from "react-router"

import Layout from "../containers/Layout"
import PageOne from "../containers/PageOne"
import PageTwo from "../containers/PageTwo"

export default (
	<Route path="/" component={Layout}>
		<IndexRoute component={PageOne}></IndexRoute>
		<Route path="alt" component={PageTwo}></Route>
	</Route>
)