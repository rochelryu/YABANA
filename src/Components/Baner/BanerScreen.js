import React from 'react';
import './baner.css';
import { shiftLeft, shiftRight } from '../Universal/utils';

export default class BanerScreen extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        let { ele, AjoutPanier, voir } = this.props;

        return (
            <div className="containerss">
                <div className="abss"></div>
                <div className="button btnLeft" onClick={()=>shiftLeft()}><img src="../images/left-arrow.png" alt=""/></div>
                <div className="cards-wrapper">
                    <ul className="cards__container">
                        <li className="box" style={{background: "url('../images/demon-voiture-sale-moteur-dynamo-au-garage_41043-2638.jpg') center no-repeat"}}></li>
                        <li className="box" style={{background: "url('../images/femme-robe-verte-chapeau-fond-jaune_1303-10554.jpg') center no-repeat"}}></li>
                        <li className="box" style={{background: "url('../images/homme-travaillant-ordinateur-portable-dans-paysage-pittoresque_23-2148155063.jpg') center no-repeat"}}></li>
                        <li className="box" style={{background: "url('..images/3d-rendu-interieur-chambre-moderne-cadre-photo-vierge_1048-6464.jpg') center no-repeat"}}></li>
                        <li className="box" style={{background: "url('../images/chambre1.jpg') center no-repeat"}}></li>
                        <li className="box box--hide" style={{background: "url('../images/gadgets electroniques.jpg') center no-repeat"}}></li>
                        <li className="box box--hide" style={{background: "url('../images/maquette-cadres-dans-salon_23-2147968613.jpg') center no-repeat"}}></li>
                    </ul>
                    <div className="card__text-content">
                        <h3 className="card__title">Yabana</h3>
                        <div className="card__summary"> L'Immobilier, notre Affaire</div>
                    </div>
                </div>
                <div className="button btnRight" onClick={()=>shiftRight()}><img src="images/next%20(1).png" alt=""/></div>
            </div>
        );
    }
}
