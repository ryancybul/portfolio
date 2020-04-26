import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Buzzwords = () => {
  const [words] = useState([
    'Webophile',
    'Hiker',
    'Home brewer',
    'Juggler',
    'Cyclist',
    'Rock climber',
    'Pizza maker',
    'Boardgamer',
  ]);

  return (
    <Wrapper>
      <h3>Buzzwords</h3>
      <div>
        {words.map((item, index) =>
          index % 2 === 0 ? (
            <span className="odd">{item}</span>
          ) : (
            <span className="even">{item}</span>
          )
        )}
      </div>
    </Wrapper>
  );
};

export default Buzzwords;

const Wrapper = styled.div`
  font-family: 'futura';
  text-align: center;
  width: 100%;

  h3 {
    font-size: 30px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0px 10px;
  }
  .even {
    text-decoration: double underline;
    text-decoration-color: var(--pink);
  }
  .odd {
    text-decoration: double underline;
    text-decoration-color: var(--navy);
  }
  span {
    padding: 5px;
    font-size: 2rem;
  }

  @media only screen and (max-width: 480px) {
    div{
      justify-content: center;
    }
    h3 {
      font-size: 2.25rem;
    }
  }
`;
