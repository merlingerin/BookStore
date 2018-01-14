import React from 'react';
import {
    Route
} from 'react-router-dom';

import Header from './Header';
import BooksPage from '../containers/BooksPage';
import BookPage from '../containers/BookPage';
import AuthorsPage from '../containers/AuthorsPage';
import AuthorPage from '../containers/AuthorPage';
import IndexPage from './IndexPage';

const Layout = () => (
    <div className="app__layout">
        <div className="header">
            <Header />
        </div>
        <Route exact path="/"  component={IndexPage} />                                
        <Route path="/books"  component={BooksPage} />                        
        <Route path="/book/id=:id"  component={BookPage} />        
        <Route path="/authors"  component={AuthorsPage} />                        
        <Route path="/author/id=:id"  component={AuthorPage} />                        
    </div>
);

export default Layout;