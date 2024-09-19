import type { IMenuItem } from "@types";

export interface Props {
	item: IMenuItem;
}

export const MenuItem: React.FC<Props> = ({ item }) => {
	return (
		<a href={item.link}>
			<item.icon />
			<span>{item.name}</span>
		</a>
	);
};
