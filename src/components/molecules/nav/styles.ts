import styled, { css } from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
 
    position: sticky;
    z-index: 10;
    top: 0;
    padding: 5vh 0 5vh 0;
    width: 90%;
    height:100%;
    max-height:16vh ;
    margin-left: auto;
    margin-right: auto;
    max-width: 1400px;
    color: white;
    justify-content: space-between;
     background-color: ${theme.default.background}; 
  
    /* background-color:red; */
  `}
`;
export const ContainerLinks = styled.div`
  display: flex;
  gap: 2.4rem;
  .activeClass {
    border-bottom-color: white;
    transition: border-bottom 0.35s ease;
    transition-delay: 0.25s;
  }
  span {
    height: fit-content;
    font-size: 18px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.2s ease;
    transition-delay: 0.15s;

    :hover {
      cursor: pointer;
      border-bottom: 1px solid white;
    }
  }
`;
