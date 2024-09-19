import React from "react";
import ReactDOM from "react-dom/client";
import { LazyMotion, domAnimation } from "framer-motion"

import { App } from "app/App";

import "./globals.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<LazyMotion features={domAnimation}>
			<App />
		</LazyMotion>
	</React.StrictMode>,
);
