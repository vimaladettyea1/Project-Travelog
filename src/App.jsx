import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ImageSlider from './Components/ImageSlider';
import Review from './Components/Review';
import Home from './Components/Home';
import Features from './Components/Features'
import PlanLikeAPro from './Components/PlanLikeAPro'
import SearchBar from './Components/SearchBar'
import Footer from './Components/Footer';



function App() {
	return (<>
	  <Navbar/>
	  <Home/><br></br><br></br><br></br><br></br>
	  <SearchBar/>
	  <center><h2>Some popular Destinations</h2></center>
	  <ImageSlider/><br></br><br></br><br></br><br></br>
	  <Features/>
	  <PlanLikeAPro/>
      <Review/>
	  <Footer/>
	  
		
</>


	);
}

export default App;