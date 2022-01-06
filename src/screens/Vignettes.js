import React from "react";
import Button from "./../components/core/Button";

const Vignettes = () => {
	const styles = {
		body: { margin: "0 auto" },
		heading: {
			color: "white",
			marginTop: "100px",
			fontSize: "2.5em",
		},
		main: {
			border: "2px solid red",
			height: "95vh",
			width: "99vw",
		},

		img: {
			float: "right",
			marginTop: "100px",
			marginRight: "120px",
			overflow: "hidden",
			zIndex: 1,
		},
		paragraph: {
			color: "white",
			fontSize: "1em",
			width: "400px",
		},
	};
	return (
		<div style={styles.main} className="mx-auto body">
			<h1 style={styles.heading} className="text-left">
				10 MOTION VIGNETTES
			</h1>
			<p className="text-left" style={styles.paragraph}>
				Starting November 8th, we will be releasing life-like Mini-Puft
				vignettes from the spooky minds of Ghostbusters: Afterlife creators Gil
				Kenan and Jason Reitman. Each digital motion print is a one of a kind
				new creation of demonic glee rendered at cinema resolution. Only one
				will be auctioned for each Day of Afterlife.
			</p>
		</div>
	);
};

export default Vignettes;
