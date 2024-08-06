// App.js
import React from 'react';

import Planner from './Final-phase/Planner';
import { AppProvider } from './Final-phase/AppContext';


const App = () => {
  return (
    <AppProvider>
      <Planner/>
    </AppProvider>
  );
};


export default App;
