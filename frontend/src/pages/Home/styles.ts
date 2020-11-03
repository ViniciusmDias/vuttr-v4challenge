import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-bottom: 2vh;
`;
export const Description = styled.h2`
  margin-bottom: 4vh;
`;
export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Search = styled.form`
  display: flex;
  align-items: center;

  input[type='text'] {
    background: #f5f4f6 0% 0% no-repeat padding-box;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    padding: 1.5vh 2vh;
    height: 50px;
  }
  input[type='checkbox'] {
    width: 15px;
    height: 15px;
    margin: 0 1vh 0 2vh;
  }

  label {
    flex: 1;
  }
  button {
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
    cursor: pointer;
  }
`;
export const Tools = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vh 0;
`;
export const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1.5vh 2vh;
  border: 3px solid #000;
  margin-bottom: 2vh;
  background-color: #fff;
  border-radius: 5px;

  a {
    color: #365df0;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: #fff;
    color: #170c3a;

    svg {
      margin: 0 1vh 0 0;
      font-weight: 600;
    }
  }
  div {
    width: 100%;
  }
`;
