import React from "react";

const Button = (props) => {
	const { theme, label, height } = props;

	const styles = {
		button: {
			background:
				theme === "dark" ? "#000" : theme === "red" ? "#9E0B0F" : "transparent",
			border: "1px solid #9E0B0F",
			height: height ? height : "60px",
		},
	};
	return (
		<button className="button" style={styles.button}>
			<h6 className="button_label">{label ? label : null}</h6>
		</button>
	);
};

export default Button;
