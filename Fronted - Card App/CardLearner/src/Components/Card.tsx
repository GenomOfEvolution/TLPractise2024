import React from "react";
<<<<<<< Updated upstream

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
=======
import { TCard } from "../types/Card";
import icon_cross from "../assets/icon-cross.svg";

type CardProps = {
	card: TCard;
};

export const Card: React.FC<CardProps> = ({ card: TCard }) => {
	return (
		<>
			<div className="card-wrapper">
				<div className="card">
					<label className="card__label">
						<input
							className="card__input"
							type="text"
							value={TCard.frontSide}
						/>
						<span>Term</span>
					</label>
					<label className="card__label">
						<input
							className="card__input"
							type="text"
							value={TCard.backSide}
						/>
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
>>>>>>> Stashed changes
	);
};
