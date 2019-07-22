import React from 'react';
import logo from '../images/logo1.png';
import './header.css'
import { Menu, Icon, Badge } from 'antd';
import {Link} from "react-router-dom";
import * as types from "../../Constants/YabaConstant";
import {connect} from "react-redux";
const Canape = () =>(<svg width="20" height="20" viewBox="0 0 60 43"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="023---Packing-Furniture" fill="#88898b" fill-rule="nonzero"><path d="M22,25 C21.4477153,25 21,25.4477153 21,26 L21,27 C21,27.5522847 21.4477153,28 22,28 C22.5522847,28 23,27.5522847 23,27 L23,26 C23,25.4477153 22.5522847,25 22,25 Z" id="Shape"/><path d="M55,27 L55,26 C55,25.4477153 54.5522847,25 54,25 C53.4477153,25 53,25.4477153 53,26 L53,27 C53,27.5522847 53.4477153,28 54,28 C54.5522847,28 55,27.5522847 55,27 Z" id="Shape"/><path d="M30,19 C30.5522847,19 31,18.5522847 31,18 L31,17 C31,16.4477153 30.5522847,16 30,16 C29.4477153,16 29,16.4477153 29,17 L29,18 C29,18.5522847 29.4477153,19 30,19 Z" id="Shape"/><path d="M46,19 C46.5522847,19 47,18.5522847 47,18 L47,17 C47,16.4477153 46.5522847,16 46,16 C45.4477153,16 45,16.4477153 45,17 L45,18 C45,18.5522847 45.4477153,19 46,19 Z" id="Shape"/><path d="M59,41 L56,41 L56,31.661 C58.7706494,30.6858555 60.426497,27.8466548 59.911,24.955 C59.4950333,22.5555404 57.6644684,20.6486196 55.284,20.135 C55.19,20.115 55.095,20.107 55,20.091 L55,17 C54.9950401,12.5837781 51.4162219,9.00495988 47,9 L29,9 C24.5837781,9.00495988 21.0049599,12.5837781 21,17 L21,20.093 C18.4781533,20.5082105 16.5026166,22.4865642 16.091,25.009 C16.06,25.009 16.031,25 16,25 L15,25 L15,23 C15,21.8954305 14.1045695,21 13,21 L10,21 L10,14 L12,14 L12,17 C12,17.5522847 12.4477153,18 13,18 C13.5522847,18 14,17.5522847 14,17 L14,14 L15.41,14 C15.8509082,13.999846 16.2694194,13.8057174 16.5543069,13.4692072 C16.8391945,13.132697 16.9616029,12.6878895 16.889,12.253 L15.056,1.253 C14.9353147,0.530097962 14.3099067,0.000255992201 13.577,0 L4.423,0 C3.6900933,0.000255992201 3.06468527,0.530097962 2.944,1.253 L1.111,12.253 C1.03839709,12.6878895 1.1608055,13.132697 1.44569307,13.4692072 C1.73058064,13.8057174 2.14909183,13.999846 2.59,14 L8,14 L8,21 L5,21 C3.8954305,21 3,21.8954305 3,23 L3,25 L2,25 C0.8954305,25 1.3527075e-16,25.8954305 0,27 L0,41 C1.3527075e-16,42.1045695 0.8954305,43 2,43 L31,43 C31.5522847,43 32,42.5522847 32,42 C32,41.4477153 31.5522847,41 31,41 L28,41 L28,39 L48,39 L48,41 L45,41 C44.4477153,41 44,41.4477153 44,42 C44,42.5522847 44.4477153,43 45,43 L59,43 C59.5522847,43 60,42.5522847 60,42 C60,41.4477153 59.5522847,41 59,41 Z M4.847,2 L13.153,2 L14.819,12 L3.181,12 L4.847,2 Z M29,11 L37,11 L37,19 C37,19.5522847 37.4477153,20 38,20 C38.5522847,20 39,19.5522847 39,19 L39,11 L47,11 C50.3123376,11.0033074 52.9966926,13.6876624 53,17 L53,20.094 C50.1112198,20.5713678 47.9941513,23.0720491 48,26 L48,27 L42,27 C40.4200479,27.0044337 38.9358543,27.758033 38,29.031 C37.0641457,27.758033 35.5799521,27.0044337 34,27 L28,27 L28,26.217 C28.0253159,23.2372109 25.924257,20.6621531 23,20.089 L23,17 C23.0033074,13.6876624 25.6876624,11.0033074 29,11 Z M28,33 L28,29 L34,29 C35.6568542,29 37,30.3431458 37,32 L37,33 L28,33 Z M39,32 C39,30.3431458 40.3431458,29 42,29 L48,29 L48,33 L39,33 L39,32 Z M5,23 L13,23 L13,25 L5,25 L5,23 Z M7,27 L11,27 L11,30.131 L9.555,29.168 C9.21896313,28.9438005 8.78103687,28.9438005 8.445,29.168 L7,30.131 L7,27 Z M15,41 L2,41 L2,27 L5,27 L5,32 C4.99994479,32.3688869 5.20297845,32.707846 5.52823496,32.881874 C5.85349147,33.0559019 6.24814134,33.0367322 6.555,32.832 L9,31.2 L11.445,32.83 C11.7515602,33.034534 12.14577,33.0538804 12.4708844,32.8803466 C12.7959988,32.7068129 12.9993185,32.368528 13,32 L13,27 L16,27 L16,41 L15,41 Z M18,41 L18,30.447 C18.5797991,30.9794956 19.2596298,31.3914731 20,31.659 L20,41 L18,41 Z M22,41 L22,30.9 C22.0005727,30.4243558 21.6660347,30.0141286 21.2,29.919 C19.7242127,29.6166261 18.5434657,28.5107497 18.1451999,27.0579033 C17.7469342,25.605057 18.198701,24.0516629 19.314,23.039 C20.0469903,22.3674931 21.0059253,21.9965573 22,22 C22.133589,21.9997637 22.2671008,22.0064393 22.4,22.02 C24.494147,22.2995405 26.0440295,24.1077368 26,26.22 L26,41 L22,41 Z M28,37 L28,35 L48,35 L48,37 L28,37 Z M49.9999968,41 L50,26 C49.998485,24.7939588 50.5429698,23.6520481 51.481,22.894 C52.188459,22.3135567 53.0759009,21.9974718 53.991,22 L54,22 C54.2937108,22.0007369 54.5865733,22.0315645 54.874,22.092 C56.7201011,22.4996736 58.028684,24.1441924 58.0112935,26.0346909 C57.9939029,27.9251894 56.6552884,29.5453568 54.802,29.919 C54.3359653,30.0141286 54.0014273,30.4243558 54.002,30.9 L54.002,41 L49.9999968,41 Z" id="Shape"/></g></g></svg>)
const Stove = ()=>(<svg version="1.1" width="20" height="20" id="Capa_1" x="0px" y="0px"
viewBox="0 0 412 412">
    <g fill="#88898b">
    <path d="M328.567,121.545h-303c-4.143,0-7.5,3.358-7.5,7.5V404.5c0,4.142,3.357,7.5,7.5,7.5h303c4.143,0,7.5-3.358,7.5-7.5V129.045
C336.067,124.903,332.71,121.545,328.567,121.545z M321.067,397h-288V136.545h288V397z"/>
<path d="M51.965,385.603h250.204c4.143,0,7.5-3.358,7.5-7.5V155.443c0-4.142-3.357-7.5-7.5-7.5H51.965c-4.143,0-7.5,3.358-7.5,7.5
v222.659C44.465,382.245,47.822,385.603,51.965,385.603z M59.465,162.943h235.204v207.659H59.465V162.943z"/>
<path d="M259.703,224.841H94.431c-4.143,0-7.5,3.358-7.5,7.5v101c0,4.142,3.357,7.5,7.5,7.5h165.272c4.143,0,7.5-3.358,7.5-7.5
v-101C267.203,228.199,263.846,224.841,259.703,224.841z M252.203,325.841H101.931v-86h150.272V325.841z"/>
<path d="M281.34,176.636c-4.143,0-7.5,3.358-7.5,7.5v9.716H87.181v-9.716c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v17.216
c0,4.142,3.357,7.5,7.5,7.5H281.34c4.143,0,7.5-3.358,7.5-7.5v-17.216C288.84,179.994,285.482,176.636,281.34,176.636z"/>
<path d="M27.194,35.659h5.125V95.16c0,11.491,9.349,20.84,20.84,20.84h83.502c11.491,0,20.84-9.349,20.84-20.84V35.659h5.125
c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-62.512V7.5c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v13.159h-57.92
c-4.143,0-7.5,3.358-7.5,7.5S23.052,35.659,27.194,35.659z M142.501,35.659V95.16c0,3.22-2.62,5.84-5.84,5.84H53.159
c-3.22,0-5.84-2.62-5.84-5.84V35.659H142.501z"/>
<path d="M386.433,70.688H202.797c-2.287,0-4.448,1.043-5.871,2.833c-1.423,1.791-1.951,4.132-1.436,6.36l7.024,30.312
c0.788,3.399,3.816,5.807,7.307,5.807h96.132c3.489,0,6.519-2.407,7.307-5.807l5.68-24.505h67.493c4.143,0,7.5-3.358,7.5-7.5
S390.575,70.688,386.433,70.688z M299.992,101h-84.21l-3.549-15.312h91.308L299.992,101z"/>
<path d="M128.37,274.847h97.394c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5H128.37c-4.143,0-7.5,3.358-7.5,7.5
S124.228,274.847,128.37,274.847z"/>
<path d="M128.37,305.835h97.394c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5H128.37c-4.143,0-7.5,3.358-7.5,7.5
S124.228,305.835,128.37,305.835z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>)
const Encher = ()=>(<svg version="1.1" id="Capa" width="20" height="20"  x="0px" y="0px"
                         viewBox="0 0 485.656 485.656">
<g>
	<g fill="#88898b">
		<g>
			<path d="M301.656,306.88h-16v-8c0-8.837-7.163-16-16-16h-16v-72.408c57.267-4.418,100.11-54.424,95.692-111.692
				C344.93,41.513,294.923-1.329,237.656,3.089c-57.267,4.418-100.11,54.424-95.692,111.692
				c3.944,51.126,44.566,91.747,95.692,95.692v72.408h-24c-2.122,0-4.156,0.844-5.656,2.344l-66.344,66.344v-4.688
				c0-4.418-3.582-8-8-8h-16v-8c0-4.418-3.582-8-8-8h-16v-16.408c43.961-4.418,76.017-43.638,71.599-87.599
				s-43.638-76.017-87.599-71.599c-43.961,4.418-76.017,43.638-71.599,87.599c3.805,37.855,33.744,67.794,71.599,71.599v16.408h-32
				c-2.122,0-4.156,0.844-5.656,2.344l-40,40l11.312,11.312l37.656-37.656h52.688v32h-16v-16h-16v68.688L40,453.224
				c-1.5,1.5-2.344,3.534-2.344,5.656v16c0,4.418,3.582,8,8,8h128c2.122,0,4.156-0.844,5.656-2.344l29.656-29.656h92.688
				c13.255,0,24-10.745,24-24v-96C325.656,317.626,314.911,306.88,301.656,306.88z M21.656,226.88c0-35.346,28.654-64,64-64
				s64,28.654,64,64c0,35.346-28.654,64-64,64C50.326,290.841,21.696,262.21,21.656,226.88z M157.656,106.88
				c0-48.601,39.399-88,88-88s88,39.399,88,88s-39.399,88-88,88C197.079,194.823,157.713,155.458,157.656,106.88z M117.656,354.88h8
				v12.688l-8,8V354.88z M85.656,386.88h20.688l-20.688,20.688V386.88z M170.344,466.88H53.656v-4.688l80-80l60.688,60.688
				L170.344,466.88z M237.656,434.88h-28.688l-64-64l72-72h52.688v72h-16v-32h-16V434.88z M309.656,426.88c0,4.418-3.582,8-8,8h-48
				v-16h56V426.88z M309.656,402.88h-56v-16h56V402.88z M309.656,370.88h-24v-16h24V370.88z M309.656,338.88h-24v-16h16
				c4.418,0,8,3.582,8,8V338.88z"/>
            <path d="M288,53.224l-74.344,74.344l-26.344-26.344L176,112.536l32,32c3.124,3.123,8.188,3.123,11.312,0l80-80L288,53.224z"/>
            <path d="M437.656,330.88h-24v-16.408c40.853-4.154,71.948-38.528,72-79.592c0.004-44.183-35.81-80.003-79.993-80.007
				c-44.183-0.004-80.003,35.81-80.007,79.993c-0.004,41.088,31.118,75.497,72,79.606v16.408c-8.837,0-16,7.163-16,16v8h-16
				c-13.255,0-24,10.745-24,24v104h16v-16h56v16h16v-112h-16v16h-16v-40h36.688L472,384.536l11.312-11.312l-40-40
				C441.812,331.724,439.778,330.881,437.656,330.88z M357.656,378.88c0-4.418,3.582-8,8-8h16v16h-24V378.88z M413.656,450.88h-56
				v-16h56V450.88z M413.656,402.88v16h-56v-16H413.656z M341.656,234.88c0-35.346,28.654-64,64-64c35.346,0,64,28.654,64,64
				c0,35.346-28.654,64-64,64C370.326,298.841,341.696,270.21,341.656,234.88z"/>
            <path d="M381.656,247.568l-18.344-18.344L352,240.536l24,24c3.124,3.123,8.188,3.123,11.312,0l60-60L436,193.224L381.656,247.568
				z"/>
            <path d="M61.656,239.568l-18.344-18.344L32,232.536l24,24c3.124,3.123,8.188,3.123,11.312,0l60-60L116,185.224L61.656,239.568z"
            />
		</g>
	</g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
    <g>
</g>
</svg>)
const CanapeIcon = props => <Icon component={Canape} {...props} />;
const StoveIcon = props => <Icon component={Stove} {...props} />;
const EncherIcon = props => <Icon component={Encher} {...props} />;

