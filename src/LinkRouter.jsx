import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Planner from './Final-phase/Planner';
const LinkRouter = () => {
  return (
    <div>

<BrowserRouter>
<Routes>
<Route path='/' element=<App/> >
</Route>
<Route path='/Planner' element=<Planner/> >
</Route>
</Routes>
</BrowserRouter>

    </div>
  )
}

export default LinkRouter