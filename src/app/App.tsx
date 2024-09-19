import { Sidebar } from "components/sidebar";
import { Github } from "lucide-react";
import headerStyles from "styles/header.module.scss";
import mainStyles from "styles/main.module.scss";

export const App: React.FC = () => {
	return (
		<>
			<header className={headerStyles.header}>
				<nav className={headerStyles.nav}>
					<h1 className={headerStyles.title}>
						Animated Sidebar
					</h1>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/War-helsink/animated-sidebar"
					>
						<button type="button" className={headerStyles.button} >
							<Github />
						</button>
					</a>
				</nav>
			</header>
			<main className={mainStyles.main}>
				<Sidebar />
			</main>
		</>
	);
};
