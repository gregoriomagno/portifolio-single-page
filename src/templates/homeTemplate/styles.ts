import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: ${theme.default.background};
  `}
`;
export const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
`;
export const DivHome = styled.section`
  display: flex;
  height: 100vh;
  color: white;
`;

export const DivAbout = styled.div`
  display: flex;
  height: 700px;
`;

export const DivContact = styled.div`
  display: flex;
  height: 700px;
`;
export const DivPortifolio = styled.div`
  display: flex;
  height: 700px;
`;
