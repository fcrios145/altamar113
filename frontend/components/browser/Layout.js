import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import CategoryNavbar from "./CategoryNavbar";
import Navbar from "./Navbar";
import PlateNavbar from "./PlateNavbar";

export default class Layout extends React.Component {

    render() {
        const {
            categories,
            imageInHeader,
            showCategoryNavbar,
            showPlateNavbar
        } = this.props;
        const { categoria, platillo } = this.props.match.params;
        return (
            <React.Fragment>
                <div className="topbar-color"></div>
                <div className={`wrapper space-between`}>
                    <header>
                        <Header imageInHeader={imageInHeader}/>
                        <Navbar imageInHeader={imageInHeader} />
                        {showCategoryNavbar &&
                            <CategoryNavbar categories={categories}/>
                        }
                        {showPlateNavbar &&
                            <PlateNavbar category={categoria}  plates={this.props.searchPlate(categoria)}/>
                        }
                    </header>



                    {/*Content*/}
                    {this.props.children}

                    <Footer/>

                </div>
            </React.Fragment>
        );
    }
}