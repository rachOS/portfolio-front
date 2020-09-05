import React from 'react';

// import components
import banner from "../static/image/wallpaper/wp2141419-web-design-wallpapers.png"
// import data

// import style

function Banner() {
  return (
      <div className="banner-container">
          <img className="banner" src={banner} alt="illustration d'écran sur font bleu"/>
      </div>
  );
}

export default Banner;