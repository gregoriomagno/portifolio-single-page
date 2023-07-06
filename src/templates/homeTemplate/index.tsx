import Nav from "@/components/molecules/nav";
import { useNav } from "@/hooks/useNav";
import React from "react";
import * as S from "./styles";
import ApresentationContainer from "@/components/organisms/ApresentationContainer";
import AboutContainer from "@/components/organisms/AboutContainer";
const HomeTemplate = () => {
  const homeRef = useNav("Home");
  // const aboutRef = useNav("About");
  // const contactRef = useNav("Contact");
  const portfolioRef = useNav("Portfolio");
  return (
    <S.Container>
      
      <Nav />
      <S.Content>
        <S.DivHome ref={homeRef} id="homeContainer">
          <ApresentationContainer />
        </S.DivHome>
        {/* <S.DivAbout ref={aboutRef} id="aboutContainer">
          <AboutContainer />
      
        </S.DivAbout> */}
        <S.DivPortifolio ref={portfolioRef} id="portifolioContainer">
          portfolio
        </S.DivPortifolio>
        {/* <S.DivContact ref={contactRef} id="contactContainer">
          Contact
        </S.DivContact> */}
      </S.Content>
    </S.Container>
  );
};

export default HomeTemplate;
