import React from 'react';
import avatar from './images/avatar.jpg';

function Header() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-2xl lg:text-5xl text-gray-800">Rokas Samuolis</h1>

        <p className="my-4 lg:text-2xl text-gray-700">
          My name is Rokas and I am a Front-end developer based in Oslo.{' '}
        </p>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-md px-4 py-2 my-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline">
          Contact Me
        </button>
      </div>

      <div className="flex-shrink-0">
        <img
          src={avatar}
          alt="Rokas Samuolis avatar"
          className="rounded-full h-24 w-24"
        ></img>
      </div>
    </div>
  );
}

export default Header;
