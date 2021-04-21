import React from 'react';
import './FootNote.css';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';

function FootNote(props) {
    return (
        <div className="footer">
        
            <a href="https://www.instagram.com/bridgethegappodcast/" target="_blank" rel="noopener noreferrer" className = "social-media">
                <img className="instagram" src={instagram} alt="instagram" />
            </a>
                
            <a href="https://twitter.com/bridgethegappod" target="_blank" rel="noopener noreferrer" className = "social-media">
                <img className="twitter" src={twitter} alt="twitter" />
            </a>
            
        </div>
    );
}

export default FootNote;