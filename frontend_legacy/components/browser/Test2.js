import React from 'react';
import Layout from "./Layout";

export default class Test2 extends React.Component {

    componentDidMount() {
        this.props.setGlobalState({
            imageInHeader:true,
            showCategoryNavbar: true,
            showPlateNavbar: true,
            wrapperClass: 'wrapper-fix-height'
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
                <div className="plate">
                    {plate &&
                    <React.Fragment>
                        <img className='plate-image' src="/static/images/ceviche.png" alt="ceviche" />
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
            </Layout>
        );
    }
}