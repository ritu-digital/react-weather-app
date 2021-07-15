import React from 'react';
import styled from 'styled-components';
import WeatherInfoComponent from './WeatherInfoComponent';

const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes('d');

  const getTime = (timestamp) => {
    return `${new Date(timestamp * 1000).getHours()}: ${new Date(
      timestamp * 1000
    ).getMinutes()} `;
  };

  const dayOrNight = (time) => {
    return isDay ? 'A.M' : 'P.M';
  };
  const iconCode = weather?.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const displayDate = (timestamp) => {
    const unixTimestamp = timestamp;
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleString('en-US', options);
    return humanDateFormat;
  };

  return (
    <>
      <WeatherCondition>
        <DisplayTime>
          <p>{displayDate(weather?.dt)}</p>
        </DisplayTime>
        <Condition>
          <span>{`${weather?.main?.temp}`} &deg;C</span>{' '}
          {`| ${weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src={iconUrl} />
      </WeatherCondition>
      <Location>
        <img
          src='https://img.icons8.com/ios/50/ffffff/worldwide-location.png'
          alt='location logo'
        />
        {`${weather?.name}, ${weather?.sys?.country}`}
      </Location>
      {/* <WeatherInfoHeading>Forecast for Today :</WeatherInfoHeading> */}
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? 'sunrise' : 'sunset'}
          value={
            getTime(weather?.sys[isDay ? 'sunrise' : 'sunset']) +
            dayOrNight(isDay)
          }
        />

        <WeatherInfoComponent
          name='humidity'
          value={weather?.main?.humidity + '%'}
        />
        <WeatherInfoComponent
          name='feels'
          value={weather?.main?.feels_like + '°C'}
        />

        <WeatherInfoComponent
          name='wind'
          value={weather?.wind?.speed + 'km/h'}
        />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherComponent;

const WeatherCondition = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 30px auto;
  padding: 0 4rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const DisplayTime = styled.p`
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Condition = styled.span`
  margin: 20px auto;
  font-size: 1rem;

  & span {
    font-size: 28px;
    font-weight: 700;
  }
`;

const WeatherLogo = styled.img`
  width: 64px;
  height: 64px;
  margin: 5px 0;
  @media screen and (max-width: 768px) {
    margin: 5px auto 0;
  }
`;
const Location = styled.span`
  z-index: 1;
  color: white;
  width: 70%;
  text-align: center;
  background-color: rgba(48, 48, 48, 0.5);
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;

  box-shadow: rgba(254, 202, 205, 0.5) 0px 30px 60px -12px inset,
    rgba(255, 255, 255, 0.1) 0px 18px 36px -18px inset;
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0;
  @media screen and (max-width: 768px) {
    margin: 0.8rem auto;
  }
  @media screen and (max-width: 330px) {
    margin: 0;
    width: 80%;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 0;
  }
  & img {
    width: 36px;
    height: 36px;
    margin-right: 8px;
  }
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 2.5rem 0;
  @media screen and (max-width: 330px) {
    margin: 1rem auto;
    width: 100%;
  }
`;
