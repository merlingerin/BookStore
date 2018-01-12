import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthors } from '../actions/index';
import { bindActionCreators } from 'redux'

import Card from './Card';
import Preloader from './Preloader';

class AuthorsPage extends Component {

    componentDidMount() {
        this.props.getAuthors();
    }

    render() {
        let { authors } = this.props.authors;
        let renderLinks = authors.map((author) => (
            <Link 
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
                        <div className="authors-page__authors-list collection">
                            { authors.length > 0 ? renderLinks : <Preloader />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
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