import React from 'react';
import {NavLink} from "react-router-dom";

export default class Test extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setGlobalState({imageInHeader:true});
    }

    render() {
        const { categories } = this.props;
        return (
            <React.Fragment>
                <nav className='subnav' style={{justifySelf: "flex-start"}}>
                    <ul>
                        {
                            categories.map(item => (
                                <li key={item.name}>
                                    <NavLink
                                        to={`/menu/${item.name}/`}>
                                        {item.text}
                                    </NavLink>
                                </li>
                            ))
                        }

                    </ul>
                </nav>
                <h1>Test Component</h1>
            </React.Fragment>

        );
    }

}