import React, { Component } from 'react';

export default class MainPage extends Component {
    render() {
        return (
            <div className="main-page page-container">
                <div className="container">
                    <div className="row">
                        <div class="col l6 m8 s12 push-l3 push-m2">
                            <div class="card">
                                <div class="card-content">
                                    <div class="input-field">
                                        <input placeholder="Title" id="book_title" type="text" class="validate" />
                                    </div>
                                    <div class="input-field">
                                        <input placeholder="Pages" id="book_title" type="number" class="validate" />
                                    </div>
                                    <div class="input-field">
                                        <input placeholder="Year" id="book_title" type="number" class="validate" />
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