/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.main`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  padding: 5vh 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;

    h1 {
      width: 100%;
    }

    h2 {
      width: 100%;
    }

    button {
      margin-bottom: 0;
    }
  }

  h1 {
    margin-bottom: 2vh;
  }

  h2 {
    margin-bottom: 4vh;
  }

  button {
    width: 25%;
    height: 2.5rem;
    display: flex;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #365df0;
    border-radius: 0.25rem;
    padding: 1.5vh 2vh;
    cursor: pointer;
    margin-bottom: 1vh;
  }
`;

export const SearchBar = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
    flex: 1;

    input[type='text'] {
      width: 35%;
      margin-right: 1vh;
      margin-bottom: 0;
    }

    label {
      margin-bottom: 0;
    }
  }

  input[type='text'] {
    background: #f5f4f6 0% 0% no-repeat padding-box;
    border: 1px solid #ebeaed;
    border-radius: 0.25rem;
    padding: 1.5vh 2vh;
    height: 2.5rem;
    margin-bottom: 1vh;
  }

  label {
    display: flex;
    align-items: center;
    flex: 1;
    height: 2.5rem;
    padding: 1.5vh 2vh;
    margin-bottom: 1vh;

    input[type='checkbox'] {
      width: 0.7rem;
      height: 0.7rem;
      margin: 0 1vh 0 2vh;
    }
  }
`;

export const ListTools = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2vh 0;
`;

// modal
export const Modal = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100vh;
  opacity: 0;
  visibility: hidden;
  transition: all 0.6s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000009e;
  cursor: pointer;
`;

export const Form = styled.form<FormProps>`
  border: 3px solid #000;
  width: 45vw;
  height: 80vh;
  background-color: #fff;
  padding: 2vh 8vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: default;

  input {
    border: 0;
    color: #3a3a3a;
    background: #f5f4f6 0% 0% no-repeat padding-box;
    border: 2px solid #ebeaed;
    border-radius: 5px;
    padding: 1.5vh 2vh;
    height: 50px;

    ${(props) => props.hasError
      && css`
        border-color: #c53030;
      `}
  }

  div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 2vh;
    }
  }
  label {
    display: flex;
    flex-direction: column;
  }
  .buttons {
    justify-content: space-between;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
