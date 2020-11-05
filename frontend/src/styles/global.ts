import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html {
    font-size: 16px;
    --e-global-color-primary: rgb(223, 046, 048);
    --e-global-color-secondary: rgb(000, 178, 051);
    --e-global-color-text: rgb(53,51,51);
    --e-global-color-background:rgb(225,224,224) ;
    --e-global-color-white:rgb(250,250,250) ;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body, input, button {
    font-family: 'Questria', sans-serif;
    background: var(--e-global-color-background);
    color: var(--e-global-color-text);
    text-align: left;
    font-weight: 400;
    letter-spacing: 0.4px; 
    font-size: 1rem;
  }

  h1,h2,h3,h4,button, a {
    font-family: 'Open Sans', sans-serif;
  }
  strong {
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 0.26px
  }

  h1 {
    font-size: 2.1rem;
    letter-spacing: 0.84px;
  }

  h2 {
    font-size: 1.8rem;
    letter-spacing: 0.72px;
  }

  h3 {
    font-size: 1.5rem;
    letter-spacing: 0.6px;
  }

  h4 {
    font-size: 1.3rem;
    letter-spacing: 0.52px;
  }

  h5 {
    font-size: 1.2rem;
    letter-spacing: 0.48px;
  }

  p {
    font-size: 1rem;
    letter-spacing: 0.36px;
    margin-bottom: 1vh;
  }

  button {
    cursor: pointer
  }

  a, button {
    opacity: 1;
    transition: 0.4s ease-in-out opacity;

    &:hover {
      opacity: 0.8;
    }
  }

  strong {
    font-size: 1rem;  
  }

  @media (min-width: 800px) {
    html {
      font-size: 20px;
    }
  }
`;
