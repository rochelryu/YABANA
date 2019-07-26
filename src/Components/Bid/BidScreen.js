import React from 'react'
import './BidScreen.css'
import {Link} from "react-router-dom";
import {Icon} from "antd";
import {nextStep, prevStep} from "../Universal/utils";

class BidScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            jr:0,
            hr:0,
            min:0,
            sec:0
        }
        this.disconect = ""
        this.countDown = this.countDown.bind(this);
    }
    componentDidMount() {
        this.disconect = setInterval(()=>{
            this.countDown("2019-07-28T13:09:25.154Z")
        },1000)
    }
//"2019-07-22T13:09:25.154Z"
    countDown(date){
        let momes = new Date(date).getTime() / 1000;
        let moment = new Date() / 1000;
        if(parseInt((momes-moment)/86400,10) >=0 && parseInt(((momes-moment)%86400)/3600,10) >=0 && parseInt(((momes-moment)%86400)%3600/60,10) >=0 && parseInt(((momes-moment)%86400)%3600%60,10) >=0){
            this.setState({
                jr:parseInt((momes-moment)/86400,10),
                hr:parseInt(((momes-moment)%86400)/3600,10),
                min:parseInt(((momes-moment)%86400)%3600/60,10),
                sec:parseInt(((momes-moment)%86400)%3600%60,10)
            })
        }
        else{
            clearInterval(this.disconect);
        }
    }
    componentWillUnmount() {
        clearInterval(this.disconect)
    }

    render() {
        return(
            <div className="Enchere">
                <section className="hero-banner">
                    <div className="container">
                        <div className="row no-gutters align-items-center pt-60px">

                            <div className="col-5 col-sm-12 d-none d-sm-block">
                                <div className="curentBid">
                            <span>
                                <Icon type="usergroup-delete" style={{marginLeft:5}}/>
                                13
                            </span>
                                    <span className="oldPrice">
                                135.000 F cfa
                                    </span>
                                    <span className="newPrice">
                                300.000 F cfa
                                    </span>
                                </div>
                                <div className="colored"></div>
                                <div className="hero-banner__img">
                                    <img className="img-fluid" src={'https://www.ikea.com/PIAimages/0443267_PE594242_S5.JPG'} alt="profil" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-6 offset-lg-1 pl-4 pl-md-5 pl-lg-0">
                                <div className="hero-banner__content">
                                    <h4>Product Name</h4>
                                    <h1>Product catalog_name ainsi que type_name</h1>
                                    <p>product benefit_lit</p>
                                    <Link className="button-hero" to={"enchered/"+24}>Pariciper</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="exclusive-deal-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 no-padding exclusive-left">
                                <div className="row clock_sec clockdiv" id="clockdiv">
                                    <div className="col-lg-12">
                                        <h1>Exclusive Hot Deal Ends Soon!</h1>
                                        <p>Who are in extremely love with eco friendly system.</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="row clock-wrap">
                                            <div className="col clockinner1 clockinner">
                                                <h1 className="days">{this.state.jr}</h1>
                                                <span className="smalltext">Jour</span>
                                            </div>
                                            <div className="col clockinner clockinner1">
                                                <h1 className="hours">{this.state.hr}</h1>
                                                <span className="smalltext">Heures</span>
                                            </div>
                                            <div className="col clockinner clockinner1">
                                                <h1 className="minutes">{this.state.min}</h1>
                                                <span className="smalltext">Mins</span>
                                            </div>
                                            <div className="col clockinner clockinner1">
                                                <h1 className="seconds">{this.state.sec}</h1>
                                                <span className="smalltext">Secs</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span href="" className="primary-btn">TEMPS AVANT LA FIN</span>
                            </div>
                            <div className="col-lg-6 no-padding exclusive-right">
                                <span onClick={()=>{prevStep(this.UlConcerne)}} className="prevs">
                                    Precedant
                                </span>
                                <span onClick={()=>{nextStep(this.UlConcerne)}} className="nexts">
                                    Suivant
                                </span>
                                <ul className="active-exclusive-product-slider" ref={(ul)=>this.UlConcerne = ul}>
                                    <li className="single-exclusive-slider">
                                        <img className="img-fluid" src={'https://www.ikea.com/PIAimages/0443267_PE594242_S5.JPG'} alt="profil" />
                                            <div className="product-details">
                                                <div className="price">
                                                    <h6>250.000 F cfa</h6>
                                                    <h6 className="l-through">210.000 F cfa</h6>
                                                </div>
                                                <h6>addidas New Hammer sole
                                                    for Sports person</h6>
                                                <div
                                                    className="add-bag d-flex align-items-center justify-content-center">
                                                    <Link to={"/enchered/"+1} className="add-btn" href=""><span className="ti-bag"><Icon type="usergroup-add" /></span></Link>
                                                    <Link to={"/enchered/"+1} ><span className="add-text text-uppercase">Participer</span></Link>
                                                </div>
                                            </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="related-product-area section_gap_bottom">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <div className="section-title">
                                    <h1>Ils Sont déjà Lancé</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row space">
                            <div className="col-lg-9">
                                <div className="row">
                                   
                                    
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src={require('../images/client5.jpg')} alt=""/></a>
                                            <div className="desc">
                                                <a href="#" className="title">Ryu</a>
                                                <div className="price">
                                                    <h6>191.000 F cfa</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src={require('../images/client7.jpg')} alt=""/></a>
                                            <div className="desc">
                                                <a href="#" className="title">Rochel</a>
                                                <div className="price">
                                                    <h6>190.000 F cfa</h6>
                                                    <h6 className="l-through">150.000 F cfa</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src={require('../images/client4.jpg')} alt=""/></a>
                                            <div className="desc">
                                                <a href="#" className="title">Kira Hl</a>
                                                <div className="price">
                                                    <h6>175.000 F cfa</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="ctg-right">
                                    <a href="#" target="_blank">
                                        <img className="img-fluid d-block mx-auto" src={'https://www.ikea.com/PIAimages/0443267_PE594242_S5.JPG'} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row space2">
                            <div className="col-lg-3">
                                <div className="ctg-right">
                                    <a href="#" target="_blank">
                                        <img className="img-fluid d-block mx-auto" src={'https://www.ikea.com/PIAimages/0443267_PE594242_S5.JPG'} alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src={require('../images/client1.jpg')} alt=""/></a>
                                            <div className="desc">
                                                <a href="#" className="title">Franck Musah</a>
                                                <div className="price">
                                                    <h6>281.000 F cfa</h6>
                                                    <h6 className="l-through">201.000 F cfa</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src={require('../images/client7.jpg')} alt=""/></a>
                                            <div className="desc">
                                                <a href="#" className="title">Rochel</a>
                                                <div className="price">
                                                    <h6>190.000 F cfa</h6>
                                                    <h6 className="l-through">150.000 F cfa</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src={require('../images/client4.jpg')} alt=""/></a>
                                            <div className="desc">
                                                <a href="#" className="title">Kira Hl</a>
                                                <div className="price">
                                                    <h6>175.000 F cfa</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row space">
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src={require('../images/client1.jpg')} alt=""/></a>
                                            <div className="desc">
                                                <a href="#" className="title">Franck Musah</a>
                                                <div className="price">
                                                    <h6>281.000 F cfa</h6>
                                                    <h6 className="l-through">201.000 F cfa</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src={require('../images/client7.jpg')} alt=""/></a>
                                            <div className="desc">
                                                <a href="#" className="title">Rochel</a>
                                                <div className="price">
                                                    <h6>190.000 F cfa</h6>
                                                    <h6 className="l-through">150.000 F cfa</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src={require('../images/client4.jpg')} alt=""/></a>
                                            <div className="desc">
                                                <a href="#" className="title">Kira Hl</a>
                                                <div className="price">
                                                    <h6>175.000 F cfa</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="ctg-right">
                                    <a href="#" target="_blank">
                                        <img className="img-fluid d-block mx-auto" src={'https://www.ikea.com/PIAimages/0443267_PE594242_S5.JPG'} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row space2">
                            <div className="col-lg-3">
                                <div className="ctg-right">
                                    <a href="#" target="_blank">
                                        <img className="img-fluid d-block mx-auto" src={'https://www.ikea.com/PIAimages/0443267_PE594242_S5.JPG'} alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src={require('../images/client1.jpg')} alt=""/></a>
                                            <div className="desc">
                                                <a href="#" className="title">Franck Musah</a>
                                                <div className="price">
                                                    <h6>281.000 F cfa</h6>
                                                    <h6 className="l-through">201.000 F cfa</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src={require('../images/client2.jpg')} alt=""/></a>
                                            <div className="desc">
                                                <a href="#" className="title">Meda</a>
                                                <div className="price">
                                                    <h6>275.000 F cfa</h6>
                                                    <h6 className="l-through">201.000 F cfa</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src={require('../images/client3.jpg')} alt=""/></a>
                                            <div className="desc">
                                                <a href="#" className="title">Cesar</a>
                                                <div className="price">
                                                    <h6>201.000 F cfa</h6>
                                                    <h6 className="l-through">181.000 F cfa</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default BidScreen