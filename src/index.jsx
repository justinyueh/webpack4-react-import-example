import React from 'react';
import ReactDOM from 'react-dom';

async function getWelcomeComponent() {
  console.log('start loading component');
  const { default: Welcome } = await import('./components/Welcome');
  console.log('component loaded');
  ReactDOM.render(
    <Welcome name="World" />,
    document.getElementById('root')
  );
}

setTimeout(getWelcomeComponent, 1000);
