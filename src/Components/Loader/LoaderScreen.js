import React from 'react';
import './Loader.css'





export default class LoaderScreen extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="lds-ellipsis centered">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}
