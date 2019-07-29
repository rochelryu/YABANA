import React from 'react';
import {Modal} from "antd";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    RedditShareButton,
    EmailShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    LineShareButton,
    WeiboShareButton,
    PocketShareButton,
    InstapaperShareButton,

    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    TelegramIcon,
    WhatsappIcon,
    RedditIcon,
    TumblrIcon,
    MailruIcon,
    EmailIcon,
    LivejournalIcon,
    ViberIcon,
    WorkplaceIcon,
    LineIcon,
    PocketIcon,
    InstapaperIcon,
} from 'react-share';

export default class ModalShare extends React.Component{
    render() {
        let {visible,handleOk,links, ele} = this.props;
        return(
            <Modal
                title="Partager Avec Vos Amis n'importe qu'elle produit et n'importe où"
                visible={visible}
                onOk={handleOk}
                onCancel={handleOk}
            >
                <div className="contentSocial">
                    <ul>
                        <li> <WhatsappShareButton
                            url={"http://localhost:3000/"+links}
                            title={ele.name + " | " + ele.catalog_name + ' | ' +ele.type_name}
                            className="Demo__some-network__share-button">
                            <WhatsappIcon
                                size={32}
                                round />
                        </WhatsappShareButton>
                        </li>
                        <li>
                            <FacebookShareButton
                                url={"http://localhost:3000/"+links}
                                quote={ele.name + " | " + ele.catalog_name + ' | ' +ele.type_name}
                                className="Demo__some-network__share-button">
                                <FacebookIcon
                                    size={32}
                                    round />
                            </FacebookShareButton>
                        </li>
                        <li>
                            <TwitterShareButton
                                url={"http://localhost:3000/"+links}
                                title={ele.name + " | " + ele.catalog_name + ' | ' +ele.type_name}
                                className="Demo__some-network__share-button">
                                <TwitterIcon
                                    size={32}
                                    round />
                            </TwitterShareButton>
                        </li>
                        <li>
                            <LinkedinShareButton
                                url={"http://localhost:3000/"+links}
                                quote={ele.name + " | " + ele.catalog_name + ' | ' +ele.type_name}
                                title={ele.name + " | " + ele.catalog_name + ' | ' +ele.type_name}
                                windowWidth={750}
                                windowHeight={600}
                                className="Demo__some-network__share-button">
                                <LinkedinIcon
                                    size={32}
                                    round />
                            </LinkedinShareButton>
                        </li>
                        <li>
                            <TelegramShareButton
                                url={"http://localhost:3000/"+links}
                                title={ele.name + " | " + ele.catalog_name + ' | ' +ele.type_name}
                                className="Demo__some-network__share-button">
                                <TelegramIcon
                                    size={32}
                                    round />
                            </TelegramShareButton>
                        </li>
                        <li>
                            <PinterestShareButton
                                url={String("http://localhost:3000/"+links)}
                                quote={ele.name + " | " + ele.catalog_name + ' | ' +ele.type_name}
                                windowWidth={1000}
                                windowHeight={730}
                                className="Demo__some-network__share-button">
                                <PinterestIcon
                                    size={32}
                                    round />
                            </PinterestShareButton>
                        </li>
                        <li>
                            <EmailShareButton
                                url={"http://localhost:3000/"+links}
                                quote={ele.name + " | " + ele.catalog_name + ' | ' +ele.type_name}
                                className="Demo__some-network__share-button">
                                <EmailIcon
                                    size={32}
                                    round />
                            </EmailShareButton>
                        </li>
                        <li>
                            <ViberShareButton
                                url={"http://localhost:3000/"+links}
                                title={ele.name + " | " + ele.catalog_name + ' | ' +ele.type_name}
                                className="Demo__some-network__share-button">
                                <ViberIcon
                                    size={32}
                                    round />
                            </ViberShareButton>
                        </li>
                        <li>
                            <LineShareButton
                                url={"http://localhost:3000/"+links}
                                title={ele.name + " | " + ele.catalog_name + ' | ' +ele.type_name}
                                className="Demo__some-network__share-button">
                                <LineIcon
                                    size={32}
                                    round />
                            </LineShareButton>
                        </li>
                        <li>
                            <PocketShareButton
                                url={"http://localhost:3000/"+links}
                                title={ele.name + " | " + ele.catalog_name + ' | ' +ele.type_name}
                                className="Demo__some-network__share-button">
                                <PocketIcon
                                    size={32}
                                    round />
                            </PocketShareButton>
                        </li>
                    </ul>
                </div>
            </Modal>
        )
    }
}