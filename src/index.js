import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import StartHere from './routes/StartHere';
import Projects from './routes/Projects';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="start-here" element={<StartHere />}/>
        <Route path="projects" element={<Projects />}/>
        <Route path="*" element={<Navigate replace to="/"/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

