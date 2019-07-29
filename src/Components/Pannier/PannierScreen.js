import React from 'react';
import '../Universal/boot1.css';
import '../Universal/boot3.css';
import { diminue, augmente } from '../Universal/utils';
import {Link} from "react-router-dom";
import ItemPannier from './ItemPannier';
import TotalItem from './TotalItem';
import LoaderScreen from '../Loader/LoaderScreen';
import { message } from 'antd';
import * as types from "../../Constants/YabaConstant";
import {connect} from "react-redux";


class PannierScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            focus:[],
            isReady:false,
            somm:0,
        }
            this.calculate = this.calculate.bind(this)

    }
    async componentDidMount() {
        const pane = this.props.pannierProduct
        await this.setState({
            focus :pane,
             isReady:true
            })
        this.calculate();
    }
    calculate(all){
        var solde = 0
        for(let i in all){
            solde = solde + (parseInt(all[i].item.price,10)*all[i].qty);
            continue;
        }
        this.setState({
            somm:solde
        })
    }
    command = ()=>{
        this.props.history.push('/checkout')
    }
    augmenteSelf = (ele, product)=>{
        this.props.augmentPannier(product)
    }
    diminueSelf = (ele, product)=>{
        this.props.diminuePannier(product)
    }

    remove = (ele)=>{
        this.props.removePannier(ele)
        this.calculate();
        message.success('Article Supprimé');
}

    render() {
        if(this.state.isReady) {
            const {pannierProduct, sommeByu} = this.props;
            return (
                <section id="pannier">
                    <div className="pan_1">
                        {pannierProduct.map((num, index) => <ItemPannier remove={this.remove} key={index} ele={num} diminue={this.diminueSelf} augmente={this.augmenteSelf}/>)}
                    </div>
                    <div className="pan_2">
                        <TotalItem ele={sommeByu} hide={0} command={this.command}/>
                    </div>

                </section>
            )
        }
        else{
            return (
                <LoaderScreen/>
            )
        }
    }
}

const mapStateToProps = state =>{
    return {
        pannierProduct: state.pannier.pannierProduct,
        sommeByu: state.pannier.sommeByu,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        removePannier:(item)=>{
            dispatch({type:types.REMOVE_PANNIER, item:item})
        },
        augmentPannier:(item)=>{
            dispatch({type:types.AUGMENTE_PANNIER, item:item})
        },
        diminuePannier:(item)=>{
            dispatch({type:types.DIMINUE_PANNIER, item:item})
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PannierScreen)