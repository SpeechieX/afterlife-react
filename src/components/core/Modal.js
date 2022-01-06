import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Button from "./Button";

import { Link } from "react-router-dom";

const WalletModal = (props) => {
	const { Web3 } = props;

	// Unlocked State
	const [unlocked, setUnlocked] = useState(null);

	const CONTRACT_ADDRESS = Web3.myAddress;

	Web3.onUnlock(() => {
		setUnlocked(CONTRACT_ADDRESS);
		localStorage.setItem("w-a", unlocked);
		console.log(unlocked, "<-----");
	});

	console.log("wallet available now");
	const styles = {
		modal: {
			borderRadius: "10px",
			margin: "0 auto",
		},
		img: {
			maxWidth: "80%",
			margin: "0 auto",
		},
	};
	return (
		<Modal
			{...props}
			size="md"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			style={styles.modal}
		>
			<Modal.Body className="text-center" style={styles.modal}>
				<Link to="#" onClick={() => Web3.unlock()}>
					<img
						src="https://i.imgur.com/zgy8JXx.png"
						alt={""}
						style={styles.img}
					/>
				</Link>
				<Link to="#" onClick={() => Web3.unlock()}>
					<img
						src="https://i.imgur.com/tYDfnig.png"
						alt={""}
						style={styles.img}
					/>
				</Link>
			</Modal.Body>
		</Modal>
	);
};

export default WalletModal;
