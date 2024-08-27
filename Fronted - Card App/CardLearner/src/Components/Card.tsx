import React from "react";

type CardProps = {
	frontSide: string;
	backSide: string;
};

export const Card = (props: CardProps) => {
	const { frontSide, backSide } = props;
	return (
		<div className="card-wrapper_default">
			<input type="text" value={frontSide} />
		</div>
	);
};
