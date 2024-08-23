import React from 'react';

const Header = () => {
  return (
    <header>
      <nav >
        <ul>
          <li>
            <a href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#about">
              About
            </a>
          </li>
          <li>
            <a href="/resume/Vivek_Ullengula_Resume.pdf" download="Vivek_Ullengula_Resume.pdf">
              <button className='resume'>
                Download Resume
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
