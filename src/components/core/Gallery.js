import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Card, Row } from "react-bootstrap";

const Gallery = () => {
	const numberDemo = useSpring({ number: 100, from: { number: 0 } });

	const opacity = useSpring({
		delay: 20,
		opacity: 1,
		from: { opacity: 0 },
	});

	const [image, setImage] = useState(0);

	// const svg = useSpring({ x: 100, from: { x: 0 } });

	// First Set All Images In a Row
	// Map over the [images]
	// Define The Transition Starting Point
	// Defind the Range
	// Define the Opacity and Transition Time

	const items = [
		{
			title: "One",
			url: "https://i.imgur.com/DvUMNSD.png",
		},
		{
			title: "Two",
			url: "https://i.imgur.com/US0Tarh.png",
		},
		{
			title: "Three",
			url: "https://i.imgur.com/BRm37Rz.png",
		},
		{
			title: "Four",
			url: "https://i.imgur.com/7Ahoaym.png",
		},
		{
			title: "X",
			url: "https://i.imgur.com/a9Kc0Z1.png",
		},
	];

	return (
		<div className="text-center">
			<div className="mint_collection">
				{items.map((item) => (
					<div
						className="mint_cards"
						style={{
							backgroundImage: `url(${item.url})`,
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "cover",
							objectFit: "cover",
						}}
					></div>
				))}
			</div>
		</div>
	);
};

export default Gallery;
