import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperImg = styled.img`
  border-radius: 50%;
  width: 180px;
  margin: 30px;
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 10px;
    text-align: center;
  }
`;

export const WrapperStatusGeneral = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  h3 {
    margin-right: 10px;
  }

  a {
    color: blue;
    font-size: 18px;
  }
`;
