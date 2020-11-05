import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1.5vh 2vh;
  border: 3px solid var(--e-global-color-text);
  margin-bottom: 2vh;
  background-color: var(--e-global-color-white);
  border-radius: 0.25rem;

  header {
    flex: 1;
    display: flex;
    justify-content: space-between;

    a {
      flex: 1;
      display: flex;
      align-items: center;
      color: var(--e-global-color-primary);
    }

    button {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border: 0;
      padding-right: 0;
      padding-left: 0;
      background-color: transparent;
      color: var(--e-global-color-secondary);

      svg {
        margin: 0.5vh 1vh 0 0;
        font-weight: 600;
      }
    }
  }
`;
