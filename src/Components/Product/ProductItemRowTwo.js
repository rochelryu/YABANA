import React from 'react';
import './Product.css';
import {Link} from "react-router-dom";
import {Icon} from "antd";


export default class ProductItemRowTwo extends  React.Component{

    render() {
        const {product} = this.props;
        if(parseInt(product.price,10) !== 0 /*&& product.catalog_main_product === "false"*/) {
            let price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(product.price,10));
            price = price.substring(0,price.length -5)
            const view = "/details" + product.url.substring(28, product.url.length - 1);

            return (
                <div className="col-lg-4 col-md-6">
                    <div className="single-products-catagory clearfix">
                        <img class="img-fluid" alt={product.name}
                             src={product.profil}/>
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>Pour {price} Fcfa</p>
                            <h4>{product.name}</h4>
                            <div className="prd-affich">

                                <a onClick={()=>console.log("add to back")} className="social-info">
                                    <span className="ti-bag"></span>
                                    <p className="hover-text">Ajouter au Panier</p>
                                </a>
                                <a href="" className="social-info">
                                    <span className="lnr lnr-sync"></span>
                                    <p className="hover-text">compare</p>
                                </a>
                                <Link to={{ pathname: view, search: "?r=r" }} className="social-info">
                                    <span className="lnr lnr-move"></span>
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