import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Planner from './Final-phase/Planner';
import Signup from './Mid-phase/Signup';
import Sin from './Mid-phase/Sin';
import Selector from './Mid-phase/Selector';
import ItineraryPlanner from './Final-phase/ItinearyPlanner';

import Component from './Components/Component';
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
</Routes>
</BrowserRouter>

    </div>
  )
}

export default LinkRouter