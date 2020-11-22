import React from 'react';
import {connect} from "react-redux";

class Header extends React.Component {
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

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        imageInHeader: state.imageInHeader
    }
}

//   const mapDispatchToProps = { increment, decrement, reset }

export default connect(
    mapStateToProps,
    null
)(Header)