import React from "react";

const Break = (props) => {
	const { size } = props;
	let styles = {
		backgroundColor: "black",
		height: size === "lg" ? "100px" : size === "md" ? "70px" : "50px",
		width: "100%",
	};
	return <div style={styles}>{""}</div>;
};

export default Break;
