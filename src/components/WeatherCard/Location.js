import React from 'react';
import { useState, useEffect, useRef  } from 'react';
import styled from '@emotion/styled';

const Location = ({ city, country, getWeather }) => {
  const myRef = useRef();
  const [inputMode, setInputMode] = useState(false);



  return (
    <Container>
      {!inputMode &&  <City onClick={() => setInputMode(true)}>{city}</City>}
      {inputMode && (
        <form onSubmit={e => {
          e.preventDefault();
          getWeather(myRef.current.value);
        }}>
          <Search
            required
            type="text" ref={myRef}
            placeholder='Search by city'
          />

        </form>
      )}

      <Country>{country}</Country>
    </Container>
  );
}

export default Location;

const Container = styled.div`
  text-align: center;
`

const Search = styled.input`
  width: 80%;
  margin-bottom: 5px;
  border-radius: 10px;
  padding: 5px;
  outline: none;
`

const City = styled.h1`
  font-family: 'Merriweather', serif;
  font-size: 1.6em;
  position: relative;
  cursor: pointer;
  &:hover {
    top: -5px;
  }
`

const Country = styled.h3`
  font-family: arial;
  font-size: 1.1rem;
`
