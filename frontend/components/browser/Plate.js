import React from 'react';

export default class Plate extends React.Component {
    render() {
        const { plate } = this.props;
        return (

            <div className="plate">
                    {plate &&
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

        )
    }
}