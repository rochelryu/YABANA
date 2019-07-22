import React from 'react';
import './Product.css';
import {Link} from "react-router-dom";
import {Icon} from "antd";


export default class ProductItemThree extends  React.Component{

    render() {
        const {product} = this.props;
        if(parseInt(product.price,10) !== 0 /*&& product.catalog_main_product === "false"*/) {
            let price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(product.price,10));
            price = price.substring(0,price.length -5)
            const view = "/details" + product.url.substring(28, product.url.length - 1);
            return (
            <div className="col-lg-4 col-md-6 ftco-animate d-flex fakeCity">
                <div className="product d-flex flex-column">
                    <Link to={{ pathname: view, search: "?r=r" }} className="img-prod"><img className="img-fluid" alt={product.name}
                                                                                            src={product.profil}/>
                        <div className="overlay"></div>
                    </Link>
                    <div className="text py-3 pb-4 px-3">
                        <div className="d-flex">
                            <div className="cat">
                                <span>{product.type_name}</span>
                            </div>
                            <div className="rating">
                                <p className="text-right mb-0">
                                    <Icon type="star" theme="twoTone" twoToneColor="#d06f22"/>
                                    <span style={{marginLeft:7}}>{product.rating_value}</span>
                                </p>
                            </div>
                        </div>
                        <h3><a href="#">{product.name}</a></h3>
                        <div className="pricing">
                            <p className="price"><span>{price} Fcfa</span></p>
                        </div>
                        <p className="bottom-area d-flex px-3">
                            <span href="#" className="add-to-cart text-center py-2 mr-1"><span>Ajouter au Panier </span></span>
                            <span href="#" className="buy-now text-center py-2">Comparer</span>
                        </p>
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