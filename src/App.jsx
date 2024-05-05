import logo from './logo.svg';
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut/LayOut';
import Home from './components/Home/Home';
import About from './components/About/About';
import Clinics from './components/Clinics/Clinics';
import Analysis from './components/Analysis/Analysis';
import Radiology from './components/Radiology/Radiology';
import Results from './components/Results/Results';
import Contact from './components/Contact/Contact';
import Appointment from './components/Appointment/Appointment';
import Reserve from './components/Reserve/Reserve';
import NotFound from './components/NotFound/NotFound';

function App() {
  let routes=createBrowserRouter([
    { path:"sherif-hospital/",element:<LayOut />,children:[
      {path:"",element:<Home />},
      {path:"home",element:<Home />},
      {path:"about",element:<About />},
      {path:"clinic",element:<Clinics />},
      {path:"analsis",element:<Analysis />},
      {path:"radiology",element:<Radiology />},
      {path:"result",element:<Results />},
      {path:"contact",element:<Contact />},
      {path:"/appointment",element:<Appointment />},
      {path:"/reserve",element:<Reserve />},
     
      
      
  
      {path:"*",element:<NotFound />},
  
    ]}
  ])
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
