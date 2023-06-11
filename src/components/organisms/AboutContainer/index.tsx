import React from "react";
import * as S from "./styles";
const AboutContainer = () => {
  return (
    <S.Container>
      <S.ContainerLeft>
        {" "}
        <h3>Hello, my name is Gregorio Magno</h3>
        <h1>Frontend Developer</h1>
        <h2>
          I like to create systems and websites in an agile and scalable way
        </h2>
      </S.ContainerLeft>
      <S.ContainerRight>
        <S.WrapperPhoto>
          {" "}
          <img height={'300px'} src="https://media.licdn.com/dms/image/C4E03AQELQrWtdZx_hQ/profile-displayphoto-shrink_200_200/0/1617722679597?e=1692230400&v=beta&t=rSIev94bGJZwUtyvsXy2zFgdwRi61z0LSgRNHLbxVpk" />
        </S.WrapperPhoto>
      </S.ContainerRight>
    </S.Container>
  );
};

export default AboutContainer;