const { SubMenu } = Menu;

class HeaderScreen extends React.Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.props.toogleBord();
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const theme = (6 <= new Date().getHours() && new Date().getHours() <= 18) ? "ligth" : "dark";
        const bg = (6 <= new Date().getHours() && new Date().getHours() <= 18) ? "#fff" : "#001529";
        const { pannierProduct } = this.props;
        return (
            <div style={{position:"fixed", bottom:0,left:0, backgroundColor:bg, top:0, zIndex:999999}}>
                <input type="checkbox" id="h-icon" className="toggle"/>
                <label onClick={this.toggleCollapsed} htmlFor="h-icon" className="hamburger">
                    <span className="hamburger__line hamburger__line--top"></span>
                    <span className="hamburger__line hamburger__line--middle"></span>
                    <span className="hamburger__line hamburger__line--bottom"></span>
                </label>
                <Menu
                    mode="vertical"
                    theme={theme}
                    inlineCollapsed={this.state.collapsed}
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                <CanapeIcon />
                <span>Mobilier</span>
              </span>
                        }
                    >
                        <Menu.Item key="10"><Link to="/catalog/1">Armoires,penderie et dressing</Link></Menu.Item>
                        <Menu.Item key="11"><Link to="/catalog/2">Lits</Link></Menu.Item>
                        <Menu.Item key="12"><Link to="/catalog/3">Canapés et fauteuils</Link></Menu.Item>
                        <Menu.Item key="13"><Link to="/catalog/4">Bufets et consoles</Link></Menu.Item>
                        <Menu.Item key="54"><Link to="/catalog/5">Chaises</Link></Menu.Item>
                        <Menu.Item key="55"><Link to="/catalog/12">Tables et bureau</Link></Menu.Item>
                        <Menu.Item key="15"><Link to="/catalog/6">Meubles tv</Link></Menu.Item>
                        <Menu.Item key="16"><Link to="/catalog/7">Bibliotheque et étagère</Link></Menu.Item>
                        <Menu.Item key="17"><Link to="/catalog/8">Café et restaurant</Link></Menu.Item>
                        <Menu.Item key="18"><Link to="/catalog/9">Jardin, bureau et salon</Link></Menu.Item>
                        <Menu.Item key="19"><Link to="/catalog/10">Dessertes et îlots</Link></Menu.Item>
                        <Menu.Item key="20"><Link to="/catalog/11">Commodes et caisson à tiroirs</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
               <StoveIcon style={{ fontSize: 12 }} />
                <span>Cuisine</span>
              </span>
                        }
                    >
                        <Menu.Item key="1"><Link to="/catalog/12">Meubles de cuisine</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/catalog/13">Cuisines complètes</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/catalog/14">Electromenagers</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/catalog/15">Plan de travail</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/catalog/16">Aménagement Interieur</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/catalog/17">Rangement muraux</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/catalog/18">Eclairage intégré de cuisine</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={
                            <span>
               <Icon type="laptop" />
                <span>Eletronique</span>
              </span>
                        }
                    >
                        <Menu.Item key="21"><Link to="/catalog/19">Tablettes</Link></Menu.Item>
                        <Menu.Item key="25"><Link to="/catalog/20">Sécurité &amp; Protection</Link></Menu.Item>
                        <Menu.Item key="23"><Link to="/catalog/21">Périphérique de stockage</Link></Menu.Item>
                        <Menu.Item key="24"><Link to="/catalog/22">Réseau &amp; stockages</Link></Menu.Item>
                        <Menu.Item key="25"><Link to="/catalog/23">Electronique de bureau</Link></Menu.Item>
                        <Menu.Item key="26"><Link to="/catalog/24">Accessoire pour portable</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={
                            <span>
               <Icon type="sketch" />
                <span>Bijoux</span>
              </span>
                        }
                    >
                        <Menu.Item key="31"><Link to="/catalog/25">Bijouterie Fine</Link></Menu.Item>
                        <Menu.Item key="32"><Link to="/catalog/26">Mariages &amp; fiançailles</Link></Menu.Item>
                        <Menu.Item key="33"><Link to="/catalog/27">Montres femme</Link></Menu.Item>
                        <Menu.Item key="34"><Link to="/catalog/28">Montres homme</Link></Menu.Item>
                        <Menu.Item key="35"><Link to="/catalog/29">Aménagement Interieur</Link></Menu.Item>
                        <Menu.Item key="36"><Link to="/catalog/30">Perles et bilouterie artisanale</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="40">
                        <Link to="/">
                            <Icon type="home" />
                            <span>Accueil</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="38">
                        <Link to="/profil">
                            <Icon type="user" />
                            <span>Profil <Badge
                                count={pannierProduct.length}
                                style={{ backgroundColor: '#ff991b', color: '#ff991b',border:"none", marginLeft:15 }}
                            /></span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="39">
                        <Link to="/search">
                            <Icon type="search" />
                            <span>Recherche</span>
                        </Link>

                    </Menu.Item>
                    <Menu.Item key="45">
                        <Link to="/Enchere">
                            <EncherIcon style={{ fontSize: 12 }} />

                            <span>Enchère</span>
                        </Link>

                    </Menu.Item>
                </Menu>
                <div className="footerHeader">
                    <img src={logo} className="logoHeader" alt=""/>
                </div>
            </div>
        );
    }
}

