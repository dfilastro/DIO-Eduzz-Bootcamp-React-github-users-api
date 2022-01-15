import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid rgb(8, 22, 35);
  margin: 16px 16px;
  width: 30%;
  height: 150px;
  align-content: center;
  // background-color: rgb(8, 22, 35);
  border-radius: 8px;
`;

export const WrapperTittle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 8px 0;
`;

export const WrapperFullName = styled.div`
  margin-bottom: 8px;
`;

export const WrapperLink = styled.a`
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;
