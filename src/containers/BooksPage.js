import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBooks } from '../actions/index';
import { bindActionCreators } from 'redux';

import Card from '../components/Card';
import Preloader from '../components/Preloader';

class BooksPage extends Component {

    componentDidMount() {
        //GET BOOKS FROM API
        this.props.getBooks(); 
    }

    render() {
        let { books } = this.props.books;
        let renderCard = books.map((item) => (
            <Card key={item.id} {...item} />
        ));

        return (
            <div className="books-page page-container">
                <div className="container">
                    <div className="row">
                        { books.length > 0 ? renderCard : <Preloader />}
                    </div>
                </div>
            </div>
        );
    }
}

BooksPage.propTypes = {
    books: PropTypes.shape({
        books: PropTypes.array,
        fetching: PropTypes.boolean,
        error: PropTypes.any
    }).isRequired
} 

function mapStateToProps (state) {
    return {
      books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    return {
      getBooks: bindActionCreators(getBooks, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);