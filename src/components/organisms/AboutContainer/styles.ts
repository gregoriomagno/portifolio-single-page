import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: white;
`;
export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  justify-content: center;
  h1 {
    font-size: 58px;
  }
`;
export const ContainerRight = styled.div`
  display: flex;

  width: 100%;
`;

export const WrapperPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* background-color:white; */
  img {
    border-radius: 10%;
  }
`;
