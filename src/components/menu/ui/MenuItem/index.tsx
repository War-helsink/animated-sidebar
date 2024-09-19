import type { IMenuItem } from "@types";
import { useAtomValue } from "jotai";
import { isCollapsedAtom } from "config";

export interface Props {
	item: IMenuItem;
}

export const MenuItem: React.FC<Props> = ({ item }) => {
	const isCollapsed = useAtomValue(isCollapsedAtom);

	return (
		<a 
			href={item.link}
			target="_blank"
			rel="noreferrer">
				<item.icon />
				{!isCollapsed && <span>{item.name}</span>}
		</a>
	);
};
