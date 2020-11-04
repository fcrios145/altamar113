import React from 'react';

export default class Slider extends React.Component {
    render() {
        const { plate } = this.props;
        return (

            <div className="slider">
                    {plate &&
                    <React.Fragment>
                        <h2>Name: {plate.name}</h2>
                        <h3>url: {plate.url}</h3>
                    </React.Fragment>
                    }
            </div>

        )
    }
}