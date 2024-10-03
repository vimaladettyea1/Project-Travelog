import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Planner from './Final-phase/Planner';
import Signup from './Mid-phase/Signup';
import Sin from './Mid-phase/Sin';
import Selector from './Mid-phase/Selector';
import ItineraryPlanner from './Final-phase/ItinearyPlanner';
import Guide from './Mid-phase/Guide';
import Component from './Components/Component';
import Hotel from './Components/Hotels/Hotel';
const LinkRouter = () => {
  return (
    <div>

<BrowserRouter>
<Routes>
<Route path='/' element=<Component/> >
</Route>
<Route path='/Planner' element=<Planner/> >
</Route>
<Route path='/Signup' element=<Signup/> >
</Route>
<Route path='/Sin' element=<Sin/> >
</Route>
<Route path='/Selector' element=<Selector/> >
</Route>
<Route path='/Hotel' element=<Hotel/> >
</Route>
<Route path='/Guide' element=<Guide/> >
</Route>
</Routes>
</BrowserRouter>

    </div>
  )
}

export default LinkRouter