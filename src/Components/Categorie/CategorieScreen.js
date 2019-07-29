import React from 'react';
import {
    Link,

} from "react-router-dom";
import SousCategorieItem from './SousCategorieItem';
import '../Universal/boot1.css';
import '../Universal/boot3.css';

export default class CategorieScreen extends React.Component{

    render() {
        const {ele, share, compare} = this.props;
        return(
            <div>
            <section className="baner_01"
                       style={{background: 'url(' + ele.banner + ') center'}}>
                <div className="all">

                    <div className="title">
                        <h3>{ele.categoriesName}</h3>
                    </div>
                    <div className="sect">
                        <p className="detail">
                            {ele.subTitle}
                        </p>

                        <p>
                            <Link to={ele.link} className="link"> lire la suite</Link></p>
                    </div>

                </div>
        </section>
                <section className="sold">
                    {ele.subCategorie.map((item,index) => <SousCategorieItem shares={share} compare={compare} key={index} sousCate={item}/>)}
                </section>
            </div>

    )
    }
}
