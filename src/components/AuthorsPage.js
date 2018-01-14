import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthors } from '../actions/index';
import { bindActionCreators } from 'redux'

import Preloader from './Preloader';

class AuthorsPage extends Component {

    componentDidMount() {
        //GET AUTHORS FROM API
        this.props.getAuthors();
    }

    render() {
        let { authors } = this.props.authors;
        let renderLinks = authors.map((author) => (
            <Link
                key={author.id} 
                to={`/author/id=${author.id}`} 
                className="authors-list__author-link collection-item">
                    Name: {author.name}
                    <div className="authors-list__author-country teal accent-4">
                        <cite className="author-country__iiner lighten-2">Country: {author.country}</cite>                        
                    </div>
            </Link>            
        ));

        return (
            <div className="authors-page page-container">
                <div className="container">
                    <div className="row">
                        <ul className="authors-page__authors-list collection with-header">
                            <li className="collection-header"><h5>Books:</h5></li>
                            { authors.length > 0 ? renderLinks : <Preloader />}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
} 

AuthorsPage.propTypes = {
    authors: PropTypes.shape({
        authors: PropTypes.array,
        fetching: PropTypes.boolean,
        error: PropTypes.any
    }).isRequired
}

function mapStateToProps (state) {
    return {
      authors: state.authors
    }
}

function mapDispatchToProps(dispatch) {
    return {
      getAuthors: bindActionCreators(getAuthors, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);