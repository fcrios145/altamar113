import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import CategoryNavbar from "./CategoryNavbar";
import Navbar from "./Navbar";
import PlateNavbar from "./PlateNavbar";
import {connect} from "react-redux";

class Layout extends React.Component {

    render() {
        const {
            categories,
            showCategoryNavbar,
            showPlateNavbar
        } = this.props;
        const { categoria, platillo } = this.props.match.params;
        return (
            <React.Fragment>
                <div className="topbar-color"></div>
                <div className={`wrapper space-between`}>
                    <header>
                        <Header />
                        <Navbar />
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

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        showCategoryNavbar: state.showCategoryNavbar
    }
}

//   const mapDispatchToProps = { increment, decrement, reset }

export default connect(
    mapStateToProps,
    null
)(Layout)