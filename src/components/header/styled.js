import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex; //flex-direction: row -> Standard behavior
  width: 100%;

  input {
    border: 1px solid black;
    min-width: 400px;
    border-radius: 8px;
    margin-right: 10px;
    padding: 10px;
  }

  button {
    background-color: rgb(35, 134, 54);
    color: white;
    font-weight: bold;
    min-width: 4%;
    text-align: center;
    height: 40px;
    font-size: 18px;
    border-radius: 6px;

    &:hover {
      background-color: rgb(50, 173, 71);
    }
  }
`;
