import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthorInfo } from '../actions/getAuthorInfo';
import { bindActionCreators } from 'redux'

import Preloader from '../components/Preloader';

class AuthorPage extends Component {

    componentDidMount() {
        const { match: { params } } = this.props;

        //GET AUTHOR INFO FROM API
        this.props.getAuthorInfo(+params.id);
    }

    render() {
        let { author } = this.props.authorInfo;
        let { books } = this.props.authorInfo;
        let { fetching } = this.props.authorInfo;
        
        const renderBooks = () => {
            if( books.length > 0 ) {
                return (
                        books.map((book) => (
                            <Link
                                key={book.id} 
                                to={`/book/id=${book.id}`} 
                                className="books-list__book-link collection-item">
                                    Title: {book.title}
                                    <div className="books-list__book-year teal accent-4">
                                        <cite className="book-year__inner text-white">Year: {book.year}</cite>                        
                                    </div>
                            </Link>  
                        ))
                    );
            } else {
                return (<span className="no-data">No books</span>)
            }
        }

        const renderInfo = (
            <div className="author-page__author-info">
                <h3 className="author-info__author-name">
                    Author: {author.name}
                </h3>
                <ul className="authors-page__authors-list collection with-header">
                    <li className="collection-header"><h5>Books:</h5></li>
                    { renderBooks() }
                </ul>
            </div>
        )

        return (
            <div className="author-page page-container">
                <div className="container">
                    <div className="row">
                        { !fetching ? renderInfo : <Preloader /> }
                    </div>
                </div>
            </div>
        );
    }
}

AuthorPage.protoTypes = {
    authorInfo: PropTypes.shape({
        author: PropTypes.object,
        books: PropTypes.array,
        error: PropTypes.any,
        fetching: PropTypes.boolean
    }).isRequired
}

function mapStateToProps (state) {
    return {
      authorInfo: state.authorInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    getAuthorInfo: bindActionCreators(getAuthorInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);