import React from 'react'
import './Profil.css'
import {Icon} from "antd";
import jwt from 'jwt-decode'

export default class NavBarProfil extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            infoUser:{},
            info:{}
        }
    }
    componentWillMount() {
        this.setState({
            infoUser: jwt(localStorage.getItem("authToken"))
        })
    }

    render() {
        const {Link} = this.props;
        return(
            <div className="secondBar">
                <div className="header">
                    <img src={(this.state.infoUser.user.profil !== "account.png")?this.state.infoUser.user.profil:require('../images/'+this.state.infoUser.user.profil)} alt="profil"/>
                </div>
                <div className="body">
                    <ul className="ulSecondBar">
                        <li>
                            <Link to="/profil">
                                <span><Icon type="dashboard"></Icon></span>
                                <span>Tableau de Bord</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profil/beta">
                                <span><Icon type="setting"></Icon></span>
                                <span>Paramèttre</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profil/pannier">
                                <span><Icon type="shopping"></Icon></span>
                                <span>Panier</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profil/meta">
                                <span><Icon type="notification"></Icon></span>
                                <span>Appréciation</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/logout">
                                <span><Icon type="logout"></Icon></span>
                                <span>Se Deconnecter</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}