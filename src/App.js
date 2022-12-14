import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// @SECTIONS
import Opening from "./screens/Opening";
import Intro from "./screens/Intro";
// import Vignettes from "./screens/Vignettes";
import GhostTraps from "./screens/GhostTraps";
import Break from "./components/core/Break";
import MiniPufts from "./screens/MiniPufts";
import FAQ from "./screens/FAQ";
import Roadmap from "./screens/Roadmap";
import Announcement from "./screens/Announcement";
import Footer from "./screens/Footer";

import Mint from "./screens/Mint";

import WalletModal from "./components/core/Modal";
import Button from "./components/core/Button";

import Image from "./assets/img/logo-main.png";

//@CONTEXT
import { WalletContext } from "./context/WalletContext";

import { unlockWallet } from "./redux/actions/walletActions";

// @WEB3 CLASS
import { Web3Mockware } from "./context/Web3Mockware";

function App({ history }) {
	const Web3 = new Web3Mockware();

	const dispatch = useDispatch();

	const [navBackground, setNavBackground] = useState(false);
	const [unlocked, setUnlocked] = useState(null);
	const [modalShow, setModalShow] = React.useState(false);

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

	const handleStatus = (adr) => {
		setUnlocked(adr);
		dispatch(unlockWallet());
	};

	const styles = {
		body: {
			backgroundColor: navBackground ? "#000" : "#00000030",
			transition: "1500ms ease",
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
		<Router>
			<WalletContext.Provider value={Web3}>
				<div className="App">
					{/* Navbar Begins Here */}
					<header className="flex-col nav_container" style={styles.body}>
						<div className="nav_controls">
							<div className="float-left">
								<Link to="/">
									<img src={Image} alt={"logo"} style={styles.logo} />
								</Link>
							</div>
							<div className="float-right">
								<ul className="menu" style={styles.menu}>
									<Link to="/mint">
										<h5 style={styles.menu}>Mint</h5>
									</Link>
									<h5 style={styles.menu}>Trap</h5>

									{/* Select Wallet Begins Here */}
									<WalletModal
										Web3={Web3}
										show={modalShow}
										onHide={() => setModalShow(false)}
										handleStatus={handleStatus}
									/>
									<Link to="#" onClick={() => setModalShow(true)}>
										<Button
											theme={unlocked === null ? "trans" : "red"}
											label={unlocked === null ? "CONNECT WALLET" : "CONNECTED"}
											style={styles.button}
											height={"45px"}
										/>
									</Link>
									{/* Select Wallet Ends Here */}

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
					{/* Navbar Ends Here */}

					{/* Routes */}
					<Route exact path="/">
						<main className="text-center">
							<Opening />
							<Intro />
							<Announcement />
							{/* <Vignettes /> */}
							<Break size={"lg"} />
							<GhostTraps />
							<Break size={"lg"} />
							<MiniPufts />
							<Break size={"lg"} />
							<FAQ />
							<Break size={"lg"} />
							<Roadmap />
							<Footer />
						</main>
					</Route>
					<Route exact path="/mint">
						<Mint Web3={Web3} />
					</Route>
				</div>
			</WalletContext.Provider>
		</Router>
	);
}

export default App;
