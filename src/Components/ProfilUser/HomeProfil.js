import React from 'react'
import './Profil.css'
import {Icon} from "antd";
import {logged} from "../../ServiceWorker/Helper";
import ProductOfDashBoardUser from '../Product/ProductOfDashBoardUser';
//import Card from '../card/Card';
import {profil} from '../../ServiceWorker/Helper';
import jwt from 'jwt-decode';


export default class HomeProfil extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            info:[],
            valide:[],
            inWait:[],
            reject:[],
        }
        this.name = jwt(localStorage.getItem("authToken")).user.name
    }
    async componentDidMount() {
        const resultat = await profil();
        const valide = resultat.info.commandes.filter(value => this.commandeLevel(value,2))
        const inWait = resultat.info.commandes.filter(value => this.commandeLevel(value,1))
        const reject = resultat.info.commandes.filter(value => this.commandeLevel(value,3))
        this.setState({valide:valide,inWait:inWait,reject:reject})
    }
    commandeLevel(val, etat){
        return val.etat === etat;
    }

    render() {
        return(
            <div className="homeDash">
                <div className="forMINIDash">
                    <div className="block4">
                        <div className="iconDash">
                            <img src={require('../images/checked.png')} alt=""/>
                        </div>
                        <div className="bodyDashProp">
                            <h4>Produit Livrés</h4>
                            <span>{this.state.valide.length}</span>
                        </div>
                    </div>
                    <div className="block4">
                        <div className="iconDash">
                            <img src={require('../images/stopwatch.png')} alt=""/>
                        </div>
                        <div className="bodyDashProp">
                            <h4>Produit en Attente</h4>
                            <span>{this.state.inWait.length}</span>
                        </div>
                    </div>
                    <div className="block4">
                        <div className="iconDash">
                            <img src={require('../images/cancel.png')} alt=""/>
                        </div>
                        <div className="bodyDashProp">
                            <h4>Produits Rétournés</h4>
                            <span>{this.state.reject.length}</span>
                        </div>

                    </div>
                    <div className="block4">
                        <div className="iconDash">
                            <img src={require('../images/yababaBoot.png')} alt=""/>
                        </div>
                        <div className="bodyDashProp">
                            <p>
                                Aucun Achat a été encore passer sur votre compte. Yabana Vous attend {this.name}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">

                    </div>
                </div>
            </div>
        )
    }

}