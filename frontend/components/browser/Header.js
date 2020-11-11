import React from 'react';

export default class Header extends React.Component {
    render() {
        const { imageInHeader } = this.props
        return (
            <React.Fragment>
                {!imageInHeader &&
                    <img src="/static/images/logo.png" alt="altamar logo"/>
                }
            </React.Fragment>
        );
    }
}