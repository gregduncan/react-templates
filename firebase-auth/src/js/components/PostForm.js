import React from "react"
import Validation from "react-validation"
import TagsInput from "react-tagsinput"

export default class PostForm extends React.Component {

    render() {
        const { handleSubmit, handleChange, handleTags, item } = this.props

        return (
            <Validation.components.Form onSubmit={handleSubmit}>
                <div class="form-group">
                    <Validation.components.Input placeholder="Subject" type="text" name="subject" value={item.subject} id="subject" onChange={handleChange} className="form-control" validations={['required']} />
                </div>
                <div class="form-group">
                    <Validation.components.Textarea placeholder="Post" type="text" name="text" value={item.text} id="text" onChange={handleChange} className="form-control" validations={['required']} />
                </div>
                <div class="form-group">
                    <TagsInput value={item.tags} onChange={handleTags} />
                </div>
                <div class="form-group form-group-alt overflow">
                    <Validation.components.Button className="btn btn-primary">Submit</Validation.components.Button>
                </div>
            </Validation.components.Form>
        )
    }
}

PostForm.propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    handleChange: React.PropTypes.func.isRequired,
    handleTags: React.PropTypes.func.isRequired,
    item: React.PropTypes.object.isRequired
}