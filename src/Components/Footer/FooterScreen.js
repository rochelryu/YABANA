import React from 'react'
import {Icon} from "antd";
import './Footer.css';

const Locate = ()=>(
    <svg  version="1.1" id="Capa_1" x="0px"
         y="0px" viewBox="0 0 52 52"  width="21px"
         height="21px"><g><path d="M38.853,5.324L38.853,5.324c-7.098-7.098-18.607-7.098-25.706,0h0  C6.751,11.72,6.031,23.763,11.459,31L26,52l14.541-21C45.969,23.763,45.249,11.72,38.853,5.324z M26.177,24c-3.314,0-6-2.686-6-6  s2.686-6,6-6s6,2.686,6,6S29.491,24,26.177,24z" data-original="#1081E0" className="active-path" data-old_color="#1081E0" fill="#D06F1A"/></g> </svg>)
const LocateIcon = props => <Icon component={Locate} {...props} />;
class FooterScreen extends React.Component{
    render() {
        return(
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Yabana<span>logo</span></h3>

                    <p className="footer-company-name">YABANA &copy; {new Date().getFullYear()}</p>
                </div>

                <div className="footer-center">

                    <div>
                        <LocateIcon />
                        <p><span>Cocody Nouveau CHU</span> Abidjan, Côte d'Ivoire (CI)</p>
                    </div>

                    <div>
                        <Icon type="phone" theme="twoTone" twoToneColor="#d06f1a" />
                        <p>+225 48 80 33 77</p>
                    </div>

                    <div>
                        <Icon type="mail" theme="twoTone" twoToneColor="#d06f1a" />
                        <p><a href="mailto:support@company.com">yabana@nan.ci</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>A propos</span>
                        YABANA a une expertise dans les articles de maison tel que les meubles de luxe. Du petit Accésoir au grand Article.
                    </p>

                    <div className="footer-icons">

                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>

                    </div>

                </div>

            </footer>
        )
    }

}
export default  FooterScreen