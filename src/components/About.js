import React from 'react';

const About = () => {
  return (
    <>
    <section className="about" id='about'>
        <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src="/videos/supra_about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="about-content">
        <p>
        The Toyota Supra, first introduced in 1978, began as a performance-oriented version of the Celica but evolved into a distinct model known for its power and style. 
        The second-generation Supra gained popularity for its inline-six engine, and by the fourth generation (1993-2002), it became a legendary sports car with a turbocharged engine and advanced technology. The Supra was discontinued in 2002 but made a highly anticipated comeback in 2019, developed in collaboration with BMW. 
        Today, it remains an icon of Japanese automotive engineering, celebrated for its rich motorsport heritage and street racing fame.
        </p>
      </div>

      <div class="car-features">
  <div class="feature">
    <span class="feature-label">Price:</span> $40,000
  </div>
  <div class="feature">
    <span class="feature-label">Engine:</span> 3.0L Sequential Turbo Straight Six
  </div>
  <div class="feature">
    <span class="feature-label">Transmission:</span> 6-Speed Manual, or 4-Speed Automatic
  </div>
  <div class="feature">
    <span class="feature-label">Horsepower:</span> 321 hp
  </div>
  <div class="feature">
    <span class="feature-label">Torque:</span> 315 lb-ft
  </div>
  <div class="feature">
    <span class="feature-label">0-60 mph:</span> 4.7s
  </div>
  <div class="feature">
    <span class="feature-label">1/4 mile:</span> 13.1s @109 mph
  </div>
  <div class="feature">
    <span class="feature-label">Top Speed:</span> 177 mph
  </div>
</div>
    <div className="supra-meme">
          <p>OMG!!! It's a Supraa!!!</p>
        </div>
    </section>
    </>
  );
};

export default About;
