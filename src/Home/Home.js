import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import logo2 from '../images/logo2.png';
import hosts from '../images/hosts.jpeg';
import recent from '../images/recent.webp';
import youtube from '../images/youtube.webp';
import spotify from '../images/spotify.png';
import google from '../images/google.png';
import podbean from '../images/podbean.png';
import tunein from '../images/tunein.png';
import stitcher from '../images/stitcher.png';
import overcast from '../images/overcast.png';
import apple from '../images/apple.png';
import pocket from '../images/pocket.png';
import iheart from '../images/iheart.png';
import castbox from '../images/castbox.png';


function Home(props) {
    return (
        <div className="home-container">

            <img className="logo-two" src={logo2} alt="logo2" />
            
        <div className="meet-hosts">
            
            <img className="hosts" src={hosts} alt="hosts" />
            
            <h3 className="briefing">
            Listen to Jose, P, DeLaSerg and Mig cover topics in urban culture, music, 
            business and much more every Tuesday as they focus to bring ideas 
            and/or cultures closer together through this medium.
            </h3>
            
            <Link to="/about" className = "host-link">FIND OUR HOSTS HERE</Link>
           

        </div>
       
            <div className="most-recent">

            <h2 className="title">
                Recent Episode:
            </h2>
                <div className="recent-episode-logo">

                <img className="recent-episode" src={recent} alt="recent" />

                </div>

                <div className="recent-episode-synopsis">

                <h2 className="title">Episode 89 | "Half on the Line"</h2>

                <h4 className="text">This week on Bridge the Gap Podcast the guys go over Jose’s birthday (01:25), 
            DeLaSerg’s vacation, Quavo and Saweetie’s relationship in the headlines (24:22), 
            new music from Shawny Binladen, Benny The Butcher (33:55), Justin Bieber, 
            Billionaire Yeezy and Red Sox Lebron, anticipating music from the Migos and Rory of the JBP, 
            South Beach during Spring Break (69:49) and more.
                </h4>

                </div>
            </div>
            <div className="find-podcast">
                <h2 className="find-pod">
                    You can find the Podcast on these platforms:
                </h2>
                <div className="podcast-links">
                
                <a href="https://www.youtube.com/channel/UCj1-LBuD4xjFbPWeRs5n-Lg?view_as=subscriber" target="_blank" rel="noopener noreferrer" className = "pod-link">
                <img className="youtube" src={youtube} alt="youtube" />
                </a>

                <a href="https://bridgethegappod.podbean.com/" target="_blank" rel="noopener noreferrer" className = "pod-link"> 
                <img className="podbean" src={podbean} alt="podbean" />
                </a>

                <a href="https://podcasts.apple.com/us/podcast/bridge-the-gap-podcast/id1455843091?mt=2" target="_blank" rel="noopener noreferrer" className = "pod-link">
                <img className="apple" src={apple} alt="apple" />
                </a>

                <a href="https://open.spotify.com/show/0R3lY0iJt69qhMp5fLqmUp" target="_blank" rel="noopener noreferrer" className = "pod-link">
                <img className="spotify" src={spotify} alt="spotify" />
                </a>

                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2JyaWRnZXRoZWdhcHBvZC9mZWVkLnhtbA?sa=X&ved=0CAMQ4aUDahcKEwig5Kitqt_sAhUAAAAAHQAAAAAQBA" target="_blank" rel="noopener noreferrer" className = "pod-link">
                <img className="google" src={google} alt="google" />
                </a>

                <a href="https://www.stitcher.com/show/bridge-the-gap-podcast-2" target="_blank" rel="noopener noreferrer" className = "pod-link">
                <img className="stitcher" src={stitcher} alt="stitcher" />
                </a>

                <a href="https://overcast.fm/login" target="_blank" rel="noopener noreferrer" className = "pod-link">
                <img className="overcast" src={overcast} alt="overcast" />
                </a>

                <a href="https://pca.st/hR9Z" target="_blank" rel="noopener noreferrer" className = "pod-link">
                <img className="pocket" src={pocket} alt="pocket" />
                </a>

                <a href="https://www.iheart.com/podcast/256-bridge-the-gap-podcast-53710557/?keyid=Bridge%20the%20Gap%20Podcast&pname=podcast_profile&sc=widget_share" target="_blank" rel="noopener noreferrer" className = "pod-link">
                <img className="iheart" src={iheart} alt="iheart" />
                </a>

                <a href="https://castbox.fm/channel/Bridge-the-Gap-Podcast-id2054038?country=us" target="_blank" rel="noopener noreferrer" className = "pod-link">
                <img className="castbox" src={castbox} alt="castbox" />
                </a>

                <a href="https://tunein.com/podcasts/Music-Podcasts/Bridge-the-Gap-Podcast-p1215836/?topicId=130177478" target="_blank" rel="noopener noreferrer" className = "pod-link">
                <img className="tunein" src={tunein} alt="tunein" />
                </a>


                </div>
            
            

            </div>

            




        </div>
    );
}

export default Home;