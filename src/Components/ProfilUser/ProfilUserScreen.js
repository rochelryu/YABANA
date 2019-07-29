import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link, Switch, Redirect
} from "react-router-dom";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

import NavBarProfil from './NavBarProfil';
import HomeProfil from './HomeProfil';
import Setting from '../Setting/Setting';
import PannierScreen from '../Pannier/PannierScreen';
import CheckOut from '../CheckOut/CheckOut';

class FakeTest extends React.Component{
    render() {
        return(
            <div className="centerOFFLEX">
                <p>FakeTTEST</p>
            </div>
        )
    }

}
class OufTest extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        localStorage.removeItem("authToken")
        return(<Redirect to={{pathname:'/'}}/>)
    }

}
const PrivateAuth = ({component:Component, ...rest}) =>(
    <Route {...rest} render={props => !localStorage.getItem("authToken") ?
        props.history.goBack() : (<Component {...props}/>)}/>);
export default class ProfilUserScreen extends React.Component{
    constructor(props){
        super(props)
        this.history = this.props.history;
    }

    render() {
        return (
            <Router history={this.history}>
                <div className="woocommerce2">
                    <NavBarProfil Link={Link} />
                    <Route render={({location})=>(
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={1000} classNames="my-nodes">
                                <div className="contentProfil">
                                    <Switch location={location}>
                                        <PrivateAuth exact path="/profil" component={HomeProfil} />
                                        <PrivateAuth path="/profil/beta" component={Setting} />
                                        <PrivateAuth path="/profil/meta" component={FakeTest} />
                                        <PrivateAuth path="/profil/pannier" component={PannierScreen} />
                                        <PrivateAuth path="/checkout" component={CheckOut} />
                                        <PrivateAuth path="/logout" component={OufTest} />
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