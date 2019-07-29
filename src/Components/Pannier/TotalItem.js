import React from 'react';
import '../Universal/boot1.css';
import '../Universal/boot3.css';
import {Link} from "react-router-dom";
const PayVisible = (props)=>{
    if(props.hide === 0){
        return(( <div className="card-action">
            <button onClick={()=>{props.command()}}>Commander</button>
        </div>))
    }
    else return null
}
export default class TotalItem extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        const {ele, command, hide} = this.props
        return(
            <div className="interieur">
                <div className="card-product z-depth-2">

                    <div className="card-header">
                        <h3>TOTAL</h3>
                        <div className="rel rele">
                            <ul className="validationLeft">
                                <li>Sous-total</li>
                                <li>Livraison</li>
                                <li>Prix Total</li>
                            </ul>
                            <ul className="validationRigth">
                                <li><span>{ele}</span> F cfa</li>
                                <li>Gratuite</li>
                                <li><span>{ele}</span> F cfa</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-body">
                        <section>
                            <h2 className="product-desc">YABANA</h2>
                        </section>
                        <PayVisible hide={hide} command={command}/>
                    </div>
                </div>
            </div>
        )
    }
}