import React from 'react';
import Layout from "./Layout";

const liMenuStyle = {
    color: '#053861',
    fontSize: '1.2em',
    marginBottom: '0.7em'
};

const spanTitle = {
    fontSize: '1.5em',
    color: '#2196F3'
}

export default class Plate extends React.Component {

    componentDidMount() {
        this.props.setGlobalState({
            imageInHeader:true,
            showCategoryNavbar: true,
            showPlateNavbar: true
        })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { categoria, platillo } = this.props.match.params;
        document.title = `${categoria}`;
    }

    render() {
        const { categoria, platillo } = this.props.match.params;
        const categoryObject = this.props.searchPlate(categoria);
        const plate = categoryObject.plates.find(item => item.url === platillo) || {};
        console.log(plate);
        return (
            <Layout {...this.props}>
                <div className="plate mobile-only">
                    {plate &&
                    <React.Fragment>
                        <img style={{width: '100%', height: 'auto'}} className='plate-image' src="/static/images/ceviche.png" alt="ceviche" />
                        <div className="text-in-image">
                            <h1 className='plate-title'>{plate.name}</h1>
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
                <div className="not-mobile">
                    <div className="rows">
                        <div className="row" style={{display: 'flex', justifyContent: 'space-between', marginRight: '5em'}}>
                            <div>
                                <span style={spanTitle}>Aguachile</span>
                                <ul style={{marginTop: '1.5em'}}>
                                    <li style={liMenuStyle}>Mar verde</li>
                                    <li style={liMenuStyle}>Mar Rojo</li>
                                    <li style={liMenuStyle}>Mar Morado</li>
                                </ul>
                            </div>
                            <div>
                                <span style={spanTitle}>Aguachile</span>
                                <ul style={{marginTop: '1.5em'}}>
                                    <li style={liMenuStyle}>Mar verde</li>
                                    <li style={liMenuStyle}>Mar Rojo</li>
                                    <li style={liMenuStyle}>Mar Morado</li>
                                    <li style={liMenuStyle}>Mar Morado</li>
                                </ul>
                            </div>
                            <div>
                                <span style={spanTitle}>Aguachile</span>
                                <ul style={{marginTop: '1.5em'}}>
                                    <li style={liMenuStyle}>Mar verde</li>
                                    <li style={liMenuStyle}>Mar Rojo</li>
                                    <li style={liMenuStyle}>Mar Morado</li>
                                    <li style={liMenuStyle}>Mar Morado</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <h1 style={{
                                    fontWeight: '900',
                                    fontSize: '2em',
                                    color: '#2196F3',
                                    textAlign: 'center'
                                }}>{plate.name}</h1>
                                <p style={{
                                    fontSize: '1.5em',
                                    textAlign: 'center',
                                    color: '#053861',
                                    margin: '1.5em 0'
                                }}>
                                    Camarón crudo acompañado con pepino tomate y cebolla moradaen cuadro, chile serrano y cilantro finamente picado coronado con aguacate
                                </p>
                                <img style={{width: '100%', height: 'auto', maxWidth: '500px', alignSelf: 'center', marginBottom: '1em'}} src="/static/images/slider-1.png" alt=""/>
                            </div>

                        </div>


                    </div>
                </div>
            </Layout>
        );
    }
}