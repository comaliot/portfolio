import React from 'react';

function Project(props) {
  return (
    <div className="mx-2">
      <img src={props.project.imgUrl} alt="project"></img>
      <p className="text-gray-400 text-sm my-4">{props.project.type}</p>
      <h3 className="text-xl lg:text-2xl my-2 text-gray-700">
        {props.project.name}
      </h3>
      <button className="border-solid border-2 border-gray-200 text-gray-700 rounded-md px-4 py-2 my-4 transition duration-500 ease select-none hover:bg-gray-200 focus:outline-none focus:shadow-outline">
        Learn More
      </button>
    </div>
  );
}

export default Project;
