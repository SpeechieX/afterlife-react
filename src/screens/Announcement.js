import React from "react";
import { Row, Col } from "react-bootstrap";
const Announcement = () => {
	const styles = {
		twelve: {
			color: "red",
			fontSize: "96px",
			paddingRight: "20px",
			position: "relative",
		},
		caption: {
			fontSize: "45px",
			color: "white",
			marginLeft: "19px",
		},
		row: {
			height: "150px",
		},
	};
	return (
		<Row style={styles.row}>
			<h1 style={styles.caption}>
				<span style={styles.twelve} className="paint">
					12
				</span>
				<span>DAYS OF AFTERLIFE DROPS!</span>
			</h1>
		</Row>
	);
};

export default Announcement;
