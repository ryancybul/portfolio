import React from 'react';
import styled from 'styled-components';
import topWave from '../images/waveTop.png';
import bottomWave from '../images/waveBottom.png';
import Technologies from './Technologies';

function Section() {
  return (
    <Wrapper>
      <img src={topWave} alt="wave design" />
      <Technologies />
      <img src={bottomWave} alt="wave design" />
    </Wrapper>
  );
}

export default Section;

const Wrapper = styled.div`
  img {
    display: block;
    width: 100%;
  }
`;

