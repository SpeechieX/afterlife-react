import React, { useContext } from "react";
import {
	Accordion,
	useAccordionButton,
	AccordionContext,
	Card,
} from "react-bootstrap";

import ReactHTMLParser from "react-html-parser";

import data from "./../faq.json";

function ContextAwareToggle({ children, eventKey, callback }) {
	const { activeEventKey } = useContext(AccordionContext);

	const decoratedOnClick = useAccordionButton(
		eventKey,
		() => callback && callback(eventKey),
	);

	const isCurrentEventKey = activeEventKey === eventKey;

	return (
		<button
			type="button"
			// style={{ backgroundColor: isCurrentEventKey ? "pink" : "lavender" }}
			onClick={decoratedOnClick}
			className="accordion_title"
		>
			{children}
			{isCurrentEventKey ? (
				<p className="minus_icon">-</p>
			) : (
				<p className="plus_icon">+</p>
			)}
		</button>
	);
}

const styles = {
	body: {
		backgroundColor: "black",
		color: "white",
		paddingTop: "20px",
		paddingLeft: "35px",
		paddingRight: "35px",
	},
};

function Example() {
	return data.map((faq) => (
		<Accordion key={faq.question} className="accordion_body">
			<Card bsPrefix className="accordion_list_item">
				<Card.Header style={styles.body}>
					<ContextAwareToggle
						eventKey="1"
						style={styles.body}
						className="accordion_title"
					>
						{faq.question}
					</ContextAwareToggle>
				</Card.Header>
				<Accordion.Collapse eventKey="1">
					<Card.Body style={styles.body}>
						{ReactHTMLParser(faq.answer)}
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	));
}

const FAQ = () => {
	return <Example />;
};

export default FAQ;
