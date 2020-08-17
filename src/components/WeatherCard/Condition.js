import React from 'react';
import styled from '@emotion/styled';

const Condition = ({temp, condition}) => {

  const Condition = styled.h1`
    font-family: arial;
    font-size: 2rem;
    font-weight: 200;
  `

  const State = styled.h3`
    font-family: 'Merriweather', serif;
    font-size: 1.2rem;
  `
  return (
    <>
      <Condition>{temp} &#8457;</Condition>
      <State>{condition}</State>
    </>
  );
}

export default Condition;
