import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';

import Card from './Card';
import Header from './Header';
import BooksPage from './BooksPage';
import BookPage from './BookPage';
import AuthorsPage from './AuthorsPage';
import AuthorPage from './AuthorPage';

const Layout = () => (
    <div className="app__layout">
        <div className="header">
            <Header />
        </div>
        <Route path="/books"  component={BooksPage} />                        
        <Route path="/book/id=:id"  component={BookPage} />        
        <Route path="/authors"  component={AuthorsPage} />                        
        <Route path="/author/id=:id"  component={AuthorPage} />                        
    </div>
);

export default Layout;