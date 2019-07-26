import React from 'react';
import HeaderScreen from './Components/Header/HeaderScreen';
import PannierScreen from './Components/Pannier/PannierScreen';
import HomeScreen from './Components/HomeScreen';
import ValidScreen from './Components/Validation/ValidScreen';
import DetailScreen from './Components/Details/DetailScreen';
import ProductScreen from './Components/Product/ProductScreen';
import BidScreen from './Components/Bid/BidScreen';

import NotFoundScreen from './Components/notFound/NotFoundScreen';
import AuthScreen from './Components/Auth/AuthScreen';
import WebFont from 'webfontloader';
import CheckOut from './Components/CheckOut/CheckOut';
import SearcScreen from './Components/Search/SearcScreen';
import { createBrowserHistory } from 'history';

import './App.css'



import {
  Router,
  Route,
  Link, Switch, Redirect
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import ProfilUserScreen from "./Components/ProfilUser/ProfilUserScreen";
const history = createBrowserHistory();

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700','Merriweather', 'sans-serif']
  }
});

const PrivateRoute = ({component:Component, ...rest}) =>(
    <Route {...rest} render={props => localStorage.getItem("authToken") ? (<Component {...props}/>) :
        (<Redirect to={{pathname:'/auth',state:{from:props.location}}}/>)}/>);
/*const PrivateAuth = ({component:Component, ...rest}) =>(
    <Route {...rest} render={props => localStorage.getItem("authToken") ?
        props.history.goBack() : (<Component {...props}/>)}/>);*/
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      actu:[],
      i : 1,
      searchText:true
    };
  }
  scrolling = ()=>{
    console.log("scrool")
}


  tooGle = () => {
    const ele = this.state.searchText
    this.setState({
      searchText: !ele
    })
  }

  render() {
    const pp = (this.state.searchText) ? {paddingLeft:150}:{paddingLeft:80}
    const theme = (6 <= new Date().getHours() && new Date().getHours() <= 18) ? "content" : "contentNight";
    const who = (6 <= new Date().getHours() && new Date().getHours() <= 18) ? "woocommerce" : "woocommerce veille";
    return (
        <Router history={history}>
        <div className={who} style={pp} onScroll={()=>this.scrolling}>
          <HeaderScreen Link={Link} toogleBord={this.tooGle} />
          <Route render={({location})=>(
              <TransitionGroup>
                <CSSTransition key={location.key} timeout={300} classNames="my-node">
                  <div className={theme}>
                    <Switch location={location}>
                      <Route exact path="/" component={HomeScreen} />
                      <Route path="/pannier" component={PannierScreen} />
                      <Route path="/auth/:handle" component={AuthScreen} />
                      <Route path="/auth" component={AuthScreen} />
                      <Route path="/details/:handle" component={DetailScreen} />
                      <Route path="/catalog/:handle" component={ProductScreen} />
                      <Route path="/valid" component={ValidScreen} />
                      <Route path="/checkout" component={CheckOut} />
                      <Route path="/search" component={SearcScreen} />
                      <Route path="/Enchere" component={BidScreen} />
                      <PrivateRoute path="/profil" component={ProfilUserScreen} />
                      <Route path="/404" component={NotFoundScreen} />
                      <Route component={NotFoundScreen} />

                    </Switch>

                  </div>
                </CSSTransition>
              </TransitionGroup>
          )}/>

        </div>
        </Router>
  );
  }


}

export default App;
