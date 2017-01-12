import React from "react"
import PostEdit from "./PostEdit"
import PostRemove from "./PostRemove"
import CommentList from "./CommentList"
import CommentAdd from "./CommentAdd"
import TagList from "./TagList"

export default class Post extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showFull: false
        }
        this.handleExpand = this.handleExpand.bind(this)
    }

    handleExpand() {
        this.setState({ showFull: this.state.showFull ? false : true })
    }

    render() {
        const { item, projectId } = this.props

        return (
            <div>

                <div class="panel panel-default">
                    <div class="panel-heading overflow hover" onClick={this.handleExpand}>
                        <i class="glyphicon glyphicon-edit"></i> <strong>{item.subject}</strong> by <span>{item.createdBy}</span> <strong>{item.createdOn}</strong>
                        <i class={"glyphicon glyphicon-comment pull-right " + (this.state.showFull ? 'text-success' : '')}></i>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-sm-11 white-space">
                                {item.text}
                            </div>
                            <div class="col-sm-1">
                                <PostEdit projectId={projectId} postId={item.key} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-11">
                                <TagList tags={item.tags} />
                            </div>
                            <div class="col-sm-1">
                                <PostRemove projectId={projectId} postId={item.key} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class={this.state.showFull ? 'row' : 'row hidden'}>
                    <div class="col-sm-6">
                        <CommentAdd projectId={projectId} postId={item.key} />
                    </div>
                    <div class="col-sm-6">
                        <CommentList projectId={projectId} postId={item.key} />
                    </div>
                </div>
            </div>
        )
    }
}

Post.propTypes = {
    projectId: React.PropTypes.string.isRequired,
    item: React.PropTypes.object.isRequired
}