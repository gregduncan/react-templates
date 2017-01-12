import React from "react"
import PostAdd from "../components/PostAdd"
import PostList from "../components/Postlist"
import AnimakitExpander from 'animakit-expander'

export default class Project extends React.Component {

    constructor() {
        super()
        this.state = {
            showInsert: false
        }
        this.handleExpand = this.handleExpand.bind(this)
    }

    handleExpand() {
        this.setState({ showInsert: this.state.showInsert ? false : true })
    }

    render() {
        return (
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="oveflow">
                        Project name
                        <a class="btn btn-sm btn-default pull-right" onClick={this.handleExpand}><i class={"glyphicon " + (this.state.showInsert ? 'glyphicon-minus' : 'glyphicon-plus')}></i></a>
                    </h1>
                    <AnimakitExpander expanded={this.state.showInsert}>
                        <PostAdd projectId={this.props.params.id} />
                    </AnimakitExpander>
                    <PostList projectId={this.props.params.id} />
                </div>
            </div>
        )
    }
}

