import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "./../assets/img/mp-group-2.png";

const styles = {
	date: {
		color: "white",
		textAlign: "left",
		fontSize: "1.5rem",
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
	container: {
		width: "90vw",
		maxWidth: "1200px",
		margin: "0 auto",
	},
};
const MiniPufts = () => {
	return (
		<div className="" style={styles.container}>
			<Row>
				<Col sm={12} md={6} lg={6}>
					<h3 style={styles.date} className="date">
						Nov. 18
					</h3>
					<h1 style={styles.header}>10,500 MINI PUFTS</h1>
					<p style={styles.paragraph}>
						At 4:00 pm PT on November 17th, 1,000 ghost trap NFTs will be
						dropped into the Ethereum community, each claimable and totally free
						(plus gas.) What can you do with a ghost trap NFT? Trap a ghost, of
						course. But not just any ghosts, it will only work for the special
						breed of 500 known as “The Mob.”
					</p>
				</Col>
				<img src={Image} alt={"MiniPufts"} className="img-fluid responsive" />
			</Row>
		</div>
	);
};

export default MiniPufts;
