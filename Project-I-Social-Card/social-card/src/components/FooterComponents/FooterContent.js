import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faSync, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const comment = <FontAwesomeIcon icon={faComment} /> // fa-icon icon
const sync    = <FontAwesomeIcon icon={faSync} /> // fa-sync icon
const heart   = <FontAwesomeIcon icon={faHeart} /> // fa-heart icon
const mail    = <FontAwesomeIcon icon={faEnvelope} /> // fa-envelope icon

function FooterContent() {
    return (
        <div className="footer-content">
            <span className="fa-size fa-position">{comment}</span>
            <span className="fa-size fa-position">{sync} 6</span> 
            <span className="fa-size fa-position">{heart} 4</span> 
            <span className="fa-size fa-position">{mail}</span>   
        </div>
    );
}
export default FooterContent;