import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthor } from '../actions/getAuthor';
import { bindActionCreators } from 'redux'

import Card from './Card';
import Preloader from './Preloader';

class AuthorPage extends Component {

    componentDidMount() {
        const { match: { params } } = this.props;
        console.log('PARAMS::: ', +params.id);
        this.props.getAuthor(+params.id);
    }

    render() {
        console.log('AUTHOR', this.props);
        // let { author } = this.props.authors;
        // let renderLinks = authors.map((author) => (
        //     <Link 
        //         to={`/author/id=${author.id}`} 
        //         className="authors-list__author-link collection-item">
        //             Name: {author.name}
        //     </Link>            
        // ));
        // { authors.length > 0 ? renderLinks : <Preloader />}

        return (
            <div className="authors-page page-container">
                <div className="container">
                    <div className="row">
                        <div className="authors-page__authors-list collection">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
      author: state.author
    }
}

function mapDispatchToProps(dispatch) {
    return {
      getAuthor: bindActionCreators(getAuthor, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);