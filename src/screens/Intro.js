import React from "react";
import background from "../assets/img/header-clouds.png";
import Button from "./../components/core/Button";
import mainlogo from "./../assets/img/logo-large.png";

const Intro = () => {
	const styles = {
		body: { margin: "0 auto" },
		heading: {
			color: "white",
			marginTop: "100px",
			fontSize: "3.25rem",
			lineHeight: 1.3,
			marginBottom: "30px",
		},
		intro: {
			width: "99vw",
			maxWidth: "750px",
		},
		paragraph: {
			color: "white",
			fontSize: "24px",
			lineHeight: 1.5,
			justifyContent: "center",
		},
	};
	return (
		<div style={styles.intro} className="mx-auto">
			<h1 style={styles.heading} className="text-center">
				MINI-PUFTS ARE COMING TO THE BLOCKCHAIN
			</h1>
			<p className="text-center" style={styles.paragraph}>
				10,500 Mini-Pufts have burst onto Ethereum and created unbelievable
				chaos. Imagine fire and brimstone coming down from the sky. Dogs and
				cats, living together. Mass hysteria. Mint your own totally unique
				Mini-Puft collectible, created from hundreds of elements of destruction!
				We will be offsetting the expected carbon emissions from this launch.
			</p>
		</div>
	);
};

export default Intro;
