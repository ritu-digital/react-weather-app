import React from 'react';
import styled from 'styled-components';
import weatherimg from '../images/cloud-img.png';
import '../WeatherImg.css';

const CityComponent = (props) => {
  const { setCity, fetchData } = props;
  return (
    <>
      <ImgContainer>
        <WeatherLogo src={weatherimg} className='img-1' />
        <WeatherLogo src={weatherimg} className='img-2' />
      </ImgContainer>

      <SearchBox onSubmit={fetchData}>
        <input
          type='text'
          placeholder='city'
          onChange={(e) => setCity(e.target.value)}
        />
        <button type='submit'>search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;

const ImgContainer = styled.div`
  position: relative;
`;
const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 3.8rem auto;
  object-fit: contain;
  z-index: 1;
`;

const SearchBox = styled.form`
  display: flex;
  border: none;
  border-radius: 2px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 20px auto;

  & input {
    background-color: rgba(255, 255, 255, 0.83);
    z-index: 1;
    color: #303030;
    padding: 10px;
    font-size: 16px;
    border: none;
    border: 0.2px solid rgba(254, 202, 205, 0.9);
    outline: none;
    font-weight: bold;
    @media screen and (max-width: 768px) {
      border-top-right-radius: 20px;
    }
  }

  & button {
    z-index: 1;
    padding: 10px;
    font-size: 16px;
    color: white;
    background-color: #303030;
    border: 0.2px solid rgba(254, 202, 205, 0.9);
    box-shadow: rgba(254, 202, 205, 0.5) 0px 30px 60px -12px inset,
      rgba(255, 255, 255, 0.1) 0px 18px 36px -18px inset;
    outline: none;
    font-weight: bold;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      border-bottom-left-radius: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.2rem;
  }
`;
