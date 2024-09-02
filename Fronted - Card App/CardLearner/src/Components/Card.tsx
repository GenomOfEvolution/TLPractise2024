import React from "react";
import { Card } from "../Models/Card";
import icon_cross from "../assets/icon-cross.svg";

type CardProps = {
	card: Card;
};

export const CardElem: React.FC<CardProps> = ({ card: Card }) => {
	return (
		<>
			<div className="card-wrapper">
				<div className="card">
					<label className="card__label">
						<input className="card__input" type="text" value={Card.frontSide} />
						<span>Term</span>
					</label>
					<label className="card__label">
						<input className="card__input" type="text" value={Card.backSide} />
						Definition
					</label>
					<img
						className="card__delete-button"
						src={icon_cross}
						onClick={() => {
							console.log("deleting card");
						}}
					/>
				</div>
			</div>
		</>
	);
};
