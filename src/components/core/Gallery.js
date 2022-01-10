import React, { useState } from "react";
import { createPurchase } from "../../redux/actions/walletActions";
import { Card, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { useSpring, animated } from "react-spring";

import ghostbusters_logo from "../../assets/img/logo-small.png";

const Gallery = () => {
	const dispatch = useDispatch();

	const saleReady = useSelector((state) => state.wallet.saleStarted);

	const authorizer = useSelector((state) => state.wallet.walletSynced);

	const items = [
		{
			title: "One",
			url: "https://i.imgur.com/DvUMNSD.png",
			price: 1,
		},
		{
			title: "Two",
			url: "https://i.imgur.com/US0Tarh.png",
			price: 3,
		},
		{
			title: "Three",
			url: "https://i.imgur.com/BRm37Rz.png",
			price: 1,
		},
		{
			title: "Four",
			url: "https://i.imgur.com/7Ahoaym.png",
			price: 2,
		},
		{
			title: "X",
			url: "https://i.imgur.com/a9Kc0Z1.png",
			price: 3,
		},
	];

	return (
		<div className="text-center">
			<div className="mint_collection">
				{items.map((item) => (
					<div key={item.title} className="mint_card_padding ">
						<Card.Body
							className="mint_cards hover:animate-pulse delay-75 transition-all"
							style={{
								backgroundImage:
									saleReady === true && saleReady
										? `url(${item.url})`
										: `url(${ghostbusters_logo})`,
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								backgroundSize:
									saleReady === true && saleReady ? "cover" : null,
								objectFit: "cover",
							}}
						></Card.Body>
						<div className="mint_attributes">
							<p className="mint_title">{item.title}</p>
							<p className="mint_price">{item.price} ETH 1/1</p>
							<p
								className="mint_buying_option hover:animate-pulse delay-50 "
								onClick={
									authorizer === true
										? () => dispatch(createPurchase(item.price))
										: () => console.log("wallet is not logged in")
								}
							>
								{authorizer === true ? "Buy Now" : null}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Gallery;
