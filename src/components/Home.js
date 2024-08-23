import React from 'react';

const Home = () => {
    const text = "Supra MK4";
  return (
    <div className="home" id='home'>
      <div className="image-container">
        <img src="/images/supra_home.jpg" alt="Home Background" className="background-image" />
        <div className="overlay-text">
        <h1>
            {text.split("").map((letter, index) => (
              <span key={index} className="animated-letter" style={{ animationDelay: `${index * 0.1}s` }}>
                {letter}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </div>  
  );
};

export default Home;
