import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  max-width: 100%;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  vertical-align: middle;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  min-width: 70%;

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
    width: 80px;
  }
`;

export const WrapperImg = styled.img`
  border-radius: 50%;
  width: 180px;
  margin: 30px;
`;

export const WrapperStatusCount = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;

  div {
    margin: 10px;
    text-align: center;
  }

  h4 {
    max-width: 100px;
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
    font-size: 18px;

    &:hover {
      color: blue;
    }
  }
`;

export const WrapperContainer = styled.div`
  position: relative;
  top: 50%;
  vertical-align: middle;
  width: 100%;
  margin: auto;
`;
