import React from 'react';
import Project from './Project.js';

function MainContent() {
  return (
    <div className="flex flex-col lg:flex-row lg:my-8">
      <Project
        project={{
          type: 'Design + code',
          name: 'Portfolio',
          imgUrl: 'https://i.imgur.com/doaFBb7.png',
        }}
      />
      <Project
        project={{
          type: 'Code',
          name: 'Responsive navigation',
          imgUrl: 'https://i.imgur.com/op9cEQh.png',
        }}
      />
      <Project
        project={{
          type: 'Code',
          name: 'Four card feature section',
          imgUrl: 'https://i.imgur.com/ixdvpo3.png',
        }}
      />
      <Project
        project={{
          type: 'Design + code',
          name: 'Home Decor website',
          imgUrl: 'https://i.imgur.com/NCg2ICs.png',
        }}
      />
    </div>
  );
}

export default MainContent;
