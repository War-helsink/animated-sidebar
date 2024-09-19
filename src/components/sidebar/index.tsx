import { useAtom } from "jotai";
import { Menu } from "components/menu";
import { isCollapsedAtom } from "config";
import styles from "styles/sidebaer.module.scss";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { m } from "framer-motion";
import cn from "clsx";

export const Sidebar: React.FC = () => {
	const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom);

	const toggleSidebar = () => {
		setIsCollapsed((prev) => !prev);
	};

	return (
		<m.aside
			className={cn(styles.sidebar, { [styles.collapsed]: isCollapsed })}
			animate={{ width: isCollapsed ? 60 : 224 }}
			transition={{ type: "spring", stiffness: 300, damping: 23 }}
		>
			<button type="button" className={styles.toggle} onClick={toggleSidebar}>
				{isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
			</button>
			<Menu />
		</m.aside>
	);
};
