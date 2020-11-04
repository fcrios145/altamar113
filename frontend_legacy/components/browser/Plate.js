import React from 'react';
import {NavLink} from "react-router-dom";

export default class Plate extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount() {
        this.props.setGlobalState({imageInHeader:false});
    }

    componentDidUpdate() {
        const { platillo, categoria } = this.props.match.params;
    }

    render() {
        const { platillo, categoria } = this.props.match.params;
        const { categories } = this.props;
        const selectedCategory = categories.find(item => item.name === categoria);
        return (
            <React.Fragment>
                <nav className='subnav-sub'>
                    <ul>
                        {selectedCategory.plates && selectedCategory.plates.map((item, index) => (
                            <li key={item.url}>
                                <NavLink
                                    to={`/menu/${categoria}/${item.url}`}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="plate">
                        {platillo &&
                        <React.Fragment>
                            <img className='plate-image' src="/static/images/ceviche.png" alt="ceviche" />
                            <div className="text-in-image">
                                <h1 className='plate-title'>Tony Especial</h1>
                                <p className='plate-description'>Camarón crudo acompañado con pepino tomate y cebolla moradaen cuadro, chile serrano y cilantro finamente picado coronado con aguacate</p>
                            </div>

                            <a href="/" className='icon icon--left-arrow'>
                                Kiwi Corp
                            </a>

                            <a href="/" className='icon icon--right-arrow'>
                                Kiwi Corp
                            </a>

                        </React.Fragment>
                        }
                </div>
            </React.Fragment>

        )
    }
}