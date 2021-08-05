interface IStore {
	data: {
		[p: string]: Array<{ [p: string]: string }>;
	};
	config: Config[];
	index: number;
	globalConfig: {
		title?: string;
		countdown?: {
			name: string;
			date: string;
		};
		copyright: boolean;
		tableFullWidth: boolean;
	};
}

interface Config {
	data: string;
	title: string;
	index: boolean;
	footer: boolean;
	removeFirstLine: boolean;
	config: {
		mode:
			| string
			| null
			| { key: string; val: string; weight: number }[]
			| string[];
		able: boolean;
		label: string;
		$$val?: string;
		sort: boolean;
	}[];

	onLoadData: (data: Array<{ [p: string]: string }>) => void;
	onChangePage: (page: number) => void;
	onSortData: (key: string) => void | ((a: string, b: string) => number);
	injectJson: (config: Config) => Record<string, string | number>;
	meta: {
		[key: string]: any;
	};
}

export class Matable {
	VERSION: string;
	options: Config[];

	constructor(globalConfig?: Partial<IStore["globalConfig"]>);

	/**
	 * @param config 用户的配置
	 */
	add(config: Config | Config[]): this;

	config(config: Config | Config[]): this;

	/**
	 * @param target 待渲染节点
	 */
	render(target: string): this;
}

export type RowData = null | number | string | Config["config"][0]["mode"];

export function createMode(row: {
	[key: string]: RowData;
}): Partial<IStore["globalConfig"]>;

export function createSelection(
	fromTo: [number, number],
	cb: (n: number) => { key: string; val: string; weight: number } | string
): Array<{
	key: string;
	val: string;
	weight: number;
}>;

export function createConf(
	info: string | [string, string] | { [key: string]: string },
	row: { [key: string]: RowData },
	mergeConfig?: Partial<Config> | Record<string, number | string>
): Config;

export function init(globalConfig?: Partial<IStore["globalConfig"]>): Matable;

export interface MatableGlobal {
	init: typeof init;
	createConf: typeof createConf;
	createMode: typeof createMode;
	createSelection: typeof createSelection;
	Matable: Matable;
}

declare module "matable" {
	export { init, createConf, createMode, createSelection, Matable };
	const matableGlobal: MatableGlobal;
	export default matableGlobal;
}

declare global {
	interface Window {
		Matable: MatableGlobal;
	}
}
