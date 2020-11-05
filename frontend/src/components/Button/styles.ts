import styled from 'styled-components';

export const Container = styled.button`
  width: 174px;
  height: 50px;
  display: flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  color: var(--e-global-color-background);
  background-color: var(--e-global-color-primary);
  border-radius: 0.25rem;
  padding: 1.5vh 2vh;
  opacity: 1;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.8;
  }
`;
