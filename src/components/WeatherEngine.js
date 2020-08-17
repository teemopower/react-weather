import React from 'react';
import { useState, useEffect, useRef  } from 'react';

import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    temp:null,
    city: null,
    condition: null,
    country: null
  });


  const getWeather = async(q) => {
    setLoading(true);

    try {
      const apiRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${q}&&units=imperial&appid=933f21b450ca8973e7b0af90bc07bafd`);
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country
      })
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }

  useEffect(() => {
    getWeather(location);
  }, [location])

  return (
    <div className="App">
      {!loading && !error ? (
        <div>
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
            getWeather={getWeather}
          />
        </div>
      )
      : loading ? (
        <div>Loading</div>
      )
      : !loading && error ? setError(false)
      :null
    }
    </div>
  );
}

export default WeatherEngine;
