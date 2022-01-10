import React from "react";
import background from "../assets/img/footer-clouds.png";
import smalllogo from "../assets/img/logo-main.png";
import Button from "./../components/core/Button";

const Footer = () => {
	const styles = {
		opening: {
			backgroundImage: `url(${background})`,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundSize: "cover",
			objectFit: "cover",
		},
	};
	return (
		<div className="footer_body" style={styles.opening}>
			<div className="footer_message_container">
				<h6 className="footer_message">
					presented by
					<span className="footer_marker animate-pulse duration-100-infinite">
						bighead club
					</span>
					And Friends
				</h6>
			</div>
			<footer className="footer_nav">
				<img src={smalllogo} alt={""} className="footer_logo" />
				<p className="footer_content">
					© 2022 Big Head Club Ltd; TM © 2022 Columbia Pictures Industries, Inc.
					All rights reserved. The web site www.twelvedaysofafterlife.com and
					The Ghostbusters: Afterlife NFT collection is owned and operated by
					Big Head Club Ltd under license from Sony Pictures Entertainment. Big
					Head Club Ltd is solely responsible for this web site and all aspects
					of NFT fulfillment pursuant to the Terms of Use.
				</p>
				<p></p>
				<div className="footer_links">
					<p className="link_padding">Terms</p>
					<p className="link_padding">Privacy</p>
					<Button label={"XX"} />
					<Button label={"XX"} />
				</div>
			</footer>
		</div>
	);
};

export default Footer;
