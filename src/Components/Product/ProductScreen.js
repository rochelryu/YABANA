import React from 'react';
import LoaderScreen from '../Loader/LoaderScreen';
import { Slider, Select, Pagination,Drawer } from 'antd';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {sousCategorie} from '../../ServiceWorker/Helper';
import MainScreen from './MainScreen';

import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import './Product.css'

const { Option, OptGroup } = Select;
let total = [];
export default class ProductScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isReady: false,
            info: [],
            disabled: false,
            default: 1,
            infoAffiche:[],
            infoPagininationAffiche:10,
            infoNumberAffiche:24,
            categorie:[],
            cateName:"",
            visible: false
        }
    }

    async componentDidMount() {
        const { handle } = this.props.match.params;
        let alls = await sousCategorie(handle);
        total = alls.produit;
        if(total){
            this.setState({
                categorie:alls.categorie,
                info:alls.produit,
                cateName:alls.current,
                isReady:true,
                infoAffiche:alls.produit.slice(0,23),
                infoPagininationAffiche:Math.floor(alls.produit.length / 24)*10
            })
        }
    }

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    showDrawer = (ele) => {
        console.log(ele);
        this.setState({
            visible: true,
        });
    };

    positionChange = (value) => {
        this.setState({
            default: parseInt(value,10)
        })
    }
    numberChange = (value) => {
        let numberChange = parseInt(value, 10)
        this.setState({
            infoNumberAffiche:numberChange,
            infoCurentPagination: 1,
            infoAffiche:this.state.info.slice(0,numberChange),
            infoPagininationAffiche:Math.floor(this.state.info.length / numberChange)*10
        })
    }
    filtragePrix(item, max,min) {
        const valuu = parseInt(item.price,10)
        return max >= valuu && valuu >= min ;
    }
    onAfterChange = (value) => {
        const max = (value[1] >= value[0]) ? value[1] : value[0];
        const min = (value[1] >= value[0]) ? value[0] : value[1];
        let trie = total.filter(values => this.filtragePrix(values, max, min));
        console.log(trie.length, max, min);
        this.setState({
            info:trie,
            infoCurentPagination: 1,
            infoAffiche:trie.slice(0,this.state.infoNumberAffiche),
            infoPagininationAffiche:Math.floor(trie.length / this.state.infoNumberAffiche)*10
        })
    }
    formatter = (value) => {
        return `${value} Fcfa`;
    }
    onChange = value => {
        console.log(value);
        /*this.setState({
            inputValue: value,
        });*/
    };

    deplace = page => {

        let ele = parseInt(page,10);
        console.log(ele)
        if(ele !== 1){
            const beta = ele -1;
            const start = (beta * this.state.infoNumberAffiche);
            const end = start + this.state.infoNumberAffiche;
            const item = this.state.info;
            console.log(beta, start, end, item.length)
            this.setState({
                infoAffiche:item.slice(start, end)
            });
        }
        else {
            console.log("this unlk")
            const end = this.state.infoNumberAffiche;
            this.setState({
                infoAffiche:this.state.info.slice(0, end)
            });
        }
    };

    render() {
        let value = "";
        let thematique = "";
        if(1<= parseInt(this.props.match.params.handle,10) &&  parseInt(this.props.match.params.handle,10) <= 11){
            value = "https://www.ikea.com/images/un-salon-naturel-canape-2-places-groenlid-blanc-housse-de-co-d701c5494eff7543b340b9723e8e9247.jpg";
            thematique = "Mobilier";
        }
        else if(12<= parseInt(this.props.match.params.handle,10) &&  parseInt(this.props.match.params.handle,10) <= 18){
            value = "https://www.ikea.com/images/les-facades-de-cuisine-ikea-torhamn-en-frene-massif-creent-u-f322016e1c6dc647c52a42b2bab9668c.jpg";
            thematique = "Cuisine";
        }
        console.log(value, thematique )
        if(this.state.isReady){
        return (
            <div id="category">
                <section className="banner-area organic-breadcrumb"
                         style={{background: 'url(' + value + ') center no-repeat'}}>
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>{thematique}</h1>
                                <nav className="d-flex align-items-center">
                                    <Link to="/">Acceuil <FontAwesomeIcon style={{color: "#fff"}} icon={faArrowRight}/></Link>
                                    <span style={{color: "#fff", marginLeft: 5}}> Categorie <FontAwesomeIcon
                                        style={{color: "#fff"}} icon={faArrowRight}/> </span>
                                    <span style={{color: "#fff", marginLeft: 5}}>{this.state.cateName}</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5">
                            <div className="sidebar-filter mt-50">
                                <div className="top-filter-head">Filtre de Produit</div>
                                <div className="common-filter">
                                    <div className="head">Prix</div>
                                    <div className="price-range-area">
                                        <Slider style={{color: "red"}} min={0} max={8000000}
                                                onAfterChange={this.onAfterChange} tipFormatter={this.formatter} range
                                                defaultValue={[0, 10000000]} tooltipVisible
                                                disabled={this.state.disabled}/>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-categories">
                                <div className="head">Mobilier</div>
                                <ul className="main-categories">
                                    {this.state.categorie.map((value,index)=>
                                        <li key={index} className="main-nav-list">
                                            <Link to={"/catalog/"+value.ident}>
                                                {value.name}
                                                <span className="number">{value.numberTotal}</span>
                                            </Link>
                                        </li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7">
                            <div className="filter-bar d-flex flex-wrap align-items-center">
                                <div className="sorting">
                                    <Select style={{width: 170}}
                                            placeholder="Disposition" onChange={this.positionChange}>
                                        <OptGroup label="COLONE">
                                            <Option value="1">Yabana Defaut</Option>
                                            <Option value="2">Yabana Light</Option>
                                            <Option value="3">Yabana Mosaic</Option>
                                        </OptGroup>
                                        <OptGroup label="Ligne">
                                            <Option value="4">Yabana XXI</Option>
                                        </OptGroup>

                                    </Select>
                                </div>
                                <div className="sorting mr-auto">
                                    <Select style={{width: 70}}
                                            placeholder="Sortie" onChange={this.numberChange}>
                                        <Option value="24">24</Option>
                                        <Option value="48">48</Option>
                                        <Option value="72">72</Option>
                                        <Option value="100">100</Option>
                                    </Select>
                                </div>
                                <div className="pagination">
                                    <Pagination defaultCurrent={1} onChange={this.deplace} total={this.state.infoPagininationAffiche}/>
                                </div>
                            </div>
                            <section className="lattest-product-area pb-40 category-list">
                                <div className="row">
                                    {this.state.infoAffiche.map((value,index)=> <MainScreen compare={this.showDrawer} key={index} ele={value} affiche={this.state.default} />)}
                                </div>
                            </section>
                            <div className="filter-bar d-flex flex-wrap align-items-center">

                                <div className="pagination">
                                    <Pagination defaultCurrent={1} onChange={this.deplace} total={this.state.infoPagininationAffiche}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Drawer
                    width={200*2}
                    title="Comparer Produit"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        )
    }
        else {
        return (
            <LoaderScreen/>
        )
        }
    }
}