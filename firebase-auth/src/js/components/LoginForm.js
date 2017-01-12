import React from "react"
import Validation from "react-validation"
import Auth from "../utils/Auth"
import { firebase } from "../config/Firebase"
import { hashHistory } from "react-router"

const rebase = firebase()

export default class LoginForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: {},
            warning: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAuthorization = this.handleAuthorization.bind(this)
    }

    componentDidMount() {
        if (Auth.loggedIn()) {
            hashHistory.push('/projects')
        }
    }

    handleChange({ target }) {
        this.setState({ [target.id]: target.value })
    }

    handleSubmit(e) {
        rebase.authWithPassword({ email: this.state.email, password: this.state.password },
            (error, user) => {
                if (error) {
                    this.setState({ error: error, warning: false })
                } else {
                    this.handleAuthorization(user.uid)
                }
            }
        )
        e.preventDefault()
    }

    handleAuthorization = (id) => {
        rebase.fetch(`users/${id}`, {
            context: this, asArray: false, then(user) {
                if (!user.auth) {
                    this.setState({ error: {}, warning: true })
                } else {
                    Auth.setToken(id)
                    hashHistory.push('/projects')
                }
            }
        })
    }

    render() {
        const { handleSubmit, handleChange, state } = this

        return (
            <div>
                <Validation.components.Form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <Validation.components.Input placeholder="Email" type="email" name="email" value={state.email} id="email" onChange={handleChange} className="form-control" validations={['required', 'email']} />
                    </div>
                    <div class="form-group">
                        <Validation.components.Input placeholder="Password" type="password" name="password" value={state.password} id="password" onChange={handleChange} className="form-control" validations={['required', 'passwordLength']} />
                    </div>
                    <div class="form-group overflow">
                        <Validation.components.Button className="btn btn-primary">Login</Validation.components.Button>
                    </div>
                </Validation.components.Form>
                <div class="alert alert-danger" hidden={!state.error.message}>{state.error.message}</div>
                <div class="alert alert-warning" hidden={!state.warning}>Sorry still waiting verification by Admin.</div>
            </div>
        )
    }
}
