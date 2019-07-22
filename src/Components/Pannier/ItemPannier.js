import React from 'react';
import '../Universal/boot1.css';
import '../Universal/boot3.css';
import {Fab} from '@material-ui/core'
import {Icon} from 'antd'
export default class ItemPannier extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const {ele, diminue, augmente, remove} = this.props;
        return(
            <div className="item">
                <div className="prodcont">

                    <div className="prodtitle">
                        <span className="proddel">{ele.item.type_name}</span>
                        <div className="titlesec">
                            <div>
                                <div className="prodleftdetails"><h1>{ele.item.name}</h1><span className="prodsize">{parseInt(ele.item.price,10) * ele.qty} F cfa</span>
                                </div>
                                <div className="prodrightdetails"><span className="prodqty">+{ele.qty}</span>
                                    <span className="none">{parseInt(ele.item.price,10)}</span></div>
                            </div>
                            <span ref={(span)=>this.augment = span} onClick={()=>{augmente(this.augment, ele.item)}} className="prod-addtocard"><img
                                src={require("../images/icon/plus.png")} alt=""/></span>
                            <span ref={(span)=>this.diminu = span} onClick={()=>{diminue(this.diminu,ele.item)}} className="prod-addtocardM"><img
                                src={require("../images/icon/minus.png")} alt=""/></span>
                        </div>
                    </div>

                    <div className="imgcont"><img src={ele.item.profil} alt="product"/></div>
                    <div className="prodshade">
                    </div>
                    <div className="abs">
                        <Fab onClick={()=>remove(ele.item)} style={{backgroundColor: "#d07325"}} variant="extended" aria-label="Acheter">
                            <Icon type="delete" theme="twoTone" twoToneColor="#ddd" />
                        </Fab>
                    </div>

                </div>
            </div>
        )
    }
}
