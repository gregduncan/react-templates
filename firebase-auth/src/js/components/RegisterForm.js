import React from "react"
import Validation from "react-validation"
import { Register } from "../models/Register"
import { firebase } from "../config/Firebase"

const rebase = firebase()

export default class RegisterForm extends React.Component {

    constructor() {
        super()
        this.state = Register
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUserAdd = this.handleUserAdd.bind(this)
    }

    handleChange({ target }) {
        this.setState({ [target.id]: target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        rebase.createUser({ email: this.state.email, password: this.state.password }, this.handleUserAdd)
    }

    handleUserAdd(error, user) {
        if (error) {
            this.setState({ error: error, success: false })
        } else {
            rebase.post(`users/${user.uid}`, { data: { name: this.state.name, auth: false } })
            this.setState(Object.assign({}, Register, { success: true }))
        }
    }

    render() {
        const { handleSubmit, handleChange} = this
        const { name, email, password, error, success } = this.state

        return (
            <div>
                <Validation.components.Form onSubmit={handleSubmit} autoComplete="off">
                    <div class="form-group">
                        <Validation.components.Input placeholder="Username" autoComplete="off" name="name" type="name" value={name} id="name" onChange={handleChange} className="form-control" validations={['required']} />
                    </div>
                    <div class="form-group">
                        <Validation.components.Input autoComplete="false" autoComplete="off" placeholder="Email" name="email" type="email" value={email} id="email" onChange={handleChange} className="form-control" validations={['required', 'email']} />
                    </div>
                    <div class="form-group">
                        <Validation.components.Input placeholder="Password" autoComplete="off" name="password" type="password" value={password} id="password" onChange={handleChange} className="form-control" validations={['required', 'passwordLength']} />
                    </div>
                    <div class="form-group overflow">
                        <Validation.components.Button className="btn btn-primary">Sign up</Validation.components.Button>
                    </div>
                </Validation.components.Form>
                <div class="alert alert-danger" hidden={!error.message}>{error.message}</div>
                <div class="alert alert-info" hidden={!success}>Thanks request sent, awaiting verification by Admin.</div>
            </div>
        )
    }
}
