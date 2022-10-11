// import styled from 'styled-components';

// const Button = styled.button`
//   background: ${props => props.primary ? "palevioletred" : "white"};
//   color: ${props => props.primary ? "white" : "palevioletred"};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

// const App = () => {
//     return <div>
//         <Button>Normal</Button>
//         <Button primary>Primary</Button>
//   </div>
// }

import styled from 'styled-components';


const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;


const App = () => {
    return <div>
        <Button>Normal Button</Button>
        <TomatoButton>Tomato Button</TomatoButton>
    </div>
}

export default App;