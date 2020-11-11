import React from 'react';

export default class Header extends React.Component {
    render() {
        const { imageInHeader } = this.props
        return (
            <React.Fragment>
                {!imageInHeader &&
                    <img className='mobile-only' src="/static/images/logo.png" alt="altamar logo"/>
                }
                <img className='not-mobile' src="/static/images/logo.png" alt="altamar logo"/>
            </React.Fragment>
        );
    }
}