import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import CityComponent from './components/CityComponent';
import WeatherComponent from './components/WeatherComponent';
import './App.css';
import Loader from './components/Loader';

function App() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c98a813d9ec26cdb2d670b656de7e582&units=metric`
    );
    setWeather(response.data);
    setIsLoading(false);
  };
  return (
    <Container>
      <AppHeading>Forecast for Today</AppHeading>
      {isLoading && <Loader />}
      {weather ? (
        <WeatherComponent weather={weather} />
      ) : (
        <CityComponent setCity={setCity} fetchData={fetchData} />
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 780px;
  height: 500px;
  font-family: 'Montserrat', sans-serif;
  color: white;

  @media (max-width: 540px) {
    width: 100vw;
    height: 100vh;
  }
  @media (min-width: 541px) and (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const AppHeading = styled.h1`
  color: #505050;
  font-size: 18px;
  font-weight: bold;
  margin: 0.5rem auto;
`;
