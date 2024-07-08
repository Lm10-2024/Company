import React from 'react';
import Button from '../components/common/Button';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
    </div>
  );
}

export default Home;