import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainMenu } from "./views/MainMenu";
import React from "react";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainMenu />,
	},
]);

export function App() {
	return (
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
}
