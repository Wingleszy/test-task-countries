import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CountryDetails } from './components/CountryDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/test-task-countries/">
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/country/:name' element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

