import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex; //flex-direction: row -> Standard behavior
  width: 100%;
  justify-content: flex-start;

  input {
    border: 1px solid grey;
    border-radius: 8px;
    margin-right: 10px;
    padding: 10px;
    width: 200vh;

    // &:focus {
    //   border: 1px solid blue;
    // }
  }

  button {
    background-color: rgb(35, 134, 54);
    color: white;
    font-weight: bold;
    width: 20vh;
    text-align: center;
    height: 40px;
    font-size: 18px;
    border-radius: 6px;

    &:hover {
      background-color: rgb(50, 173, 71);
    }
  }
`;
