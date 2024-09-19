import { Menu } from "components/menu";
import styles from "styles/sidebaer.module.scss"

export const Sidebar: React.FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Menu />
		</aside>
	);
};
