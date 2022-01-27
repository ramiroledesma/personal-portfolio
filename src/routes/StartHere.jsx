import React from 'react';
import Navigation from '../components/Navigation';
import Start from '../components/Start';
import './starthere.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const StartHere = () => {
  return (
    <div className='container startHere'>
      <Navigation />
      <Start />
    </div>
  );
};

export default StartHere;
