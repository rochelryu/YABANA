import React from 'react';
import ProductItem from "../Categorie/ProductItem";
import ProductItemRowOne from './ProductItemRowOne';
import ProductItemThree from './ProductItemThree';
import ProductFour from './ProductFour';

export default class MainScreen extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        let {ele, affiche, compare} = this.props
        switch (affiche) {
            case 1:
                return (
                    <ProductItemRowOne compare={compare} product={ele}/>
                )
                break;
            case 2:
                return (
                    <div className="col-lg-4 col-md-6 ul">
                        <ProductItem compare={compare} product={ele}/>
                    </div>
                )
                break;
            case 3:
                return (
                    <ProductItemThree compare={compare} product={ele}/>
                )
                break;
            case 4:
                return (
                    <ProductFour compare={compare} product={ele}/>
                )
                break;
            default:
                return (
                    <ProductItemRowOne compare={compare} product={ele}/>
                )
        }
    }
}
