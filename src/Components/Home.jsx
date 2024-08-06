import React from 'react';
import '../Styles/Home.css';
import { NavLink } from 'react-router-dom';
function Home() {
  return (
    <div className="main-div" id='home'>
    <div className="inner-div">
      <h1>A travel planner for everyone</h1>
      <p>
        Organize flights & hotels and map your trips in a free travel app designed for vacation planning & road trips, powered by AI and Google Maps.
      </p>
      <div className="button-container">
     <NavLink to="/Selector">  <button className="btn start-planning">Start planning</button></NavLink> 
        <button className="btn get-app">Get the app</button>
      </div>
      
    </div>
      <div className='iome'><h1>Lets start yor travel<br></br> with travelog</h1></div>
  </div>
  );
}

export default Home;
