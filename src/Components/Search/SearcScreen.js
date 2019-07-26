import React from 'react'
import './Search.css'
//import Dictaphone from './Speech'
import {Icon, Input, AutoComplete, Select, notification} from 'antd';
import {Fab} from "@material-ui/core";
import {searchItem} from "../../ServiceWorker/Helper"
import ProductItemThree from "../Product/ProductItemThree";

const { Option } = AutoComplete;
function onSelect(value) {
    console.log('onSelect', value);
}
const SelectBefore = (props)=>(<Select onChange={value => props.choiceCat(value)} placeholder="choisir une Categorie" style={{ width: 120 }}>
    <Option value={1}>Mobilier</Option>
    <Option value={2}>Cuisine</Option>
    <Option value={3}>Electronique</Option>
    <Option value={4}>Bijoux</Option>
</Select>);


function renderOption(item) {
    return (
        <Option key={item.category} text={item.category}>
            <div className="global-search-item">
        <span className="global-search-item-desc">
          Found {item.query} on
          <a
              href={`https://s.taobao.com/search?q=${item.query}`}
              target="_blank"
              rel="noopener noreferrer"
          >
            {item.category}
          </a>
        </span>
                <span className="global-search-item-count">{item.count} results</span>
            </div>
        </Option>
    );
}


class SearcScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dataSource: [],
            result: [],
            lunch:false,
            cat:0,
            searchText:"",
            searchEnv:false,
        }
        this.search = this.search.bind(this);
    }
    handleSearch = value => {
            this.setState({
                dataSource: [],
                searchText:value
            });
    };
    handleInput = (e)=>{
        console.log(e)
        // this.setState({
        //     searchText:e.target.value
        // })
    }
    openNotification(err, descr, img, pos){
        notification.open({
            message: err,
            description: descr,
            placement:pos,
            icon: <Icon type={img} theme="twoTone" twoToneColor="#d06f1a" />,
        });
    };
    async search(){
        if(this.state.searchText.length >2 && this.state.cat !== 0){
            this.setState({
                lunch:true,
                searchEnv:true
            });
            let searchData = await searchItem(this.state.searchText,this.state.cat);
            console.log(searchData)
            if(searchData.status && !searchData.all.message){
                if (searchData.all.length > 3){
                    this.setState({
                        lunch:false,
                        searchEnv:false,
                        result:searchData.all
                    });
                }
                else{
                    this.setState({
                        lunch:false,
                        searchEnv:false
                    });
                    this.openNotification("404", "Veillez Demander quelque chose sur laquel on peut vous donner un resultat","close-circle", "bottomRight");
                }
            }
            else {
                this.openNotification("404", "Veillez Demander quelque chose sur laquel on peut vous donner un resultat","close-circle", "bottomRight");
            }
        }
        else{
            this.openNotification("Mauvaise Saisie", "Veillez mieux decrire ce que vous voulez chercher","frown", "bottomRight");
        }
    }
    choiceCat = (cat)=>{
        this.setState({
            cat:cat
        });
    }
    compare = (ele)=>{
        console.log(ele)
    }

    render() {
     const { dataSource } = this.state;
        return(

            <div className="fluid-container">

                <main className="home">
                    <div className="logo"></div>
{/*
                    <Dictaphone/>
*/}
                    <AutoComplete
                    className="global-search"
                    size="large"
                    style={{ width: '100%' }}
                    dataSource={dataSource.map(renderOption)}
                    onSelect={onSelect}
                    onSearch={this.handleSearch}
                    optionLabelProp="text"
                    disabled={this.state.searchEnv}
                >
                        <Input addonBefore={<SelectBefore choiceCat={this.choiceCat} />} className="search" type="text"  placeholder={"Qu'est-ce que vous voulez"}  addonAfter={this.state.lunch ? <Icon type="loading" />:null}/>
                        </AutoComplete>
                    <div className="boutonSearch">
                        <Fab style={{backgroundColor:"#d06f1a"}} onClick={this.search} aria-label="Add" >
                            <Icon type="search"  />
                        </Fab>
                    </div>
                </main>
                 <div className="container p-5">
                     <div className="row">
                         {this.state.result.map((value,index)=><ProductItemThree key={index} compare={this.compare} product={value}/>)}
                     </div>
                </div>
            </div>
        )
    }
    /*render() {
        const { dataSource } = this.state;
        return (
            <div className="global-search-wrapper" style={{ width: 300 }}>
                <AutoComplete
                    className="global-search"
                    size="large"
                    style={{ width: '100%' }}
                    dataSource={dataSource.map(renderOption)}
                    onSelect={onSelect}
                    onSearch={this.handleSearch}
                    placeholder="input here"
                    optionLabelProp="text"
                >
                    <Input
                        suffix={
                            <Button
                                className="search-btn"
                                style={{ marginRight: -12 }}
                                size="large"
                                type="primary"
                            >
                                <Icon type="search" />
                            </Button>
                        }
                    />
                </AutoComplete>
            </div>)
    }*/
}
export default SearcScreen;