import React from "react";
import '../Universal/boot1.css';
import '../Universal/boot3.css';

export default class ValidScreen extends React.Component {

    state = {
        formActivePanel1: 1,
        formActivePanel1Changed: false,
    }

    swapFormActive = (a) => (param) => (e) => {
        this.setState({
            ['formActivePanel' + a]: param,
            ['formActivePanel' + a + 'Changed']: true
        });
    }

    handleNextPrevClick = (a) => (param) => (e) => {
        this.setState({
            ['formActivePanel' + a]: param,
            ['formActivePanel' + a + 'Changed']: true
        });
    }

    handleSubmission = () => {
        alert('Form submitted!');
    }

    calculateAutofocus = (a) => {
        if (this.state['formActivePanel' + a + 'Changed']) {
            return true
        }
    }

    render() {
        return (
            <div>
            </div>
        );
    };
};
