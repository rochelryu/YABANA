import React from 'react';
import './Settting.css';
import {Row, Col, Input, Cascader} from 'antd';
import jwt from "jwt-decode";
import * as types from "../../Constants/YabaConstant";


class Setting extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            firstname:"",
            numero:"",
            addresse:"",
            email:"",
        }
        this.info= jwt(localStorage.getItem("authToken")).user
    }
    componentDidMount() {
        this.setState({
            name:this.info.name,
            firstname:this.info.firstname,
            numero:this.info.numero,
            addresse:this.info.address,
            email:this.info.email,
        })
    }

    render(){
        return(
            <div className="setting">
                <div className="set">
                    <div className="set1">
                        <div className="avatar">
                            <div className="avatar-img">
                                <img src={require('../images/settings.png')} alt=""/>
                            </div>
                            <div className="change">
                                <p>Primaire</p>
                            </div>
                        </div>
                        <div className="form">
                        <Row>
                                <Col className="gutter-row" span={11} offset={1} xs={23} sm={23} md={11} lg={11} xl={11}>
                                    <div className="gutter-box">
                                        <Input placeholder="Nom" value={this.state.name} allowClear/>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={11} offset={1} xs={23} sm={23} md={11} lg={11} xl={11}>
                                    <div className="gutter-box">
                                        <Input placeholder="Prenom" value={this.state.firstname} allowClear/>
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col className="gutter-row" span={11} offset={1} xs={23} sm={23} md={11} lg={11} xl={11}>
                                    <div className="gutter-box">
                                        <Input placeholder="Contact" maxLength={8} value={this.state.numero} allowClear />
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={11} offset={1} xs={23} sm={23} md={11} lg={11} xl={11}>
                                    <div className="gutter-box">
                                        <Input placeholder="email" value={this.state.email} allowClear />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="gutter-row" span={11} offset={1}>
                                    <div className="gutter-box">
                                        <Cascader placeholder={this.state.addresse} options={types.residences} />
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={11} offset={1}>
                                    <button className="valide"> Valider</button>
                                </Col>
                            </Row>

                        </div>
                    </div>
                    <div className="set2">
                        <div className="avatar">
                            <div className="avatar-img">
                                <img src={require('../images/password.png')} alt=""/>
                            </div>
                            <div className="change">
                                <p>Secondaire</p>
                            </div>
                        </div>
                        <Row>
                            <Col className="gutter-row" span={23} offset={1}>
                                    <div className="gutter-box">
                                        <Input.Password placeholder="Ancien Mot de Passe" />
                                    </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col className="gutter-row" span={11} offset={1}>
                                    <div className="gutter-box">
                                        <Input.Password placeholder="Nouveau Mot de passe" />
                                    </div>
                            </Col>
                            <Col className="gutter-row" span={11} offset={1}>
                                    <div className="gutter-box">
                                        <Input.Password placeholder="Confirmer le Nouveau Mot de passe" />
                                    </div>
                            </Col>
                        </Row>
                        <br/>
                        <button className="valide"> Valider</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Setting;