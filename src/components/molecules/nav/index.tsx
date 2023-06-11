import Logo from '@/components/atoms/Logo';
import NavLink from '@/components/atoms/NavLink';
import React from 'react'
import * as S from './styles'
 const navLinks = [
	{ navLinkId: 'Home', scrollToId: 'homeContainer' },
	{ navLinkId: 'About', scrollToId: 'aboutContainer' },
	{ navLinkId: 'Contact', scrollToId: 'contactContainer' },
];

const NavBar = () => {
  return (
 
        <S.Nav>
			<Logo />
			<S.ContainerLinks>
			{navLinks.map(({ navLinkId, scrollToId }, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
			))}
			</S.ContainerLinks>
		</S.Nav>
   
  )
}

export default NavBar