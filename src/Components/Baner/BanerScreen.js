import React from 'react';
import './baner.css';
import { shiftLeft, shiftRight } from '../Universal/utils';

export default class BanerScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            pub: []
        }
        this.face = "";
        this.shiftLe = this.shiftLe.bind(this);
        this.shiftRi = this.shiftRi.bind(this);
        this.auto = this.auto.bind(this);
    }
    componentWillMount() {
        this.setState({pub: ["https://image.freepik.com/vecteurs-libre/belle-eid-mubarak-islamique-colore_1055-6729.jpg","https://image.freepik.com/psd-gratuit/modele-banniere-pour-festival-ete_23-2148174536.jpg","https://image.freepik.com/vecteurs-libre/modele-affiche-festival-musique_23-2148086131.jpg", "https://image.freepik.com/vecteurs-libre/fond-noir-grunge-vente-vendredi_63801-49.jpg", "https://image.freepik.com/vecteurs-libre/modele-banniere-magasin-mode_1361-1248.jpg", "https://image.freepik.com/vecteurs-libre/modele-affiche-evenement-musique-formes-abstraites_1361-1316.jpg", "https://image.freepik.com/vecteurs-libre/nouveau-modele-banniere-saison_1361-1221.jpg"]})
    }
    shiftLe(){
        clearInterval(this.face)
        shiftLeft();
        this.face = setInterval(()=>{
            shiftRight();
        },5000)
    }
    auto(){
        setTimeout(()=>{
            console.log("auto");
        },5000)
    }
    shiftRi(){
        clearInterval(this.face)
        shiftRight();
        this.face = setInterval(()=>{
            shiftRight();
        },5000)
    }

    componentDidMount() {
        console.log("go")
       this.face = setInterval(()=>{
            shiftRight();
        },5000)
        return this.face;
    }
    componentWillUnmount() {
        console.log("end")

        return clearInterval(this.face);

    }

    /*bannerFonctionL(props) {
        const numbers = props.numbers;
        const listItem = numbers.map((numberss)=>);
        return(

        )
    }*/
    render() {
        let { ele, AjoutPanier, voir } = this.props;

        return (
            <div className="containerss">
                <div className="abss"></div>
                <div className="button btnLeft" onClick={()=>this.shiftLe()}><img src={require("../images/left-arrow.png")} alt=""/></div>
                <div className="cards-wrapper">
                    <ul className="cards__container">
                        {this.state.pub.map((value, index)=>{
                            return <li key={index} className="box" style={{background: 'url(' + value + ') center no-repeat'}}></li>
                        })}
                    </ul>
                    <div className="card__text-content">
                        <h3 className="card__title">Yabana</h3>
                        <div className="card__summary"> L'Immobilier, notre Affaire</div>
                    </div>
                </div>
                <div className="button btnRight" onClick={()=>this.shiftRi()}><img src={require("../images/next (1).png")} alt=""/></div>
            </div>
        );
    }
}
