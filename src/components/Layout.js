import React from 'react';
import Card from './Card';
import {
    Route,
    Link
} from 'react-router-dom';

const Layout = () => (
    <div className="app__layout">
        <div className="container">
            <span>Logo</span>
            <Link to="/card">Card</Link>            
        </div>
        <div className="container">
            <Route path="/card"  component={Card} />
        </div>
    </div>
);

export default Layout;