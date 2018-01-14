import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthors } from '../actions/index';
import { bindActionCreators } from 'redux';
import Preloader from '../components/Preloader';

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book_title: '',
            book_pages: '',
            book_year: '',
            book_author: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getAuthors();
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit() {
        let data = {
            title: this.state.book_title,
            language: 'England',
            pages: +this.state.book_pages,
            year: +this.state.book_year,
            author: +this.state.book_author,
        }
        fetch('/api/create_books', {method: 'POST', body: JSON.stringify(data)})
        .then((res) => {
            console.log('data', res);
        })
    }

    render() {
        let { authors } = this.props.authors;
        let renderSelect = () =>  authors.map((author, idx) => (
            <option key={author.id} value={`${author.id}`} >{ author.name }</option>            
        ));

        return (
            <div className="main-page page-container">
                <div className="container">
                    <div className="row">
                        <div className="col l6 m8 s12 push-l3 push-m2">
                            <div className="card">
                                <div className="card-content">
                                    <div className="input-field">
                                        <input 
                                            placeholder="Title" 
                                            id="book_title" 
                                            name="book_title"
                                            type="text" 
                                            className="validate" 
                                            onChange={this.handleInput}
                                        />
                                    </div>
                                    <div className="input-field">
                                        <input 
                                            placeholder="Pages" 
                                            id="book_pages" 
                                            name="book_pages" 
                                            type="number" 
                                            className="validate" 
                                            onChange={this.handleInput}                                            
                                        />
                                    </div>
                                    <div className="input-field">
                                        <input 
                                            placeholder="Year" 
                                            id="book_year" 
                                            name="book_year" 
                                            type="number" 
                                            className="validate" 
                                            onChange={this.handleInput}                                            
                                        />
                                    </div>
                                    <div className="input-field--select">
                                        <select name="book_author"
                                            onChange={this.handleInput}                                            
                                        >
                                            <option value="0">Choose author</option>                                        
                                        { !this.props.authors.fetching && authors.length > 0 ? 
                                            renderSelect() :
                                            '' 
                                        }
                                        </select>
                                    </div>
                                    <div className="input-field">
                                        <button 
                                            className="btn waves-effect waves-light" 
                                            onClick={this.handleSubmit}
                                            type="submit" 
                                            name="book_submit">
                                            Add book
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authors: state.authors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAuthors: bindActionCreators(getAuthors, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);