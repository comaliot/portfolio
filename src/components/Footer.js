import React from 'react';

function Footer() {
  return (
    <div className="flex justify-between my-6 text-gray-400 lg:justify-start">
      <p className="hover:text-yellow-400 lg:mr-6">
        <a href={'mailto:samuolis.rokas@gmail.com'}>Email</a>
      </p>
      <p className="hover:text-gray-800 lg:mr-6">
        <a href="https://github.com/comaliot">Github</a>
      </p>
      <p className="hover:text-pink-500 lg:mr-6">
        <a href="https://dribbble.com/samuolis">Dribbble</a>
      </p>
      <p className="hover:text-blue-700">
        <a href="https://www.linkedin.com/in/rokas-samuolis-371428169/">
          LinkedIn
        </a>
      </p>
    </div>
  );
}

export default Footer;
