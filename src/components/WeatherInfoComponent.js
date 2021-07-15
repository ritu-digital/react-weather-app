import React from 'react';
import styled from 'styled-components';

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

export default WeatherInfoComponent;

export const WeatherInfoIcons = {
  sunset: 'https://img.icons8.com/ios/50/ffffff/sunset--v1.png',
  sunrise: 'https://img.icons8.com/ios/50/ffffff/sunrise--v1.png',
  wind: 'https://img.icons8.com/ios/50/ffffff/wind--v1.png',
  humidity: 'https://img.icons8.com/ios/50/ffffff/wet.png',
  feels: 'https://img.icons8.com/ios/50/ffffff/temperature-outside.png',
};

const InfoContainer = styled.div`
  z-index: 1;
  display: flex;

  margin: 5px 10px;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;
