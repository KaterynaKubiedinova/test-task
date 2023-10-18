import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { FirstPage } from './pages/first-page/FirstPage';
import { SecondPage } from './pages/second-page/SecondPage';
import { ThirdPage } from './pages/third-page/ThirdPage';

function App() {
  const navigate = useNavigate();

  const goToFirstPage = () => {
    navigate('/first');
  }

  const goToSecondPage = () => {
    navigate('/second');
  }

  const goToThirdPage = () => {
    navigate('/third');
  }

  return (
    <>
      <div className="App">
        <button onClick={goToFirstPage}>To first</button>
        <button onClick={goToSecondPage}>To second</button>
        <button onClick={goToThirdPage}>To third</button>
      </div>
      <Routes>
        <Route path='/first' element={<FirstPage />} />
        <Route path='/second' element={<SecondPage />} />
        <Route path='/third' element={<ThirdPage />} />
      </Routes>
    </>
      
  );
}

export default App;
