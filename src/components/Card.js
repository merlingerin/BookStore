import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

export default class Card extends Component {
    // state = {
    //     text: 'Hello from card'
    // }
    // componentDidMount() {
    //     let body = document.getElementsByTagName('body')[0];
    //     body.addEventListener('click', (event) => {
    //         if(!!event.target.dataset.element) {
    //             this.setState({
    //                 text: 'Hello from drawer'
    //             })
    //         }
    //         else {
    //             this.setState({
    //                 text: 'Hello from card'
    //             })
    //         }
    //     })
    // }
    render() {
        let book = this.props;
        return (
            <div className="col s12 m6 l4">
                <div className="card blue-grey darken-2">
                    <div className="card-content white-text">
                        <Link to={`/book/id=${book.id}`}><span className="card-title deep-orange-text">{ book.title }</span></Link>
                        <div className="card-description">
                            <p className="card-author"><Link to={`/author/id=${book.author ? book.author.id : false}`}><span className="card-author__link">{ book.author.name }</span></Link></p>
                            <p>
                                <cite>
                                    Year: { book.year }
                                </cite>
                            </p>
                            <p>
                                <cite>
                                    Pages: { book.pages }
                                </cite>
                            </p>
                            <p>
                                <cite>
                                    Country: { book.author.country }
                                </cite>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}