import React from 'react';
import { NavLink, Redirect } from "react-router-dom";
import Plate from './Plate'

export default class Subnavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    text: 'Ceviches',
                    name: 'ceviches',
                    plates: [
                        {
                            name: "Tony espacial",
                            url: "tony-espacial"
                        },
                        {
                            name: "Mango beach",
                            url: "manco-beach"
                        }
                    ]
                },
                {
                    text: 'Aguachiles',
                    name: 'aguachiles',
                    plates: [
                        {
                            name: "Aguachile 1",
                            url: "agua1"
                        },
                        {
                            name: "Aguachile 2",
                            url: "agua-2"
                        }
                    ]
                },
                {
                    text: 'Sushis',
                    name: 'sushis',
                    plates:[
                        {
                            name: "Sushi 2",
                            url: "sushi-2"
                        }
                    ]
                }
            ]
        }
    }

    setPageTitle () {
        const { category, plate } = this.props;
        if(plate === undefined) {
            return category;
        } else {
            return `${category} - ${plate}`;
        }
    }

    componentDidMount() {
        document.title = this.setPageTitle();
    }

    componentDidUpdate() {
        document.title = this.setPageTitle();
    }

    render() {
        const { categories } = this.state;
        const { category, plate } = this.props;

        const selectedCategory = categories.find(item => item.name === category);
        return (

            <React.Fragment>
                <nav className='subnav'>
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
                <nav className='subnav-sub'>
                    <ul>
                        {selectedCategory.plates && selectedCategory.plates.map((item, index) => (
                            <li key={item.url}>
                                <NavLink
                                    to={`/menu/${category}/${item.url}`}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                {!plate && <h2>Seleccione un platillo</h2>}
                {plate &&
                    <Plate plate={plate}></Plate>
                }
            </React.Fragment>
        );
    }
}