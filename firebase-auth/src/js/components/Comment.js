import React from "react"
import CommentRemove from "./CommentRemove"

export default class Comment extends React.Component {

    render() {
        const { item, projectId, postId} = this.props

        return (
            <div class="row">
                <div class="col-sm-2">
                    <div class="thumbnail">
                        <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                    </div>
                </div>
                <div class="col-sm-10">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <strong>{item.createdBy}</strong> <span class="text-muted"> {item.createdOn}</span>
                            <CommentRemove projectId={projectId} postId={postId} commentId={item.key} />
                        </div>
                        <div class="panel-body">
                            {item.text}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Comment.propTypes = {
    projectId: React.PropTypes.string.isRequired,
    postId: React.PropTypes.string.isRequired,
    item: React.PropTypes.object.isRequired
}