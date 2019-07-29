import React from 'react';
import './Auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import * as types from "../../Constants/YabaConstant"
import jwt from 'jwt-decode'
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    notification,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login';
import {login, signin, signinGoogle} from '../../ServiceWorker/Helper';

let container = {};
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const Fabe = (props)=>{
    if(props.choice === 1){
        return(
            <FacebookLogin
                appId="1019315108272978"
                autoLoad={true}
                fields="name,email,picture"
                callback={props.responseFaceBook}
                render={renderProps=> {return null}}
            />
        )
    }
    else return null
}


export default class AuthScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            FaceBlogin: 0,
            user:'',
            pass:'',
            name:'',
            firstname:'',
            numero:'',
            email:'',
            password:'',
            confirm:'',
            address:'',
            redirect:''
        }
        this.connectOfServe = this.connectOfServe.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.signinOfServe = this.signinOfServe.bind(this);
    }

    componentDidMount () {
        const { handle } = this.props.match.params;
        console.log(handle)
        this.setState({
            redirect:handle,
        })
    }
    async connectOfServe(e){
        e.preventDefault();
        if(this.state.user.length >= 8 && this.state.pass !== ""){
           let user = await login(this.state.user, this.state.pass);
           if(user.statue){
               if(user.info.etat === 1){
                   localStorage.setItem("authToken", user.info.result);
                   this.openNotification("Joyeux Retour parmi nous", jwt(user.info.result).user.name+" On vous attendais", "smile", 'bottom')
                   this.props.history.push('/profil');
               }
               else if(user.info.etat === 2){
                   this.openNotification("Echec", "Le Mot de passe est incorrect", "close-circle", 'bottom')
               }
               else {
                   this.openNotification("Echec", "Aucun compte avec ces coordonnées", "close-circle", 'bottom')
               }

           }
           else {
               this.openNotification("Echec", "Mauvais format de connexion", "frown", 'bottomLeft')
           }
        }
        else {
            this.openNotification("Echec", "Mauvais format de connexion", "frown", 'bottomLeft')
        }
    }
    redirect(handle){
        switch (handle) {
            case "final":
                this.props.history.push('/checkout');
                break;
            case "":

        }
    }
    /*verif_email(saisie)
    {
        var pattern = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;

        if (pattern.test(saisie))
        {
            window.alert('La saisie est une adresse email valide !');
        }
        else
        {
            window.alert('La saisie est invalide !' + saisie);
        }
    }*/
    async signinOfServe(e){
        e.preventDefault();
        console.log("ici je suis")
        let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
        if(re.test(String(this.state.email).toLowerCase()) && this.state.numero.toString().length === 8 && this.state.password === this.state.confirm && this.state.password !== "")
        {
            const fake = await signin(this.state.name, this.state.firstname, this.state.email, this.state.password, this.state.numero,this.state.address)
            if(fake.statue){
                if(fake.info.etat === 0){
                    this.openNotification("Succèss", "Bienvenu parmi nous "+jwt(fake.info.result).user.name, "smile", 'bottomRight');
                    localStorage.setItem("authToken", fake.info.result);
                    this.props.history.push('/profil');
                }else {
                    this.openNotification("Erreur", "Cet email existe déjà veillez vous connecter", "frown", 'bottomRight');
                }

            }
        else{
                this.openNotification("Echec", "Mauvais format des données", "frown", 'bottomRight')
            }
        }
        else {
            this.openNotification("Echec", "Mauvais format des données", "frown", 'bottomRight')
        }
    }
    _signin(ele,e){
        e.preventDefault();
        ele.classList.add("right-panel-active");
        }
    _connect(ele,e){
        console.log(ele)
        e.preventDefault();
        ele.classList.remove("right-panel-active");
    }
    openNotification(err, descr, img, pos){
        notification.open({
            message: err,
            description: descr,
            placement:pos,
            icon: <Icon type={img} theme="twoTone" twoToneColor="#d06f1a" />,
        });
    };

    changeFace = ()=>{
        this.setState({
            FaceBlogin:1
        })
}
    changeGoogle = ()=>{
        this.setState({
            FaceBlogin:2
        })
    }
    onInputChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    responseCallbackFacbook = async (response)=>{
        if(response.status !== "unknown"){
            const userss = await signinGoogle(response.name,"","",response.picture.data.url,response.id);
            if(typeof userss.info.result === "string"){
                const all = jwt(userss.info.result)
                localStorage.setItem("authToken",userss.info.result)
                userss.info.etat === 0 ? this.openNotification("Succèss", "Yabana Vous accueil les bras ouverts " + all.user.firstname, "smile", 'bottomRight'): this.openNotification("Succèss", "Heureux de vous revoir " + all.user.firstname, "smile", 'bottomRight')
                this.props.history.push('/profil')
            }
            else{
                this.openNotification("Echec", "Enregistrement echoué", "frown", 'bottomRight')
            }
        }
        else this.openNotification("Echec", "Vous n'avez pas voulu vous authentifié par Facebook", "frown", 'bottomRight')

    }
    responseCallback = async (response)=>{
        console.log(response)
        if(response.error === undefined){
            const profil = response.profileObj;
            const userss = await signinGoogle(profil.givenName,profil.familyName,profil.email,profil.imageUrl,profil.googleId);
            if(typeof userss.info.result === "string"){
                const all = jwt(userss.info.result)
                localStorage.setItem("authToken",userss.info.result)
                userss.info.etat === 0 ? this.openNotification("Succèss", "Yabana Vous accueil les bras ouverts " + all.user.firstname, "smile", 'bottomRight'): this.openNotification("Succèss", "Heureux de vous revoir " + all.user.firstname, "smile", 'bottomRight')
                this.props.history.push('/profil')
            }
            else{
                this.openNotification("Echec", "Enregistrement echoué", "frown", 'bottomRight')
            }
        }
        else {
            this.openNotification("Echec", "Vous n'avez pas voulu vous authentifié par Google", "frown", 'bottomRight')
        }

    }
    selectAdress=(value)=>{
        value = value.toString();
        this.setState({
            address:value,
        })
    }

    render() {
        const { handle } = this.props.match.params;
            return(
                <div className="Auth">
                    <h1 className="titles"><strong>Yabana.ci</strong></h1>
                    <Fabe responseFaceBook={this.responseCallbackFacbook} choice={this.state.FaceBlogin}/>
                    <div className="container" ref={(contain)=> this.signinC = contain}>
                        <div className="form-container sign-up-container row">
                            <div className="col-md-12">
                                <form className="ForConnect" action="#">
                                    <h5>Créer un compte</h5>
                                    <div className="social-container">
                                        <div onClick={()=>this.changeFace()} className="social">
                                            <img src={require('../images/facebooklogo.png')} className="iconLog"/>
                                        </div>
                                        <div  className="social">
                                            <img src={require('../images/twitter-logo-1-1.png')} className="iconLog"/>
                                        </div>
                                        <GoogleLogin
                                            clientId="984756882079-sqchr6jjiiqcpt0hnuu3ue8hm9ftl7oh.apps.googleusercontent.com"
                                            render={renderProps => (
                                                <div onClick={renderProps.onClick} className="social">
                                                    <img src={require('../images/8ca486faebd822ddf4baf00321b16df1-google-icon-logo-by-vexels.png')} className="iconLog"/>
                                                </div>
                                            )}
                                            onSuccess={this.responseCallback}
                                            onFailure={this.responseCallback}
                                            cookiePolicy={'single_host_origin'}
                                        />

                                    </div>
                                    <span> <h5>ou utilisez votre email </h5></span>
                                    <div className="ParentInp">
                                        <input type="text" name="name"  onChange={this.onInputChange} className="form-control mb-2"
                                               placeholder="Votre nom"/>
                                        <input type="text" name="firstname" onChange={this.onInputChange} className="form-control mb-2"
                                               placeholder="Votre Prenom"/>
                                    </div>
                                    <div className="ParentInp">
                                        <input type="email" onChange={this.onInputChange} name="email"
                                               className="form-control mb-2" placeholder="Votre E-mail" />

                                        <input type="tel" maxLength={8} name="numero" onChange={this.onInputChange}
                                               className="form-control mb-2"
                                               placeholder="Votre Numero" />
                                    </div>
                                    <div className="ParentInp">
                                        <input type="password" id="defaultLoginFormPasswords" name="password" onChange={this.onInputChange}
                                               className="form-control mb-2" placeholder="Creer un mot de passe" />
                                        <input type="password" id="defaultLoginFormPasswors"
                                               className="form-control mb-2" name="confirm" onChange={this.onInputChange}
                                               placeholder="Entrez le mot de passe à nouveau" />
                                    </div>
                                    <div className="ParentInp">
                                        <Cascader onChange={this.selectAdress} placeholder="Adresse (Ville,commune et quartier si possible" options={types.residences} />
                                    </div>
                                    <button type="submit" onClick={this.signinOfServe} className="btn-rounded">S'inscrire</button>
                                </form>
                            </div>
                        </div>
                        <div className="form-container sign-in-container">
                            <form className="ForInsc" action="#">
                                <h5 >Identifiez-vous</h5>
                                <div className="social-container">
                                    <div onClick={()=>this.changeFace()} className="social">
                                            <img src={require('../images/facebooklogo.png')} className="iconLog"/>
                                        </div>
                                    <div  className="social">
                                            <img src={require('../images/twitter-logo-1-1.png')} className="iconLog"/>
                                        </div>
                                    <GoogleLogin
                                        clientId="984756882079-sqchr6jjiiqcpt0hnuu3ue8hm9ftl7oh.apps.googleusercontent.com"
                                        render={renderProps => (
                                            <div onClick={renderProps.onClick} className="social">
                                                <img src={require('../images/8ca486faebd822ddf4baf00321b16df1-google-icon-logo-by-vexels.png')} className="iconLog"/>
                                            </div>
                                        )}
                                        onSuccess={this.responseCallback}
                                        onFailure={this.responseCallback}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                </div>
                                <span> <h5>ou utilisez votre compte</h5></span>
                                <input type="text" id="defaultLoginFormEmail" name="user" onChange={this.onInputChange} className="form-control mb-4"
                                       placeholder="E-mail ou numero"/>

                                <input type="password" id="defaultLoginFormPassword" name="pass" onChange={this.onInputChange} className="form-control mb-4"
                                       placeholder="Mot de passe"/>

                                <div className="d-flex justify-content-around" style={{marginBottom: 20+"px"}}>
                                    <div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="defaultLoginFormRemember"/>
                                            <label className="custom-control-label"
                                                   htmlFor="defaultLoginFormRemember">Garder la session</label>
                                        </div>
                                    </div>
                                    <div style={{marginLeft: 12+"px"}}>
                                        <a href="">mot de passe oublié?</a>
                                    </div>
                                </div>
                                <button type="submit" onClick={(e)=>{this.connectOfServe(e)}} className="btn-rounded">Se connecter</button>
                            </form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h5>Nous saluons votre retour!</h5>
                                    <p>Pour rester en contact avec nous, veuillez vous connecter avec vos informations
                                        personnelles.</p>
                                    <button className="ghost" onClick={(e)=>{this._connect(this.signinC,e)}}>Se connecter</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1>Salut !</h1>
                                    <p>Entrez vos informations personnelles et commencez a profité de nos articles</p>
                                    <button type="submit" className="ghost" onClick={(e)=>{this._signin(this.signinC,e)}}>S'inscrire</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
    }
}
