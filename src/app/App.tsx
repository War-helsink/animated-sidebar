import { Sidebar } from "components/sidebar";
import { Header } from "components/header";
import mainStyles from "styles/main.module.scss";

export const App: React.FC = () => {
	return (
		<>
			<Header />
			<main className={mainStyles.main}>
				<Sidebar />
			</main>
		</>
	);
};
