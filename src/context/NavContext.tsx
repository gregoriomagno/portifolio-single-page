import React, { useState } from 'react';


export const NavContext = React.createContext({} as any);

interface NavProviderProps {
	children : React.ReactNode
}

const NavProvider = ({ children  }: NavProviderProps) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
	};

	return (
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	);
};

export default NavProvider;
