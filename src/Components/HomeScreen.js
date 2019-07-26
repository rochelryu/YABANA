import React from 'react';
import BanerScreen from './Baner/BanerScreen';
import CategorieScreen from './Categorie/CategorieScreen';
import error from './images/error.png';
import yababaBoot from './images/yababaBoot.png';
import LoaderScreen from './Loader/LoaderScreen';
import {all} from '../ServiceWorker/Helper';
import './all.css';
import './Universal/animate.css';
import {Icon, Drawer, notification} from "antd";
import ModalShare from "./ModalShare";
import {connect} from "react-redux";
import * as types from "../Constants/YabaConstant";
import FooterScreen from "./Footer/FooterScreen";

let messageBoot=[
    {text:" Je suis Yabana Boot et Je vais vous accompagner jusqu'à votre maitrise de la plate-forme", date:new Date().getHours()+':'+new Date().getMinutes(), salutation:(new Date().getHours()>13)? "Bonsoir":"Bonjour" },
    {text:" Yabana Vous permet de comparer des produits de toutes categories afin d'affiner vos choix (Vous ne pouvez que comparer 2 produits maximum si vous voulez comparer plus veillez vider la liste)", date:new Date().getHours()+':'+new Date().getMinutes(), salutation:"" },
    {text:" Le saviez-vous Yabana vous donne la possibilité de partager ses articles sur vos différents reseaux sociaux. Ah oui !!! il vous suffit de cliquer sur le bouton partager qui apparait sur chaque produit ", date:new Date().getHours()+':'+new Date().getMinutes(), salutation:"" },
]
class HomeScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            all:[],
            isReady:false,
            message:[],
            visible: true,
            compare:[],
            share:{},
            modalIsOpen:false,
            linkk:""
        }
        this.face = "";
        this.afficheTchat = this.afficheTchat.bind(this);
        this.level = 0;
        this.tchatBeg = 0;
        this.tchatLevel = localStorage.getItem("bootLevel") ? parseInt(localStorage.getItem("bootLevel"),10):0
    }

    handleOk = e => {
        this.setState({
            modalIsOpen: false,
        });
    };


    onClose = () => {
        this.props.hideCompare();
    };
    shareSocial = (ele,link)=>{
        this.setState({
            share: ele,
            linkk:link+"?r=r",
            modalIsOpen:true
        });
    }
    showDrawer = (ele) => {
        if(this.state.compare.length < 2){
            let foreingText = this.state.compare;
            foreingText.push(ele);
            this.setState({
                compare:foreingText,
                visible: true,
            });
        }
        else {
            this.openNotification("Remplie", "Vous ne pouvez comparer que deux produit maximum. Veillez vider la liste des comparaisons","close-circle", "bottomLeft");
            this.setState({
                visible: true,
            });
        }
    };
    openNotification(err, descr, img, pos){
        notification.open({
            message: err,
            description: descr,
            placement:pos,
            icon: <Icon type={img} theme="twoTone" twoToneColor="#d06f1a" />,
        });
    };

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    async componentDidMount(){
        let alls = await all();
        if(!alls.mobilier.error) {
            this.setState({
                all: [
                    {
                        id: 2,
                        categoriesName: "MOBILIER",
                        banner: "https://www.ikea.com/images/un-salon-naturel-canape-2-places-groenlid-blanc-housse-de-co-d701c5494eff7543b340b9723e8e9247.jpg",
                        subTitle: "Le juste parfais pour votre maison :-)",
                        link: "categorie/Mobilier",
                        subCategorie: alls.mobilier
                    },
                    {
                        id: 2,
                        categoriesName: "CUISINE",
                        banner: "https://www.ikea.com/images/les-facades-de-cuisine-ikea-torhamn-en-frene-massif-creent-u-f322016e1c6dc647c52a42b2bab9668c.jpg?f=xxxl",
                        subTitle: "Créez dans votre cuisine une agréable sensation de nature",
                        link: "categorie/cuisine",
                        subCategorie: alls.cuisine
                    }
                ],
                message: [
                    {
                        icon: "truck",
                        title: "Livraison Gratuite",
                        subTitle: "Nous livrons Gratuitement Partout sur le Térritoire"
                    },
                    {
                        icon: "truck",
                        title: "Livraison Gratuite",
                        subTitle: "Nous livrons Gratuitement Partout sur le Térritoire"
                    },
                    {
                        icon: "truck",
                        title: "Livraison Gratuite",
                        subTitle: "Nous livrons Gratuitement Partout sur le Térritoire"
                    },
                    {
                        icon: "truck",
                        title: "Livraison Gratuite",
                        subTitle: "Nous livrons Gratuitement Partout sur le Térritoire"
                    }
                ],
                isReady: true
            });
            this.face = setInterval(() => {
                this.brushTraverse();
            }, 3000);
        }

    }



    afficheTchat(){
        if(this.tchatBeg === 0){
            this.tchatBeg++
            this.rootNode.children[0].src = error;
            this.rootNode.parentElement.children[1].style.display = "block";
        }
        else{
            this.tchatBeg =0;
            this.rootNode.children[0].src = yababaBoot;
            this.rootNode.parentElement.children[1].style.display = "none";
        }
    }
    brushTraverse () {
        var brush = document.getElementsByClassName('brush');
        for(let i = 0; i<brush.length; i++){
            brush[i].className = "brush";
        }
       if(this.level<brush.length){
           brush[this.level].className = "brush brushActive";
           this.level += 1;
       }
        else{
            this.level = 0;
           brush[this.level].className = "brush brushActive";

       }
    }
    componentWillUnmount() {
        return clearInterval(this.face);
    }
    render() {
        const fake = Math.floor(Math.random()*2)
        if(this.state.isReady){
            const {compareProduct, openModalCompare} = this.props
            return(
                <div className="HomeNews">

                    <BanerScreen/>
                    <ul className="ligne">
                        {this.state.message.map((item,index) => <li className="blockDe4" key={index}>
                            <div className="brush">
                                <div className="iconOuImage"><img className="maxSize" src={require("./images/shopping-bags.png")} alt="desc"/></div>
                                <div className="brushBody"><h5>{item.title}</h5><p>{item.subTitle}</p></div>
                            </div>
                        </li>)}

                    </ul>
                    {this.state.all.map((item,index) => <CategorieScreen share={this.shareSocial} compare={this.showDrawer} ele={item} key={index} exactly={index} />)}

                    <div className="ButtonTchat">
                        <div onClick={()=>this.afficheTchat()} ref={node => (this.rootNode = node)} className="Inteur">
                            <img src={require('./images/yababaBoot.png')} className="bootImg" alt=""/>
                        </div>
                        <div className="messageText">
                            <div className="headerMessage">
                                <div className="suspension">
                                    <Icon type="message" theme="twoTone" twoToneColor="#777" />
                                </div>
                                <div className="messageEntete">
                                    <span>Yabana Robot Chat</span>
                                </div>
                                <div className="closePartie">

                                </div>
                            </div>
                            <div className="bodyTchat">
                                <div className="team1">
                                    <div className="col-xs-3 team-img1">
                                        <img src={require('./images/yababaBoot.png')} className="imgTchat" alt="focus"/>
                                    </div>
                                    <div className="col-xs-9 team-info">
                                        <p>{messageBoot[this.tchatLevel+fake].salutation}{messageBoot[this.tchatLevel+fake].text}</p>
                                        <div className="timesTchat" align="right">
                                            <small>
                                                {messageBoot[this.tchatLevel+fake].date}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="footerTCHAT">
                                <p>Developpez par <a href="https://www.nan.ci">NaN</a></p>
                            </div>
                        </div>
                    </div>
                    <FooterScreen/>
                    <ModalShare visible={this.state.modalIsOpen} links={this.state.linkk} handleOk={this.handleOk} ele={this.state.share}/>
                    <Drawer
                        width={(compareProduct.length === 2) ? 700:400}
                        title="Comparer Produit"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={openModalCompare}
                    >
                        <div className="test">
                            <ul className="params">
                                <li>
                                    <span>Nom</span>
                                </li>
                                <li>
                                    <span>prix (Fcfa)</span>
                                </li>
                                <li>
                                    <span>type</span>
                                </li>
                                <li>
                                    <span>specificité</span>
                                </li>
                                <li>
                                    <span>matériel</span>
                                </li>
                                <li>
                                    <span>Description</span>
                                </li>
                                <li>
                                    <span>Couleur</span>
                                </li>
                            </ul>
                            {compareProduct.map((value, index)=> <ul key={index} className="prod">
                                <li>
                                    <img src={value.profil} alt={value.name}/>
                                </li>
                                <li>
                                    <p>{value.name}</p>
                                </li>
                                <li>
                                    <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(value.price,10)).substring(0,new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(value.price,10)).length -5)} </p>
                                </li>
                                <li>
                                    <p>{value.catalog_name}</p>
                                </li>
                                <li>
                                    <p>{value.type_name}</p>
                                </li>
                                <li>
                                    <p>{value.material_name}</p>
                                </li>
                                <li>
                                    <p>{value.desc}</p>
                                </li>
                                <li>
                                    <p>{value.color_name}</p>
                                </li>
                            </ul>)}
                        </div>
                        <div className="clearCompare">
                            <button className="Vider">Vider</button>
                        </div>
                    </Drawer>
                </div>
            )
        }
        else{
            return(
                <LoaderScreen/>
            )
        }
    }
}
const mapStateToProps = state =>{
    return {
        compareProduct: state.compare.compareProduct,
        openModalCompare: state.compare.openModalCompare,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        hideCompare:()=>{
            dispatch({type:types.HIDE_COMPARE})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)
