import React, { useState } from 'react'
import styled from 'styled-components'

const Buzzwords = function () {
  const [words] = useState([
    'Hiker',
    'Juggler',
    'Mountain biker',
    'Rock climber',
    'Drummer',
    'Pizza maker',
    'Homebrewer',
    'Boardgamer',
    'Former audio engineer',
  ])

  return (
    <Wrapper>
      <h3>Buzzwords</h3>
      <div>
        {words.map((item, index) =>
          index % 2 === 0 ? (
            <span className='odd' key={index}>
              {item}
            </span>
          ) : (
            <span className='even' key={index}>
              {item}
            </span>
          )
        )}
      </div>
    </Wrapper>
  )
}

export default Buzzwords

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
`
