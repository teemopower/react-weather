import React from 'react';
import { useState, useEffect, useRef  } from 'react';

import './App.css';
import WeatherEngine from './components/WeatherEngine';

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Seattle" />
      <WeatherEngine location="santiago" />
      <WeatherEngine location="Los Angeles" />
    </div>
  )
}

export default App;
