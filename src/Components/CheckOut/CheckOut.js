
import React from 'react';
import {Row, Col, Input, Tooltip, Icon, Select, Checkbox, Radio, InputNumber, DatePicker} from 'antd';
import './checkOut.css';
import jwt from 'jwt-decode';
import PaymentCard from 'react-payment-card-component';
import TotalItem from '../Pannier/TotalItem';
import * as types from "../../Constants/YabaConstant";
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {connect} from "react-redux";



const { Option } = Select;

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const selectAfter = (
    <Select defaultValue=".com" style={{ width: 80 }}>
        <Option value=".com">.com</Option>
        <Option value=".jp">.fr</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
    </Select>
);

const View = (props)=>{
    if(props.choice === 5){
        return null
    }
    else if(props.choice === 1){
        return(
            <div className="paiement">
                <PaymentCard
                    bank="yabana"
                    model="personnalite"
                    type="blue"
                    brand="visa"
                    number={props.cardNumber}
                    cvv={props.cvc}
                    holderName={props.name}
                    expiration={props.date}
                    flipped={props.fliping}
                />
            </div>
        )
    }
    else if(props.choice === 2){

        return(
            <div className="paiement">
                <PaymentCard
                    bank="yabana"
                    model="personnalite"
                    type="black"
                    brand="mastercard"
                    number={props.cardNumber}
                    cvv={props.cvc}
                    holderName={props.name}
                    expiration={props.date}
                    flipped={props.fliping}
                />
            </div>
        )
    }
    else{
        return null
    }
}

class CheckOut extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            value: 1,
            email:"",
            adresse:"",
            numero:0,
            choice:0,
            name:"",
            cardNumber:"",
            fliping:false,
            date:"",
            cvc:""
        };
        this.name = jwt(localStorage.getItem("authToken")).user.name + ' ' +jwt(localStorage.getItem("authToken")).user.firstname
    }

    componentDidMount() {
        const ele = jwt(localStorage.getItem("authToken")).user
        this.setState({
            email:ele.email,
            numero: (ele.numero)? ele.numero:0,
            adresse:ele.address,
        })

    }
    handleDateChange = (date) =>{
       const month =  new Date(date._d).getMonth();
       const years =  new Date(date._d).getFullYear();
       this.setState({
           date:month+'/'+years.toString().substring(years.toString().length -2,years.toString().length)
       })
    }

    onChange = e => {
        if(e.target.name === "cvc"){
            this.setState({
                fliping:true,
                [e.target.name]: e.target.value,
            });
        }
        else {
            this.setState({
                fliping:false,
                [e.target.name]: e.target.value,
            });
        }
    };
    onCheck = e => {
        this.setState({
            [e.target.name]: e.target.checked,
        });
    };
    onChangeNumber(ele){
        this.setState({
            numero:parseInt(ele,10)
        })
    }
    command=()=>{
        this.props.history('/404');
}
    render(){
        const {sommeByu} = this.props;
        return(
            <div>
                <div className="pan_2" style={{position:"absolute", top:"50%", left:"9%"}} >
                    <TotalItem ele={sommeByu} hide={1} command={this.command}/>
                </div>
            <div className="check">
                <div className="check-form">
                    <Row>
                        <Col className="gutter-row" span={11} offset={1}>
                            <div className="gutter-box">
                                <Input
                                    prefix={<Icon type="users" theme="twoTone" twoToneColor="#d06f1a" />}
                                    suffix={
                                        <Tooltip title="Valider Votre Commande">
                                            <Icon type="info-circle" style={{ color: 'rgb(255, 136, 0)' }} />
                                        </Tooltip>
                                    }
                                    disabled={true} value={this.name} onChange={this.onChange} />
                            </div>
                        </Col>
                        <Col className="gutter-row" span={11} offset={1}>
                            <div className="gutter-box">
                                <Input
                                    placeholder="Votre Email"
                                    prefix={<Icon type="mail" theme="twoTone" twoToneColor="#d06f1a" />}
                                    value={this.state.email} name="email" allowClear onChange={this.onChange}
                                />
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>

                    </Row>
                    <br/>
                    <Row>
                        <Col className="gutter-row" span={11} offset={1}>
                            <div className="gutter-box">
                                <div>
                                    <div>
                                        <InputNumber prefix={<Icon type="call" theme="twoTone" twoToneColor="#d06f1a" />} style={{width:200}} placeholder="votre contact" value={parseInt(this.state.numero,10)} name="numero" onChange={value => this.onChangeNumber(value)}/>

                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={11} offset={1}>
                            <div className="gutter-box">
                                <div>
                                    <div>
                                        <Input prefix={<Icon type="contact" theme="twoTone" twoToneColor="#d06f1a" />} placeholder="Lieu de Livrage" value={this.state.adresse} name="adresse" allowClear onChange={this.onChange}/>

                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>

                    <div className="check-info">
                        <div className="checkbox">

                            <Checkbox name="autoSave" onChange={this.onCheck}>
                                Sauvegarder cette information pour la prochaine fois
                            </Checkbox>

                        </div>
                        <hr/>
                        <div className="pay">
                            <Row>
                                <Col className="gutter-row" span={5} offset={1}>
                                    <div className="gutter-box">
                                        <Radio.Group onChange={this.onChange} name="choice" >
                                            <Radio value={1}>Carte Visa</Radio>
                                            <Radio value={2}>Carte MasterCard</Radio>
                                            <Radio value={3}>Pay Pal</Radio>
                                            <Radio value={4}>FLOOZ</Radio>
                                            <Radio value={5}>MTN MOBILE MONEY</Radio>
                                            <Radio value={6}>ORANGE MONEY</Radio>
                                        </Radio.Group>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={14} offset={3}>
                                    <View cvc={this.state.cvc} choice={this.state.choice} name={this.state.name} fliping={this.state.fliping} date={this.state.date} cardNumber={this.state.cardNumber} />
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col className="gutter-row" span={11} offset={1}>
                                    <div className="gutter-box">
                                        <Input placeholder="Nom sur la carte" name="name"  allowClear onChange={this.onChange} />
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={11} offset={1}>
                                    <div className="gutter-box">
                                        <Input placeholder="Numéro de carte de credit" name="cardNumber" maxLength={16}  allowClear onChange={this.onChange}/>
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col className="gutter-row" span={7} offset={1}>
                                    <MonthPicker onChange={this.handleDateChange} placeholder="MM/AA" />
                                    {/*<div className="gutter-box">
                                        <Input placeholder="Expiration" name="date" allowClear onChange={this.onChange}/>
                                    </div>*/}
                                </Col>
                                <Col className="gutter-row" span={5} offset={1}>
                                    <div className="gutter-box">
                                        <Input placeholder="CVC" maxLength={4} name="cvc" allowClear onChange={this.onChange}/>
                                    </div>
                                </Col>


                            </Row>
                            <br/>
                            <Row>
                                <Col className="gutter-row" span={23} offset={1}>
                                    <div className="gutter-box">
                                        <button className="button-check">Valider</button>
                                    </div>
                                </Col>
                            </Row>


                        </div>

                    </div>

                </div>

            </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        sommeByu: state.pannier.sommeByu,
    }
}
export default connect(mapStateToProps)(CheckOut)