/*
import '../Universal/boot1.css';
//import '../Universal/boot2.css';
import '../Universal/boot3.css';
import './header.css';


export default class HeaderScreen extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const {Link, search} = this.props;

        return (
            <header>

                <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
                    {/!*<div id="info"><span>INFO</span><marquee behavior="" direction="vertical" width="80%">30% De reduction sur nos meubles à 3 places</marquee>
                    </div>*!/}
                    <div className="menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="sidebar">
                        <div className="accordion md-accordion" id="accordionEx1" role="tablist" aria-multiselectable="true">
                            <img src="images/chambre1.jpg" alt="" style={{width:"100%"}} />

                                <hr className="mb-0" />

                                    <div className="card">

                                        <div className="card-header" role="tab" id="headingTwo1">
                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseTwo1"
                                               aria-expanded="false" aria-controls="collapseTwo1">
                                                <h5 className="mb-0">
                                                    Meuble <i className="fas fa-angle-down rotate-icon"></i>
                                                </h5>
                                            </a>
                                        </div>
                                        <div id="collapseTwo1" className="collapse" role="tabpanel" aria-labelledby="headingTwo1"
                                             data-parent="#accordionEx1">
                                            <div className="card-body">
                                                <div className="custom-scrollbar">
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">
                                                            <a href="#" >Chambre à coucher</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#">Salon</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#">Sale a manger</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#">Chambre bébé et enfant</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#">Bureau</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#">Cuisine</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#">Sale de bain</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#">Jardin, terasse et balcon</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#" >Buanderie</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="card">

                                        <div className="card-header" role="tab" id="headingTwo1">
                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseTwo1"
                                               aria-expanded="false" aria-controls="collapseTwo1">
                                                <h5 className="mb-0">
                                                    Meuble <i className="fas fa-angle-down rotate-icon"></i>
                                                </h5>
                                            </a>
                                        </div>

                                        <div id="collapseTwo1" className="collapse" role="tabpanel" aria-labelledby="headingTwo1"
                                             data-parent="#accordionEx1">
                                            <div className="card-body">
                                                <div className="custom-scrollbar">
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">
                                                            <a href="#" >Chambre à coucher</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#">Salon</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#">Sale a manger</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#">Chambre bébé et enfant</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#">Bureau</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#">Cuisine</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#">Sale de bain</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#">Jardin, terasse et balcon</a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <a href="#" >Buanderie</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>

                                    </div>


                                    <div className="card">

                                        <div className="card-header" role="tab" id="headingTwo2">
                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseTwo21"
                                               aria-expanded="false" aria-controls="collapseTwo21">
                                                <h5 className="mb-0">
                                                    Collapsible Group Item #2 <i className="fas fa-angle-down rotate-icon"></i>
                                                </h5>
                                            </a>
                                        </div>

                                        <div id="collapseTwo21" className="collapse" role="tabpanel" aria-labelledby="headingTwo21"
                                             data-parent="#accordionEx1">
                                            <div className="card-body">

                                            </div>
                                        </div>

                                    </div>

                                    <hr className="mb-0" />

                                        <div className="card">

                                            <div className="card-header" role="tab" id="headingThree31">
                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseThree31"
                                                   aria-expanded="false" aria-controls="collapseThree31">
                                                    <h5 className="mb-0">
                                                        Collapsible Group Item #3 <i className="fas fa-angle-down rotate-icon"></i>
                                                    </h5>
                                                </a>
                                            </div>

                                            <div id="collapseThree31" className="collapse" role="tabpanel" aria-labelledby="headingThree31"
                                                 data-parent="#accordionEx1">
                                                <div className="card-body">

                                                </div>
                                            </div>

                                        </div>
                                    <hr className="mb-0" />
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
                        <section className="container">
                            <input className="search_bar" id="search_bar"
                                   onKeyUp={(e)=>{search(e.target.value);
                                       /!*console.log("Focus window.screenTop ")
                            let beg = document.getElementsByClassName('containerss')[0].clientHeight;
                                       window.scrollX = beg;
                                       console.log(window.screenTop)*!/
                                   }

                                   }
                                   name="search_bar"
                                   type="search"
                                   placeholder="Givenchy, Jeans, Spider-man"/>
                        </section>
                        <nav id="dl-menu" className="dl-menuwrapper nav-main">
                            <Link to="/profil">
                                <span><img src={require('../images/user.png')} style={{position: "absolute", right:5,top:17, zIndex:99999,width:30 }} /></span>
                            </Link>
                            <button className="dl-trigger nav-handle">Menu</button>
                            <ul className="dl-menu nav-main-list">
                                <li className="nav-main-item">
                                    <a href="#">Mobilier</a>
                                    <ul className="dl-submenu nav-sub-list">
                                        <li className="nav-sub-item">
                                            <Link to="/catalog/1">Armoires,penderie et dressing</Link>
                                        </li>
                                        <li className="nav-sub-item">
                                            <Link to="/catalog/2">Lits</Link>
                                        </li>
                                        <li className="nav-sub-item">
                                            <Link to="/catalog/3">Canapés et fauteuils</Link>
                                        </li>
                                        <li className="nav-sub-item">
                                            <Link to="/catalog/4">Bufets et consoles</Link>
                                        </li>
                                        <li className="nav-sub-item">
                                            <Link to="/catalog/5">Chaises & Tables et bureau</Link>
                                        </li>
                                        <li className="nav-sub-item">
                                            <Link to="/catalog/6">Meubles tv</Link>
                                        </li>
                                        <li className="nav-sub-item">
                                            <Link to="/catalog/7">Bibliotheque et étagère</Link>
                                        </li>
                                        <li className="nav-sub-item">
                                            <Link to="/catalog/8">Café et restaurant</Link>
                                        </li>
                                        <li className="nav-sub-item">
                                            <Link to="/catalog/9">Jardin, bureau et salon</Link>
                                        </li>
                                        <li className="nav-sub-item">
                                            <Link to="/catalog/10">Dessertes et îlots</Link>
                                        </li>
                                        <li className="nav-sub-item">
                                            <Link to="/catalog/11">Commodes et caisson à tiroirs</Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a href="#">Ordinateur &amp; reseau</a>
                                    <ul className="dl-submenu nav-sub-list">
                                        <li className="nav-sub-item"><Link to="/">Tablettes</Link></li>
                                        <li className="nav-sub-item"><a href="#">Sécurité &amp; Protection</a></li>
                                        <li className="nav-sub-item"><a href="#">Périphérique de stockage</a></li>
                                        <li className="nav-sub-item"><a href="#">Réseau &amp; stockages</a></li>
                                        <li className="nav-sub-item"><a href="#">Electronique de bureau</a></li>
                                        <li className="nav-sub-item"><a href="#">Accessoire pour portable</a></li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a href="#">Cuisines</a>
                                    <ul className="dl-submenu nav-sub-list">
                                        <li className="nav-sub-item"><a href="#">Meubles de cuisine</a></li>
                                        <li className="nav-sub-item"><a href="#">Cuisines complètes</a></li>
                                        <li className="nav-sub-item"><a href="#">Electromenagers</a></li>
                                        <li className="nav-sub-item"><a href="#">Plan de travail</a></li>
                                        <li className="nav-sub-item"><a href="#">Aménagement Interieur</a></li>
                                        <li className="nav-sub-item"><a href="#">Rangement muraux</a></li>
                                        <li className="nav-sub-item"><a href="#">Eclairage intégré de cuisine</a></li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a href="#">Bijoux &amp; montres </a>
                                    <ul className="dl-submenu nav-sub-list">
                                        <li className="nav-sub-item"><a href="#">Bijouterie Fine</a></li>
                                        <li className="nav-sub-item"><a href="#">Bijoux à la mode</a></li>
                                        <li className="nav-sub-item"><a href="#">Mariages &amp; fiançailles</a></li>
                                        <li className="nav-sub-item"><a href="#">Montres femme</a></li>
                                        <li className="nav-sub-item"><a href="#">Montres homme</a></li>
                                        <li className="nav-sub-item"><a href="#">Perles et bilouterie artisanale</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </nav>
                </div>

            </nav>
    </header>
        );
    }
}
*/
const mapStateToProps = state =>{
    return {
        pannierProduct: state.pannier.pannierProduct,
    }
}

export default connect(mapStateToProps)(HeaderScreen)