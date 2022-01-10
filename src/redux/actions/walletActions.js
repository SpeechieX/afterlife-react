import {
	ERROR,
	REQUEST_WALLET,
	REQUEST_WALLET_SUCCESS,
	REQUEST_WALLET_FAILURE,
	PURCHASE_FAILURE,
	PURCHASE_SUCCESS,
	CREATE_PURCHASE,
	START_SALE,
	TOKEN_ASSIGNED,
} from "../constants/walletConstants";

import { Web3Mockware } from "../../context/Web3Mockware";

const wallet = new Web3Mockware();

export const unlockWallet = () => async (dispatch) => {
	try {
		dispatch({
			type: REQUEST_WALLET,
		});

		wallet.unlock();

		dispatch({
			type: REQUEST_WALLET_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: REQUEST_WALLET_FAILURE,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const startSale = () => async (dispatch) => {
	try {
		dispatch({
			type: START_SALE,
			payload: {
				saleStarted: true,
			},
		});

		wallet.startSale();

		const getToken = async (token) => {
			const key = await wallet.tokenURI(token);
			wallet.data.myTokens.push(key);
			dispatch({
				type: TOKEN_ASSIGNED,
				payload: key,
			});
			console.log(wallet.data);
		};

		getToken("TESTER");
	} catch (error) {
		dispatch({
			type: ERROR,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const createPurchase = (amount) => async (dispatch) => {
	try {
		dispatch({
			type: CREATE_PURCHASE,
		});

		wallet.mint(amount);

		dispatch({
			type: PURCHASE_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: PURCHASE_FAILURE,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
