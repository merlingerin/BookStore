import React from 'react';

let Preloader = () => (
    <div className="preloader-wrapper big active books-page__loader">
        <div className="spinner-layer spinner-red-only">
        <div className="circle-clipper left">
            <div className="circle"></div>
        </div><div className="gap-patch">
            <div className="circle"></div>
        </div><div className="circle-clipper right">
            <div className="circle"></div>
        </div>
        </div>
    </div>
);

export default Preloader;