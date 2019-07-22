import React from 'react';
import './card.css';
import {Link} from "react-router-dom";
import {Icon} from "antd";


export default class Card extends  React.Component{

    render() {
        return (
            <div className="col-sm-12 col-md-6 col-lg-3 ftco-animate d-flex fakeCity">
                <div className="contents">
                    <div className="img">
                        <img src={require('../images/ex200-1.u425.d20170309.t162916.175240.jpg')} alt="Fake"/>
                    </div>
                    <div className="detail">
                        <div className="nam">
                            <div className="name">
                                <p>Lacoste</p>
                            </div>
                            <div className="like">
                                <ul>
                                    <li>
                                        <Icon theme="star"/>
                                    </li>
                                    <li>
                                        (4.6)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="detail-plus">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <div className="plus">
                            <p className="voir">view</p>
                            <p className="panier">panier</p>
                        </div>
                    </div>
                    <div className="price">
                        <p>150 000Fcfa</p>
                    </div>
                </div>
            </div>
        )
    }
}