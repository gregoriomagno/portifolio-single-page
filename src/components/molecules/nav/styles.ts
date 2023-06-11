import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  position: sticky;
  z-index: 10;
  top: 0;
  padding: 2.4rem 4rem;
  color: white;
  justify-content: space-between;
  background-color: black;
  height: fit-content;
  border-bottom: 1px solid grey;
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
