import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBookInfo } from '../actions/getBookInfo';
import { bindActionCreators } from 'redux'

import Preloader from '../components/Preloader';

class BookPage extends Component {

    componentDidMount() {
        //GET BOOK's INFO FROM API
        const { match: { params } } = this.props;
        this.props.getBookInfo(+params.id);
    }

    render() {
        let { info }  = this.props.bookInfo;
        let { fetching }  = this.props.bookInfo;
        let { info: { author } }  = this.props.bookInfo;
         
        let renderBookInfo = () => (
            <div className="book-page__book-info">
                <ul className="book-info__list collection with-header">
                    <li className="collection-header"><h5>About Book:</h5></li>
                    <li className="book-info__list-item collection-item">
                        <span className="list-item__title">Book title: </span>
                        <span className="secondary-content">{ info.title }</span>
                    </li>
                    <li className="book-info__list-item collection-item">
                        <span className="list-item__title">Author name: </span>
                        <Link className="secondary-content blue-text" to={`/author/id=${author.id}`}>
                            {author.name}
                        </Link>
                    </li>
                    <li className="book-info__list-item collection-item">
                        <span className="list-item__title">Pages: </span> 
                        <span className="secondary-content">{info.pages}</span>
                    </li>
                    <li className="book-info__list-item collection-item">
                        <span className="list-item__title">Year: </span> 
                        <span className="secondary-content">{info.year}</span>                
                    </li>
                </ul>
            </div>
        )

        return (
            <div className="book-page page-container">
                <div className="container">
                    <div className="row">
                        { !fetching && author ? renderBookInfo() : <Preloader /> }
                    </div>
                </div>
            </div>
        );
    }
}

BookPage.propTypes = {
    bookInfo: PropTypes.shape({}).isRequired
}

function mapStateToProps (state) {
    return {
      bookInfo: state.bookInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getBookInfo: bindActionCreators(getBookInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);