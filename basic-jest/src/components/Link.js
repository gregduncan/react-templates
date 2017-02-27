import React from "react"

const STATUS = {
  NORMAL: 'normal',
  HOVERED: 'hovered'
}

export default class Link extends React.Component {

    constructor(props) {
        super(props);

        this.handleEnter = this.handleEnter.bind(this);
        this.handleLeave = this.handleLeave.bind(this);

        this.state = {
            class: STATUS.NORMAL,
        };
    }

    handleEnter() {
        this.setState({ class: STATUS.HOVERED });
    }

    handleLeave() {
        this.setState({ class: STATUS.NORMAL });
    }

    render() {
        return (
            <a
                className={this.state.class}
                href={this.props.page || '#'}
                onMouseEnter={this.handleEnter}
                onMouseLeave={this.handleLeave}>
                {this.props.children}
            </a>
        );
    }
}