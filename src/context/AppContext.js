import React, { useReducer } from "react";

import { WalletContext } from "./WalletContext";
import { NavigationContext } from "./NavigationContext";

import { Web3Mockware } from "./context/Web3Mockware";

// Bring in Actions

const INITIAL_ROUTE = "HOME";

const reducer = (state, action) => {
	switch (action.type) {
		case "HOME":
			return () => {};
		case "MINT":
			return () => {};
		case "TRAP":
			return () => {};
		default:
			throw new Error("issue initializing");
	}
};

export const ApplicationContext = ({ children }) => {
	const Web3 = new Web3Mockware();

	return (
		<WalletContext.Provider value={Web3}>
			<NavigationContext.Provider value={""}>
				{children}
			</NavigationContext.Provider>
		</WalletContext.Provider>
	);
};
