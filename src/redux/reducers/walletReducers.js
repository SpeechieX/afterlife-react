import {
	PURCHASE_FAILURE,
	PURCHASE_SUCCESS,
	ERROR,
	REQUEST_WALLET,
	REQUEST_WALLET_SUCCESS,
	REQUEST_WALLET_FAILURE,
	CREATE_PURCHASE,
	START_SALE,
	TOKEN_ASSIGNED,
} from "../constants/walletConstants";

const initialState = {
	walletAddress: "",
	walletSynced: false,
	saleStarted: false,
	error: null,
	txSuccess: false,
	txFail: false,
	token: null,
};

export const txReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_SALE: {
			return {
				...state,
				saleStarted: true,
			};
		}
		case REQUEST_WALLET: {
			return {
				...state,
				walletAddress: "0xABBCDEF",
			};
		}
		case REQUEST_WALLET_SUCCESS: {
			return {
				...state,
				walletAddress: "0xABBCDEF",
				walletSynced: true,
			};
		}
		case REQUEST_WALLET_FAILURE: {
			return {
				...state,
				walletAddress: null,
				walletSynced: false,
				error: action.payload,
			};
		}
		case TOKEN_ASSIGNED: {
			return {
				...state,
				token: action.payload,
			};
		}
		case CREATE_PURCHASE: {
			return {
				...state,
			};
		}
		case PURCHASE_SUCCESS: {
			return {
				...state,
				txSuccess: true,
			};
		}
		case PURCHASE_FAILURE: {
			return {
				...state,
				txFail: true,
			};
		}
		case ERROR: {
			return {
				...state,
				loading: false,
				error: action.error,
			};
		}
		default:
			return state;
	}
};
