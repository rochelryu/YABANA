import React from 'react';
import './Product.css';
import {Link} from "react-router-dom";
import {Icon} from "antd";


export default class ProductFour extends  React.Component{

    render() {
        const {product} = this.props;
        if(parseInt(product.price,10) !== 0 /*&& product.catalog_main_product === "false"*/) {
            let price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(product.price,10)*655);
            price = price.substring(0,price.length -5)
            const view = "/details" + product.url.substring(28, product.url.length - 1);
            const value = product.profil;
            return (
                <div className="col-sm-12 ftco-animate d-flex fakeCity">
                    <div className="hei">
                        <div className="boxe">
                            <div className="prd" style={{background: 'url(' + value + ') center no-repeat'}}></div>
                            <div className="cont">
                                <h4>{product.name}</h4>
                                <p>{product.type_name} | {product.valid_design_text} <br/>{product.catalog_name}</p>
                                <p className="price">{price} Fcfa</p>
                                <div className="button">
                                </div>
                            </div>
                            <div className="etoile">
                                <p>{product.rating_value}</p>
                            </div>
                        </div>
                </div>
                </div>
            )
        }
        else{
            return null
        }
    }
}