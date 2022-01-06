export class Web3Mockware {
	constructor(properties = {}) {
		// maxTokenCount = 100, tokensAlreadySold = 0,requestTime = 2000, pendingTime= 5000, eventDelay = 1000, externalMintRate = 2000

		function Prop(prop, defaultVal) {
			if (properties["prop"]) {
				return prop;
			} else {
				return defaultVal;
			}
		}

		let maxTokenCount;
		let requestTime;
		let pendingTime;
		let eventDelay;
		let externalMintRate;

		this.data.maxTokenCount = Prop("maxTokenCount", 100);
		this.requestTime = Prop("requestTime", 2000);
		this.pendingTime = Prop("pendingTime", 5000);
		this.eventDelay = Prop("eventDelay", 1000);
		this.externalMintRate = Prop("externalMintRate", 2000);

		const tokensAlreadySold = Prop("tokensAlreadySold", 0);

		if (tokensAlreadySold > 0) {
			this.data.totalSupply = Math.min(maxTokenCount, tokensAlreadySold);
			this.startSale();
		}
	}

	zeroAddress = "0x0000000000";
	myAddress = "0xABCDEF1234";

	state = "initial"; //initial, loading, loaded
	data = {
		// maxTokenCount: 100,
		totalSupply: 0,
		myTokens: [],

		saleStarted: false,
	};
	pending = false;
	pendingTime;
	requested = false;
	requestTime;

	eventDelay;

	uriBase =
		"https://e4079juqg8.execute-api.us-east-2.amazonaws.com/default/ghostbusters-metadata-microservice?token=";
	tokenURI(tokenId) {
		return this.uriBase + tokenId;
	}

	request(mintQty) {
		if (this.data.totalSupply + mintQty <= this.data.maxTokenCount) {
			let submitTx = window.confirm(
				"This is a placeholder for a Metamask tx request window. Press OK to simulate user submitting tx. Press cancel to simulate user cancelling tx.",
			);
			console.log("submit:", submitTx);

			this.requested = false;
			if (submitTx) {
				this.pending = true;

				this.Transaction("submit", mintQty);

				setTimeout(this.finaliseTx.bind(this), this.pendingTime, mintQty);
			} else {
				this.Transaction("cancel", mintQty);
			}
		} else {
			let failTx = window.confirm(
				"Tx will fail because of total supply limit. IRL, metamask would not let you submit tx that would fail.",
			);
			this.requested = false;
			this.Transaction("cancel", mintQty);
		}
	}
	finaliseTx(mintQty) {
		let confirmTx = window.confirm(
			"This is a placeholder for whether the tx is successful or not. Press OK to simulate a successful tx. Press cancel to simulate tx failing.",
		);
		console.log("confirm tx:", confirmTx);

		this.pending = false;

		if (confirmTx) {
			console.log(
				this.data.totalSupply,
				mintQty,
				this.data.maxTokenCount,
				this.data.totalSupply + mintQty,
			);
			if (this.data.totalSupply + mintQty <= this.data.maxTokenCount) {
				this.Transaction("confirm", mintQty);

				setTimeout(
					this._mintBatch.bind(this),
					this.eventDelay,
					mintQty,
					this.myAddress,
				);
			} else {
				alert("Tx failed because it would exceed total supply limit");
				this.Transaction("fail", mintQty);
			}
		} else {
			this.Transaction("fail", mintQty);
		}
	}

	unlock() {
		if (this.state !== "initial") {
			console.error("Already unlocked");
			return;
		}

		this.state = "loading";

		let unlockPrompt = window.confirm(
			"This is a placeholder for Metamask requesting permission for this site to access it. Click OK to simulate user granting permission. Click cancel to deny.",
		);

		if (unlockPrompt) {
			setTimeout(this._unlock.bind(this), 5000);
		} else {
			this.state = "initial";
		}
	}
	_unlock() {
		this.state = "loaded";
		this.doUnlockCallbacks();
	}

	#unlockCallbacks = [];

	onUnlock(callback) {
		this.#unlockCallbacks.push(callback);
	}

	doUnlockCallbacks() {
		for (let i = 0; i < this.#unlockCallbacks.length; i++) {
			this.#unlockCallbacks[i]();
		}
	}

	startSale() {
		// if(this.state !== "loaded") {
		//     console.error("Wallet not unlocked");
		//     return;
		// }
		if (this.data.saleStarted) {
			console.error("Sale already started");
			return;
		}
		this.data.saleStarted = true;

		this.doEventCallbacks("StartSale");

		this.#externalMint = setTimeout(
			this.mintHappens.bind(this),
			this.externalMintRate,
		);
	}

	#externalMint;
	mintHappens() {
		if (this.data.totalSupply === this.data.maxTokenCount) {
			//Sold out
		} else {
			let tokensToMint = Math.min(
				this.data.maxTokenCount - this.data.totalSupply,
				Math.ceil(Math.random() * 3),
			);
			let minter =
				"0x" +
				Math.round(Math.random() * 0xffffffffff)
					.toString(16)
					.toUpperCase();
			while (minter === this.myAddress) {
				minter =
					"0x" +
					Math.round(Math.random() * 0xffffffffff)
						.toString(16)
						.toUpperCase();
			}

			this._mintBatch(tokensToMint, minter);

			const nextMint =
				this.externalMintRate + Math.random() * this.externalMintRate;

			this.#externalMint = setTimeout(this.mintHappens.bind(this), nextMint);
		}
	}

	mint(quantity) {
		quantity = parseInt(quantity);
		if (this.state !== "loaded") {
			console.error("Wallet not unlocked");
			return;
		}
		if (this.pending || this.requested) {
			console.error("Already transacting");
			return;
		}

		this.requested = true;
		this.Transaction("request", quantity);
		setTimeout(this.request.bind(this), this.requestTime, quantity);
	}

	_mint(_to) {
		this.data.totalSupply++;

		let tokenId = this.data.totalSupply;

		if (this.state !== "loaded") return;
		const args = {
			_to,
			_from: this.zeroAddress,
			_tokenId: tokenId,
		};

		this.doEventCallbacks("Transfer", args);
	}

	_mintBatch(qty, _to) {
		for (let i = 0; i < qty; i++) {
			this._mint(_to);
		}
	}

	onTransaction(stage, callback) {
		if (typeof this.#transactionCallbacks[stage] === "undefined") {
			console.error("Transaction stage does not exist:", stage);
			return;
		}

		this.#transactionCallbacks[stage].push(callback);
	}

	#transactionCallbacks = {
		request: [],
		submit: [],
		confirm: [],
		fail: [],
		cancel: [],
	};
	Transaction(stage, mintQty) {
		if (!mintQty) mintQty = 0;
		for (let i = 0; i < this.#transactionCallbacks[stage].length; i++) {
			this.#transactionCallbacks[stage][i](mintQty);
		}
	}

	#eventCallbacks = {
		Transfer: [],
		StartSale: [],
	};
	onEvent(event, callback) {
		if (typeof this.#eventCallbacks[event] === "undefined") {
			console.error("Event does not exist:", event);
			return;
		}

		this.#eventCallbacks[event].push(callback);
	}
	doEventCallbacks(event, args) {
		if (!args) args = {};

		if (event === "Transfer") {
			if (args._from === this.myAddress) {
				this.data.myTokens.splice(this.data.myTokens.indexOf(args._tokenId), 1);
			}
			if (args._to === this.myAddress) {
				this.data.myTokens.push(args._tokenId);
			}
		}

		for (let i = 0; i < this.#eventCallbacks[event].length; i++) {
			this.#eventCallbacks[event][i](args);
		}
	}
}
