import { combineReducers } from 'redux';

import books from './books.js';
import authors from './authors.js';
import author from './author.js';
import book from './book.js';

export default combineReducers({
    books,
    book,
    authors,
    author
});