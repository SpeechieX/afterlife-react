import React, { useEffect, useRef, useState } from "react";
import Image from "./../../assets/img/logo-main.png";
import Button from "./Button";

import { Link } from "react-router-dom";

import WalletModal from "./Modal";

import { ethers } from "ethers";

const Navbar = (props) => {
	const { Web3 } = props;

	const [navBackground, setNavBackground] = useState(false);
	const [unlocked, setUnlocked] = useState(null);
	const [modalShow, setModalShow] = React.useState(false);

	const [status, setStatus] = useState({ page: "Home", connected: false });

	const navRef = useRef();
	navRef.current = navBackground;

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 50;
			if (navRef.current !== show) {
				setNavBackground(show);
			}
		};
		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const styles = {
		body: {
			backgroundColor: navBackground ? "#000" : "#00000030",
			transition: "1400ms ease",
			height: "70px",
			position: "fixed",
			top: 0,
			right: 0,
			left: 0,
			width: "100%",
			zIndex: +100,
		},
		button: {
			color: "#ffffff00",
		},
		container: {
			maxWidth: "1500px",
			margin: "0 auto",
		},
		logo: {
			height: "50px",
			marginTop: "10px",
			marginLeft: "20px",
		},
		menu: {
			display: "inline",
			paddingLeft: "30px",
			paddingRight: "10px",
			color: "white",
			textTransform: "none",
			cursor: "pointer",
		},
	};

	return (
		<header className="" style={styles.body}>
			<div style={styles.container}>
				<div className="float-left">
					<img src={Image} alt={"logo"} style={styles.logo} />
				</div>
				<div className="float-right">
					<ul className="menu" style={styles.menu}>
						<Link to="/mint">
							<h5 style={styles.menu}>Mint</h5>
						</Link>
						<h5 style={styles.menu}>Trap</h5>
						<WalletModal
							Web3={Web3}
							show={modalShow}
							onHide={() => setModalShow(false)}
							unlocked={unlocked}
						/>
						<Link to="#" onClick={() => setModalShow(true)}>
							{console.log(unlocked)}
							<Button
								theme={unlocked === null ? "trans" : "red"}
								label={unlocked === null ? "CONNECT WALLET" : "CONNECTED"}
								style={styles.button}
								height={"45px"}
							/>
						</Link>
						<Button
							height={"45px"}
							theme={false}
							label={"X"}
							style={styles.button}
						/>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
