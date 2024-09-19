import { MENUS } from "config";
import { MenuItem } from "../MenuItem";
import styles from "styles/sidebaer.module.scss";

export const Menu: React.FC = () => {
	return (
		<nav className={styles.menu}>
			{MENUS.map((item) => (
				<MenuItem key={item.name} item={item} />
			))}
		</nav>
	);
};
