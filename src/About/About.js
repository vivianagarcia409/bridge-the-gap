import React from 'react';
import './About.css';
import jose from "../images/jose.png";
import miguel from "../images/miguel.png";
import basedpee from "../images/basedpee.png";
import delaserg from "../images/delaserg.png";

function About(props) {
    return (
        <div className="about-container">
            
            <div className="jose-container">

            <h3 className="name">
                Jose
            </h3>
            
            <div className="picture">
            <img className="jose" src={jose} alt="jose" />
            </div>
            <div className="jose-text">
            
            <h5 className="about-them">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h5>
            <div className="find-socials">
            <h5 className="find-them">
                Find Jose on Twitter and Instagram:
                </h5>
                <h5 className="jose-socials">
                <a href="https://twitter.com/jose_azcona" target="_blank" rel="noopener noreferrer" className = "jose-link">
                www.twitter.com/jose_azcona
                </a>
               
                <br />
                
                <a href="https://www.instagram.com/jose_azcona/" target="_blank" rel="noopener noreferrer" className = "jose-link">
                www.instagram.com/jose_azcona
                </a>
                </h5>
                </div>

           
            </div>

            </div>


            {/* Miguel */}


            <div className="miguel-container">

            <h3 className="name">
                Miguel
            </h3>
            <div className="picture">
            <img className="miguel" src={miguel} alt="miguel" />
</div>
            
            <div className="miguel-text">
            
            <h5 className="about-them">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h5>
            
            <div className="find-socials">
            <h5 className="find-them">
                Find Miguel on Twitter and Instagram:
                </h5>
                <h5 className="miguel-socials">
                <a href="https://twitter.com/miggybondz" target="_blank" rel="noopener noreferrer" className = "miguel-link">
                www.twitter.com/miggybondz
                </a>
               
                <br />
                
                <a href="https://www.instagram.com/miggybondz/" target="_blank" rel="noopener noreferrer" className = "miguel-link">
                www.instagram.com/miggybondz
                </a>
                </h5>
            </div>

           
            </div>
            </div>

            {/* BasedPee */}

            <div className="basedpee-container">
            
            <h3 className="name">
                Philippe "P"
            </h3>

            <div className="picture">

            <img className="basedpee" src={basedpee} alt="basedpee" />
           
            </div>
            <div className="basedpee-text">
            
            <h5 className="about-them">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h5>
            
            <div className="find-socials">
            <h5 className="find-them">
                Find Philippe "P" on Twitter and Instagram:
                </h5>
                <h5 className="basedpee-socials">
                <a href="https://twitter.com/BasedPee" target="_blank" rel="noopener noreferrer" className = "basedpee-link">
                www.twitter.com/basedpee
                </a>
               
                <br />
                
                <a href="https://www.instagram.com/basedpee/" target="_blank" rel="noopener noreferrer" className = "basedpee-link">
                www.instagram.com/basedpee
                </a>
                </h5>
                </div>

           
            </div>
           
            </div>


            {/* DeLaSerg */}
            <div className="delaserg-container">

            <h3 className="name">
                DelaSerg
            </h3>

            <div className="picture">
            <img className="delaserg" src={delaserg} alt="delaserg" />

            </div>
           
                       
            
            <div className="delaserg-text">
            
            <h5 className="about-them">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h5>
            <div className="find-socials">
            <h5 className="find-them">
                Find DelaSerg on Twitter and Instagram:
                </h5>
                <h5 className="delaserg-socials">
                <a href="https://twitter.com/DeLaSerg" target="_blank" rel="noopener noreferrer" className = "delaserg-link">
                www.twitter.com/delaserg
                </a>
               
                <br />
                
                <a href="https://www.instagram.com/delaserg/" target="_blank" rel="noopener noreferrer" className = "delaserg-link">
                www.instagram.com/delaserg
                </a>
                </h5>
            </div>
           
            </div>
           
            </div>
        
        
        
        
        </div>
    );
}

export default About;