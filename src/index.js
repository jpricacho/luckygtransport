import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContactUs from './components/ContactUs';
import Reservation from './components/Reservation';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>
  </Router>
);

