import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from "./../assets/img/trap-poster.jpg";
const GhostTraps = () => {
	const styles = {
		img: {
			height: "380px",
		},
		header: {
			color: "white",
			textAlign: "left",
			fontSize: "2rem",
		},
		paragraph: {
			color: "white",
			textAlign: "left",
		},
		row: {
			height: "800px",
			border: "1px solid blue",
			margin: "0 auto",
		},
		container: {
			width: "90vw",
			maxWidth: "1200px",
			margin: "0 auto",
		},
		col2: {
			marginTop: "80px",
		},
	};
	return (
		<div style={styles.container}>
			<Row styles={styles.row}>
				<Col sm={12} md={6} lg={6}>
					<img
						src={Image}
						alt={"Ghost Traps"}
						style={styles.img}
						className="img-fluid"
					/>
				</Col>
				<Col sm={12} md={6} lg={6} style={styles.col2}>
					<h3 style={styles.header}>Ghost Traps</h3>
					<p style={styles.paragraph}>
						At 4:00 pm PT on November 17th, 1,000 ghost trap NFTs will be
						dropped into the Ethereum community, each claimable and totally free
						(plus gas.) What can you do with a ghost trap NFT? Trap a ghost, of
						course. But not just any ghosts, it will only work for the special
						breed of 500 known as “The Mob.”
					</p>
				</Col>
			</Row>
		</div>
	);
};

export default GhostTraps;
