import React from "react"
import { firebase } from "../config/Firebase"
import Auth from "../utils/Auth"

const rebase = firebase()

export default class SettingEdit extends React.Component {

    constructor() {
        super()
        this.state = {
            user: {
                name: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.ref = rebase.syncState(`users/${Auth.getToken()}`, {
            context: this,
            state: 'user',
            asArray: false
        })
    }

    componentWillUnmount() {
        rebase.removeBinding(this.ref)
    }

    handleChange({ target }) {
        this.setState({ user: { name: target.value } })
    }

    render() {
        const { user } = this.state

        return (
            <div>
                <h4>Update username</h4>
                <div class="form-group">
                    <input placeholder="New username" autoComplete="off" value={user.name} id="user.name" onChange={this.handleChange} class="form-control" />
                </div>
            </div>
        )
    }
}
