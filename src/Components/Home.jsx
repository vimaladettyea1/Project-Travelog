import React from 'react';
import '../Styles/Home.css';

function Home() {
  return (
    <div className="main-div">
    <div className="inner-div">
      <h1>A travel planner for everyone</h1>
      <p>
        Organize flights & hotels and map your trips in a free travel app designed for vacation planning & road trips, powered by AI and Google Maps.
      </p>
      <div className="button-container">
        <button className="btn start-planning">Start planning</button>
        <button className="btn get-app">Get the app</button>
      </div>
      
    </div>
      <div className='iome'><h1>Lets start yor travel<br></br> with travelog</h1></div>
  </div>
  );
}

export default Home;
