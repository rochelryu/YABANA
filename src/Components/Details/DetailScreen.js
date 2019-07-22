import React from 'react';
import LoaderScreen from '../Loader/LoaderScreen';
import "react-image-gallery/styles/css/image-gallery.css";
import {Fab} from "@material-ui/core";
import "./Details.css";
import ImageGallery from 'react-image-gallery';
import {details} from '../../ServiceWorker/Helper';
import { InputNumber, Tabs, Radio, Icon } from 'antd';
import { withRouter } from "react-router-dom";




const { TabPane } = Tabs;
class DetailScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isReady:false,
            info:"",
            mountant:0,
            value:1,
            mode: 'top',
        }
        this.fake = 0;
    }



    async componentDidMount() {
        let {handle} = this.props.match.params;
        const handles = handle + '/' + this.props.location.search;
        let data = await details(handles);
        if(data.info){
            for(let i in data.info.image){
                data.info.image[i] = {
                    original: data.info.image[i].img,
                    thumbnail: data.info.image[i].img,
                }
            }
            this.setState({
                info:data.info,
                isReady:true,
                mountant:Math.floor(parseInt(data.info.price, 10) * 655)
            })
        }
    }
    ratting(note){
        return parseInt(note, 10)
    }
    calcul(price){

        this.fake = Math.floor(parseInt(price, 10) * 655);
        return this.fake;
    }
    handleModeChange = e => {
        const mode = e.target.value;
        this.setState({ mode });
    };

    onChangeQuantity = (value, price)=>{
        this.setState({
            mountant:value*price,
            value
        })
    }
    achat = ()=>{
        console.log(this.state.info, this.state.value)
        localStorage.getItem('authToken')? this.props.history.push('/checkout'):this.props.history.push('/auth/final');
    }

    render() {
        if(this.state.isReady){
            const { mode } = this.state;
            return(
                <div>
                    <div className="detailsBlock">
                        <div className="galle">
                            <ImageGallery items={this.state.info.image} />
                        </div>
                        <div className="single_product_desc">
                            <div className="product-meta-data">
                                <div className="line"></div>
                                <p className="product-price">{this.calcul(this.state.info.price)} Fcfa</p>
                                    <h6 className="product-name">{this.state.info.title}</h6>
                                <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                                    <div className="ratings">
                                        <Icon type="star" theme="twoTone" twoToneColor="#fbb710"/> <span style={{marginLeft:2, marginTop:10}}>{this.state.info.rating}</span>
                                    </div>
                                    {/*<div className="review">
                                        <a href="#">Write A Review</a>
                                    </div>*/}
                                </div>
                                <p className="avaibility"><Icon type="check" theme="twoTone" twoToneColor="#2d3" /> En Stock</p>
                            </div>

                            <div className="short_overview">
                                <p>{this.state.info.desc}</p>
                            </div>
                            <div>
                                <ul className="Achat">
                                    <li>
                                        <span>Quantité</span>
                                    </li>
                                    <li>
                                        <InputNumber min={1} defaultValue={1} onChange={(value)=>this.onChangeQuantity(value,this.fake)}/>
                                    </li>
                                    <li>
                                        <span>Montant à payer <InputNumber min={1} disabled={true} value={this.state.mountant} /></span>
                                    </li>
                                    <li>
                                        <Fab onClick={this.achat} style={{backgroundColor: "#EB7D1D", color:"#fff"}} variant="extended" aria-label="Acheter">
                                            <Icon type="shopping" theme="twoTone" twoToneColor="#fff" />
                                            <p style={{color:"#fff", marginLeft:10,marginTop:10}}>Acheter</p>
                                        </Fab>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                                    <Radio.Button value="top">Horizontal</Radio.Button>
                                    <Radio.Button value="left">Vertical</Radio.Button>
                                </Radio.Group>
                                <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
                                    <TabPane tab={`Description`} key="1">
                                        <ul className="tabsInt">
                                            {this.state.info.description.map((val, i)=><li key={i +"dim"}>{val.value}</li>)}
                                        </ul>
                                    </TabPane>
                                    <TabPane tab={`Dimension`} key="2">
                                        <ul className="tabsInt">
                                            {this.state.info.dimension.map((val, i)=><li key={i+"dim"}>
                                                <span>{val.itemName}</span> : <span>{val.itemValue}</span>
                                            </li>)}
                                        </ul>
                                    </TabPane>
                                    <TabPane tab={`Conseil`} key="3">
                                        <ul className="tabsInt">
                                            {this.state.info.conseilEntretien.map((val, i)=><li key={i+"cons"}>{val}</li>)}
                                        </ul>
                                    </TabPane>
                                </Tabs>
                            </div>

                        </div>
                    </div>
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
export default withRouter(DetailScreen);