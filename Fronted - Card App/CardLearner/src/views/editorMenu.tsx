import { useLocation, useNavigate } from "react-router-dom";
import { CardFactory } from "../Components/CardFactory";

export const EditorMenu = () => {
	const navigator = useNavigate();
	const location = useLocation();
	return (
		<>
			<div className="editor-menu">
				<CardFactory></CardFactory>
			</div>
		</>
	);
};
