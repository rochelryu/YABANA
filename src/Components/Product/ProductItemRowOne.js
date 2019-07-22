import React from 'react';
import './Product.css';
import {Link} from "react-router-dom";
import {Icon} from "antd";


export default class ProductItemRowOne extends  React.Component{

    render() {
        const {product} = this.props;
        if(parseInt(product.price,10) !== 0 /*&&product.catalog_main_product === "false"*/) {
            let price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(product.price,10));
            price = price.substring(0,price.length -5)
            const view = "/details" + product.url.substring(28, product.url.length - 1);

            return (
                <div className="col-lg-4 col-md-6 productOne">
                    <div className="single-product">
                        <img className="img-fluid" alt={product.name}
                             src={product.profil}/>
                        <div className="product-details">
                            <h6>{product.name}</h6>
                            <div className="price">
                                <h6>{price} Fcfa</h6>
                            </div>
                            <div className="prd-bottom">

                                <a onClick={()=>console.log("add to back")} className="social-info">
                                    <span className="ti-bag"><Icon type="shopping" theme="twoTone" twoToneColor="#fff" /></span>
                                    <p className="hover-text">Ajouter au panier</p>
                                </a>
                                <a className="social-info">
                                    <span className="lnr lnr-sync"><Icon type="add" theme="twoTone" twoToneColor="#fff" /></span>
                                    <p className="hover-text">compare</p>
                                </a>
                                <Link to={{ pathname: view, search: "?r=r" }} className="social-info">
                                    <span className="lnr lnr-move"><Icon type="eye" theme="twoTone" twoToneColor="#fff" /></span>
                                    <p className="hover-text">Voir</p>
                                </Link>
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