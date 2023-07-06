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
  /* padding: 105px 0px; */
  margin-left: auto;
  margin-right: auto;

  max-width: 1400px;
`;
export const DivHome = styled.section`
  display: flex;
  height: 86.5vh;

  color: white;
  background-color: blue;
`;

// export const DivAbout = styled.div`
//   display: flex;
//   height: 84.5vh;
//   background-color: blue;
// `;

// export const DivContact = styled.div`
//   display: flex;
//   height: 700px;
// `;
export const DivPortifolio = styled.div`
  display: flex;
  height: 86.5vh;
  background-color: grey;
`;
