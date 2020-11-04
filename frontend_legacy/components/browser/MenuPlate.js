import React from 'react';
import Menu from "./Menu";

export default class MenuPlate extends React.Component {
    render() {
        const { platillo } = this.props.match.params;
        return (
            <div>
                {platillo &&
                    <React.Fragment>
                        <Menu {...this.props}></Menu>
                        <span>Name: {platillo.name}</span>
                    </React.Fragment>
                }
            </div>
        );
    }
}