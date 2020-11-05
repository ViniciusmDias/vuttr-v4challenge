import styled from 'styled-components';

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
