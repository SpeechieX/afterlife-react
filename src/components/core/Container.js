import React from "react";

const Container = ({ children }, props) => {
	const styles = {
		container: {
			height: "800px",
			width: "100%",
			display: "flex",
		},
	};
	return (
		<section className="container mx-auto" styles={styles.container}>
			{children}
		</section>
	);
};

export default Container;
