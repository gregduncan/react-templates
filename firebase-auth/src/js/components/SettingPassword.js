import React from "react"
import Auth from "../utils/Auth"
import { firebase } from "../config/Firebase"
import { hashHistory } from "react-router"

const rebase = firebase()

export default class SettingPassword extends React.Component {
    
    constructor() {
        super()
        this.state = {
            sent: false
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleUpdate() {
        let user = rebase.auth().currentUser
        rebase.resetPassword({
            email: user.email
        }, (error, res) => {
            if (error) {

            } else {
                this.setState({ sent: true })
                setTimeout(function () {
                    hashHistory.push('/logout')
                }, 2000)
            }
        })
    }

    render() {
        return (
            <div>
                <h4>Reset Password</h4>
                <div class="alert alert-warning">You will be required to log back in after password reset request.</div>
                <div class="form-group">
                    <a class="btn btn-primary" onClick={this.handleUpdate}>Request</a>
                </div>
                <div class="alert alert-success" hidden={!this.state.sent}>Email sent, auto logout begins...</div>
            </div>
        )
    }
}
