import type { IMenuItem } from "@types";
import { Home, Users, CheckSquare, Award, Settings } from "lucide-react";

export const MENUS: IMenuItem[] = [
	{
		icon: Home,
		name: "home",
		link: "/",
	},
	{
		icon: Users,
		name: "Friends",
		link: "/friends",
	},
	{
		icon: CheckSquare,
		name: "Todo list",
		link: "/todo",
	},
	{
		icon: Award,
		name: "Achievements",
		link: "/achievements",
	},
	{
		icon: Settings,
		name: "Settings",
		link: "/settings",
	},
];
