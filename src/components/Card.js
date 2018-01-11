import React, { Component } from 'react';

export default class Card extends Component {
    state = {
        text: 'Hello from card'
    }
    componentDidMount() {
        let body = document.getElementsByTagName('body')[0];
        body.addEventListener('click', (event) => {
            if(!!event.target.dataset.element) {
                this.setState({
                    text: 'Hello from drawer'
                })
            }
            else {
                this.setState({
                    text: 'Hello from card'
                })
            }
        })
    }
    render() {
        console.log('card ', this.card);
        return (
            <div data-element="card" className="wrapper anotherClass" ref={(card) => {this.card = card}}>
                {this.state.text}
            </div>
        );
    }
}