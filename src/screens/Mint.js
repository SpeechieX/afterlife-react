import React from "react";
import background from "../assets/img/header-clouds.png";
import mainlogo from "../assets/img/logo-large.png";
import smalllogo from "../assets/img/logo-small.png";
import Button from "../components/core/Button";
import { Row, Col } from "react-bootstrap";

import Gallery from "../components/core/Gallery";

const Mint = () => {
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
	return (
		<Row style={styles.opening}>
			<div style={styles.container}>
				<Row style={styles.body}>
					<h1 style={styles.title} className="text-center">
						MINT A MINI-PUFT NOW
					</h1>
					<p className="text-center">
						Check Opensea to see if you can find your own.
					</p>
					{/* Add React-Spring Gallery Here */}
					<Gallery />
				</Row>
			</div>
		</Row>
	);
};

export default Mint;
