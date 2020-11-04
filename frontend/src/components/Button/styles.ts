import styled from 'styled-components';

export const Container = styled.button`
  .remove {
    background-color: #fff;
  }

  width: 174px;
  height: 50px;
  display: flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #365df0;
  border-radius: 5px;
  padding: 1.5vh 2vh;
  opacity: 1;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.8;
  }
`;
