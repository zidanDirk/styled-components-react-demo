/**
 * 
 * import { css } from '@linaria/core';
    const red = 'red'
    const header = css`
        text-transform: uppercase;
        color: ${red}
    `;

    const App = () => {
        return <div className={header}>
            <h1>Hello World</h1>
        </div>
    }
 */


/**
 * 
 * import { styled } from '@linaria/react'

    const Container = styled.div`
        font-size: 35px;
        color: red;
        border: 1px solid red;

        &:hover {
            border-color: blue;
        }

        h1 {
            margin-bottom: 24px;
        }
    `;
    const App = () => {
        return <Container>
            <h1>Hello World</h1>
        </Container>
    }
 * 
 */

import { styled } from '@linaria/react';

const Title = styled.h1`
  font-family: inherit;
`;
const medium = 30

const Navbar = styled.nav`
  font-size: ${medium}px;
  color: ${props => props.color};
  border: 1px solid red;

  &:hover {
    border-color: blue;
  }

  ${Title} {
    margin-bottom: 24px;
  }
`;

const App = () => {
    return <Navbar color="#999">
        <Title>Hello world</Title>
    </Navbar>
}

export default App;