import Nav from "@/components/molecules/nav";
import { useNav } from "@/hooks/useNav";
import React from "react";
import * as S from "./styles";
import AboutContainer from "@/components/organisms/AboutContainer";
const HomeTemplate = () => {
  const homeRef = useNav("Home");
  const aboutRef = useNav("About");
  const contactRef = useNav("Contact");
  const portfolioRef = useNav("Portfolio");
  return (
    <S.Container>
      {" "}
      <Nav />
      <div>
        <S.DivHome ref={homeRef} id="homeContainer">
        <AboutContainer />
        </S.DivHome>
        <S.DivAbout ref={aboutRef} id="aboutContainer">
          about
        </S.DivAbout>
        <S.DivContact ref={contactRef} id="contactContainer">
          Contact
        </S.DivContact>
        <S.DivContact ref={portfolioRef} id="portifolioContainer">
        portfolio
        </S.DivContact>
      </div>
    </S.Container>
  );
};

export default HomeTemplate;
