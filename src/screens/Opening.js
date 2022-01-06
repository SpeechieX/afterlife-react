import React from "react";
import background from "../assets/img/header-clouds.png";
import Button from "./../components/core/Button";
import mainlogo from "./../assets/img/logo-large.png";
import smalllogo from "./../assets/img/logo-small.png";
import play from "./../assets/svg/play.svg";

import { Row, Col, Container } from "react-bootstrap";

const Opening = () => {
	const styles = {
		opening: {
			backgroundImage: `url(${background})`,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundSize: "cover",
			objectFit: "cover",
			maxHeight: "850px",
		},
		logosmall: {
			width: "65px",
			display: "inline",
			marginTop: "-10px",
			marginLeft: "-10px",
		},
	};

	return (
		<div style={styles.opening}>
			<img
				src={mainlogo}
				alt="12 Days of the Afterlife"
				className="header_img_responsive"
			/>
			<div className="header_main">
				<div className="header_content_left">
					<h1 className="header_title">
						GH
						<span>
							<img style={styles.logosmall} src={smalllogo} alt={"logosmall"} />
						</span>
						STBUSTERS NFT<span className="lowercase">s</span>
					</h1>
					<h2 className="paint header_tagline">on the loose</h2>
					<p className="header_content_text">
						In celebration of the release of Ghostbusters: Afterlife, 10,500
						Mini-Pufts have come to break the internet. We tried to think of the
						most harmless thing. Something that would never ever possibly
						destroy us. We miscalculated. With your help, we can trap them.
					</p>
					<div className="header_controls">
						<Button theme={"red"} label={"MINI PUFT CHARACTER REVEAL"} />
						<Button theme={"dark"} label={"DISCORD"} />
					</div>
				</div>
				<div className="header_content_right">
					<img
						src={mainlogo}
						alt="12 Days of the Afterlife"
						className="header_main_image"
					/>
				</div>
			</div>
		</div>
	);
};

export default Opening;
