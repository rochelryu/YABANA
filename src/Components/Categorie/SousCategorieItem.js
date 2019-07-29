import React from 'react';
import {
    Link,
} from "react-router-dom";
import ProductItem from './ProductItem';
import '../Universal/boot1.css';
import '../Universal/boot3.css';
import {prevStep, nextStep} from '../Universal/utils'


const ViewSousCAte = (props)=>{
        var det = "/catalog/"+props.type
        return <Link to={det}>Voir Tout</Link>;
}

export default class SousCategorieItem extends React.Component{

    render() {
        const {sousCate, compare, shares} = this.props;
        return (
            <div className="containers p-40" >
                <div className="head int"><span className="tit">{sousCate.name}</span> <span
                    className="qte">{sousCate.numberTotal} Produits Disponibles</span>
                    <span className="more"><ViewSousCAte type={sousCate.ident}/></span>
                </div>
                <div className="intent" id="meuble">
                    <img className="abs prev" onClick={()=>{prevStep(this.UlConcerne)}} src={require("../images/left-arrow.png")}
                         alt=""/>
                    <img className="abs next" onClick={()=>{nextStep(this.UlConcerne)}} src={require("../images/next (1).png")}
                         alt=""/>
                    <ul className="mystyle-products" ref={(ul)=>this.UlConcerne = ul}>
                        {sousCate.products.map((item,index) => <ProductItem share={shares} compare={compare}  key={index} product={item}/>)}
                    </ul>
                </div>
            </div>
        );
    }
}
