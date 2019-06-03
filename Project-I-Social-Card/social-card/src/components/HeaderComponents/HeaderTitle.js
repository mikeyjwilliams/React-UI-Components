import React from 'react';
import './Header.css';

function HeaderTitle() {
    return (
        <div className="header-title">
            <h1>Lambda School</h1>
            <span className="atDate">
                <h2 className="gray">@LambdaSchool</h2>
                <p className="gray">- 26 jan</p>
            </span>
        </div>
    );
}
export default HeaderTitle;