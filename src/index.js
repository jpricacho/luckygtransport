import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContactUs from './components/ContactUs';
import Reservation from './components/Reservation';
import About from './components/About';
import FrontPage from './components/FrontPage';
import Fleet from './components/Fleet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
          <Route path='/' element={<App/>}/>
          {/* <Route path='/home' element={<FrontPage/>}/> */}
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/fleet' element={<Fleet/>}/>
      </Routes>
  </Router>
);

