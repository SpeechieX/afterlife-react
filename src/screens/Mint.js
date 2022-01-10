import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import background from "../assets/img/header-clouds.png";
import { Row } from "react-bootstrap";
// import mainlogo from "../assets/img/logo-large.png";
// import smalllogo from "../assets/img/logo-small.png";
// import Button from "../components/core/Button";
import Gallery from "../components/core/Gallery";

import { WalletContext } from "../context/WalletContext";

import { startSale } from "../redux/actions/walletActions";

const Mint = (props) => {
	const Web3 = useContext(WalletContext);

	const dispatch = useDispatch();

	const authorizer = useSelector((state) => state.wallet.walletSynced);

	const [auction, setAuction] = useState(false);

	const styles = {
		body: {
			marginLeft: "60px",
			zIndex: 2,
		},
		heading: {
			paddingTop: "150px",
			color: "white",
			fontSize: "3.25rem",
		},
		opening: {
			height: "100vh",
			width: "100vw",
			backgroundImage: `url(${background})`,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundSize: "cover",
			objectFit: "cover",
		},
		container: {
			maxWidth: "1400px",
			margin: "0 auto",
			// border: "1px solid red",
			marginTop: "100px",
		},
		img: {
			marginTop: "100px",
			marginRight: "120px",
			zIndex: -10,
			overFlow: "hidden",
			maxWidth: "500px",
		},
		logosmall: {
			width: "65px",
			display: "inline",
			marginTop: "-10px",
			marginLeft: "-10px",
		},
		tagline: {
			color: "red",
		},
		text: {
			color: "white",
			width: "500px",
		},
		title: {
			color: "white",
			marginTop: "50px",
		},
	};

	const saleInitiated = () => {
		setAuction(true);
		dispatch(startSale());
	};

	Web3.onUnlock(() => {
		console.log("unlocked");
	});

	Web3.onTransaction("request", (qty) => {
		console.log("tx requested (qty", qty, ")");
	});

	return (
		<Row style={styles.opening}>
			<div style={styles.container}>
				<Row style={styles.body}>
					<h1 style={styles.title} className="text-center">
						MINT A MINI-PUFT NOW
					</h1>
					{authorizer === true ? (
						<p
							className="text-center cursor-pointer"
							onClick={() => saleInitiated()}
						>
							Click <span style={{ color: "#9e0b0f" }}>Here</span> to Select a
							Puft to mint.
						</p>
					) : (
						<p className="text-center cursor-pointer" onClick={null}>
							Connect Your Wallet First in Order to Click{" "}
							<span style={{ color: "#9e0b0f" }}>Here</span> to Select a Puft to
							mint.
						</p>
					)}
					<Gallery />
				</Row>
			</div>
		</Row>
	);
};

export default Mint;
