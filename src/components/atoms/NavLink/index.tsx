import { NavContext } from "@/context/NavContext";
import React, { useContext, useEffect } from "react";

const NavLink = ({ navLinkId, scrollToId }: any) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
  };
  const className = activeNavLinkId === navLinkId ? "activeClass" : "";

  useEffect(() => {
    console.log("activeNavLinkId ", activeNavLinkId === navLinkId);
  }, [activeNavLinkId]);
  return (
    <span id={navLinkId} onClick={handleClick} className={className}>
      <p> {navLinkId}</p>
    </span>
  );
};

export default NavLink;
