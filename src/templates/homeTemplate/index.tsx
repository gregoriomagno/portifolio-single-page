import Nav from "@/components/molecules/nav";
import { useNav } from "@/hooks/useNav";
import React from "react";
import * as S from "./styles";
const HomeTemplate = () => {
  const homeRef = useNav("Home");
  const aboutRef = useNav("About");
  const contactRef = useNav("Contact");
  return (
    <S.Container>
      {" "}
      <Nav />
      <div>
        <S.DivHome ref={homeRef} id="homeContainer">
         <h3>Seja bem-vindo</h3>
        </S.DivHome>
        <S.DivAbout ref={aboutRef} id="aboutContainer">
          about
        </S.DivAbout>
        <S.DivContact ref={contactRef} id="contactContainer">
          Contact
        </S.DivContact>
      </div>
    </S.Container>
  );
};

export default HomeTemplate;
