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
    'Former audio engineer',
    'Generalist',
  ]);

  return (
    <Wrapper>
      <h3>Buzzwords</h3>
      <div>
        {words
          .sort()
          .map((item, index) =>
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
  margin: 20px auto;
  text-align: center;
  max-width: 80%;

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
    padding: 10px;
    font-size: 1.65rem;
  }

  @media only screen and (max-width: 480px) {
    div {
      justify-content: center;
    }
    span {
      font-size: 1.5rem;
    }
  }
`;
