import React from 'react';
import './Header.css';

function HeaderTitle() {
    return (
        <div className="header-title">
            <h1>Lambda School</h1>
            <span className="atDate">
                <h2>@LambdaSchool</h2>
                <p className="date">- 26 jan</p>
            </span>
        </div>
    );
}

export default HeaderTitle;