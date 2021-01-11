import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>SHOPERA AWAITS</h1>
      <p>What are you waiting for? Download Now!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         <i class="fab fa-google-play"></i>  Download
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         <i class="fab fa-apple"></i> Download 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
