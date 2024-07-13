import React from 'react';
import './Header.scss'

function Header() {
  return (
    <header>
      {/* <div className="image">
        <img src="/cover.png" alt="Cover Image" />
      </div>

      <div className="circle">
        <img src="/2x2 picture.jpg" alt="Profile Picture" />
      </div> */}
      <div className="image">
      <img src="/cover.png" alt="Cover Image" />
      <div className="circle">
        <img src="/2x2 picture.jpg" alt="Profile Picture" />
      </div>
    </div>

      <div className="name">
        <h1>John Paul August B. Maldo</h1>
        <h2>web programmer.</h2>
        <a href="https://www.facebook.com/johnpaulaugust.maldo" target="_blank">
    <img src="/facebook.png" alt="facebook logo" />
  </a>
  <a href="https://www.linkedin.com/in/john-paul-august-maldo-2183ab187/" target="_blank">
    <img src="/linkedin.png" alt="linkedin logo" />
  </a>

      </div>
{/* 
      <div class="grey-background">
    </div> */}
    </header>
  );
}

export default Header;
