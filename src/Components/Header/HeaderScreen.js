import React from 'react';
import logo from '../../logo.svg';
import '../Universal/boot1.css';
//import '../Universal/boot2.css';
import '../Universal/boot3.css';
import './header.css';

export default class HeaderScreen extends React.Component {
    render() {

        return (
            <header>

                <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
                    <div className="menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="sidebar">
                        <div className="accordion md-accordion" id="accordionEx1" role="tablist" aria-multiselectable="true">
                            <img src="images/chambre1.jpg" alt="" style={{width:"100%"}} />

                                <hr className="mb-0"/>

                                    <div className="card" >

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

                                    <hr className="mb-0"/>

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

                                        <hr className="mb-0"/>

                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-7">


                        <section className="container">
                            <label for="search_bar">Rechercher</label>
                            <input className="search_bar" id="search_bar"
                                   onkeyup={function () {
                             window.screenTop = document.getElementsByclassName('containerss')[0].clientHeight;}}
                                   name="search_bar"
                                   type="search"
                                   placeholder="Givenchy, Jeans, Spider-man"/>
                        </section>
                        <nav id="dl-menu" className="dl-menuwrapper nav-main">
                            <button className="dl-trigger nav-handle">Menu</button>
                            <ul className="dl-menu nav-main-list">
                                <li className="nav-main-item">
                                    <a href="#">Immobilier</a>
                                    <ul className="dl-submenu nav-sub-list">
                                        <li className="nav-sub-item">
                                            <a href="#">Meuble</a>
                                        </li>
                                        <li className="nav-sub-item">
                                            <a href="#">Salle de Bain</a>
                                        </li>
                                        <li className="nav-sub-item">
                                            <a href="#">Mobilier & Accesoir Exterieur</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a href="#">Electromenager</a>
                                </li>
                                <li className="nav-main-item">
                                    <a href="#">Piéces Auto</a>
                                    <ul className="dl-submenu nav-sub-list">
                                        <li className="nav-sub-item">
                                            <a href="#">BMW</a>
                                            <ul className="dl-submenu nav-sub-sub">
                                                <li className="nav-sub-item"><a href="#">Pneux</a></li>
                                                <li className="nav-sub-item"><a href="#">Carosserie</a></li>
                                                <li className="nav-sub-item"><a href="#">Devanture</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-sub-item">
                                            <a href="#">MERCEDES</a>
                                            <ul className="dl-submenu nav-sub-sub">
                                                <li className="nav-sub-item"><a href="#">Pneux</a></li>
                                                <li className="nav-sub-item"><a href="#">Carosserie</a></li>
                                                <li className="nav-sub-item"><a href="#">Devanture</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a href="#">Accesoir Femme</a>
                                    <ul className="dl-submenu nav-sub-list">
                                        <li className="nav-sub-item"><a href="#">Robe</a></li>
                                        <li className="nav-sub-item"><a href="#">Jupe</a></li>
                                        <li className="nav-sub-item"><a href="#">Pantalon</a></li>
                                        <li className="nav-sub-item">
                                            <a href="#">T-shirt</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a href="#">Accesoir Homme</a>
                                    <ul className="dl-submenu nav-sub-list">
                                        <li className="nav-sub-item"><a href="#">Robe</a></li>
                                        <li className="nav-sub-item"><a href="#">Jupe</a></li>
                                        <li className="nav-sub-item"><a href="#">Pantalon</a></li>
                                        <li className="nav-sub-item">
                                            <a href="#">T-shirt</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a href="#">Accesoir Enfant</a>
                                    <ul className="dl-submenu nav-sub-list">
                                        <li className="nav-sub-item"><a href="#">Robe</a></li>
                                        <li className="nav-sub-item"><a href="#">Jupe</a></li>
                                        <li className="nav-sub-item"><a href="#">Pantalon</a></li>
                                        <li className="nav-sub-item">
                                            <a href="#">T-shirt</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    <div className="log mr-auto">
                        <ul>
                            <li>
                                <a href="#"><img src="images/shopping-bag .png" alt="" style={{height:30+"px",width:30+"px"}}/></a>
                            </li>
                            <li>
                                <a href="#"><img src="images/user.png" alt="" style={{height:30+"px",width:30+"px"}}/></a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
    </header>
        );
    }
}
