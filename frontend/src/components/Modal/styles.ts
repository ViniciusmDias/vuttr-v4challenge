/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const ModalContainer = styled.div`
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

    ${(props) =>
    props.hasError &&
      css`
        border-color: var(--e-global-color-primary);
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
  color: var(--e-global-color-primary);
  margin-top: 8px;
`;
