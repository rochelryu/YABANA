import React from 'react';
import {Link} from "react-router-dom";
import '../Universal/boot1.css';
import '../Universal/boot3.css';
import {Tooltip, notification, Icon, message} from 'antd';
import {connect} from "react-redux";
import * as types from '../../Constants/YabaConstant'


class ProductItem extends React.Component{
    constructor(props){
        super(props)
        this.state = { visible: false };
        this.commpare = this.commpare.bind(this);
        this.addpannier = this.addpannier.bind(this);
    }
    commpare(product){
        if(this.props.compareProduct.length < 2){
            this.props.addCompare(product);
        }
        else {
            this.props.addCompare(product);
            this.openNotification("Remplie", "Vous ne pouvez comparer que deux produit maximum. Veillez vider la liste des comparaisons","close-circle", "bottomLeft");
        }
    }
    addpannier(product){
        this.props.addPannier(product);
        message.success('Article Ajouté');
    }
    openNotification(err, descr, img, pos){
        notification.open({
            message: err,
            description: descr,
            placement:pos,
            icon: <Icon type={img} theme="twoTone" twoToneColor="#d06f1a" />,
        });
    };

   /* save(product){
        product.quantity = 1;
        localStorage.setItem("panier",JSON.stringify(product));
        setTimeout(()=>{
            console.log(localStorage.getItem("panier"));
        },4000);
    }*/

    render() {
        const {product, share, compare} = this.props;
        if(parseInt(product.price,10) !== 0){
            let price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(product.price,10));
            price = price.substring(0,price.length -5)
            const view = "/details"+product.url.substring(28, product.url.length-1);
            return(
                <li className="product" >
                    <div className="post-module">
                        <div className="thumbnail">
                            <div className="date">
                                <div className="day">{product.rating_value}</div>
                                <div className="month">5</div>
                            </div>
                            <img alt={product.name}
                                 src={product.profil}/>
                        </div>
                        <div className="post-content">
                            <div className="category">{price} Fcfa</div>
                            <h1 className="title">{product.name}</h1>
                            <h2 className="sub_title">{(product.is_new === "true") ? "Nouvel Arrivage":""}</h2>
                            <p className="description">{product.type_name} | {product.valid_design_text} <br/>{product.catalog_name}</p>
                            <div className="post-meta">
                                <Tooltip placement="bottom" title="Voir Plus">
                                    <Link to={{ pathname: view, search: "?r=r" }}>
                                    <span className="view" style={{position:"absolute",right:70 + "px", bottom:5+"px"}}>
                                    <img src={require("../images/eye.png")} style={{width:30+"px",height:30+"px"}} />
                                    </span>
                                    </Link>
                                </Tooltip>
                                <Tooltip placement="bottomRight" title="Ajouter au Panier">
                                    <span onClick={()=>{this.addpannier(product)}} className="add" style={{position:"absolute",right:25+"px", bottom:5+"px"}}>
                                    <img src={require("../images/shopping-bags.png")} style={{width:30+"px",height:30+"px"}} />
                                  </span>
                                </Tooltip>
                                <Tooltip placement="bottom" title="Comparer">
                                <span onClick={()=>{this.commpare(product)}} className="add" style={{position:"absolute",right:115+"px", bottom:5+"px"}}>
                            <img src={require("../images/comparison.png")} style={{width:30+"px",height:30+"px"}} />
                      </span>
                                </Tooltip>
                                <Tooltip placement="bottomLeft" title="Partager">
                                <span onClick={()=>share(product, view)}  className="add" style={{position:"absolute",right:155+"px", bottom:5+"px"}}>
                                   <img src={require('../images/share.png')} alt="partager" style={{width:30+"px",height:30+"px"}}/>
                                </span>
                                </Tooltip>

                            </div>
                        </div>
                    </div>
                </li>
            )
        }
        else{
            return null
        }

    }
}
const mapStateToProps = state =>{
    return {
        compareProduct: state.compare.compareProduct,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addCompare:(item)=>{
            dispatch({type:types.ADD_COMPARE, item:item})
        },
        addPannier:(item)=>{
            dispatch({type:types.ADD_PANNIER, item:item})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductItem)