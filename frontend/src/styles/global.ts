import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html {
    font-size: 16px;
    --e-global-color-primary: #170C3A;
    --e-global-color-secondary: #54595F;
    --e-global-color-text: #7A7A7A;
    --e-global-color-background: #eeeeee;
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
    font-family: 'Source Sans Pro', sans-serif;
    background: var(--e-global-color-background);
    color: var(--e-global-color-primary);
    text-align: left;
    font-weight: 400;
    letter-spacing: 0.4px; 
    font-size: 1rem;
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
