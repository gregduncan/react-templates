import React from "react";
import Dropzone from "react-dropzone";

export default class SettingAvatar extends React.Component {

    onDrop = (files) => {
        console.log('Received files: ', files)
    }

    render() {
        return (
            <div>
                <h4>Upload avitar</h4>
                <Dropzone onDrop={this.onDrop} multiple={false}>
                    <div>Drop image file here, or click to select image file to upload.</div>
                </Dropzone>
            </div>
        )
    }
}