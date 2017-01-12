import React from "react"
import Validation from "react-validation"
import TagsInput from "react-tagsinput"

export default class ProjectForm extends React.Component {

    render() {
        const { handleSubmit, handleChange, handleTags, item } = this.props

        return (
            <Validation.components.Form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label>Project Name</label>
                    <Validation.components.Input placeholder="Add" type="text" name="name" value={item.name} id="name" onChange={handleChange} className="form-control" validations={['required']} />
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea placeholder="Add" class="form-control" value={item.description} id="description" onChange={handleChange} ></textarea>
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

ProjectForm.propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    handleChange: React.PropTypes.func.isRequired,
    handleTags: React.PropTypes.func.isRequired,
    item: React.PropTypes.object.isRequired
}
