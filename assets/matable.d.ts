export type ITableData = Array<{ [p: string]: string }>;
export type ValidSearchMode = { key: string; val: string; weight: number }[];

interface GlobalConfig {
	title?: string;
	countdown?: {
		name: string;
		date: string;
	};
	copyright: boolean;
	tableFullWidth: boolean;
}

type SearchConfig = {
	mode: string | null | ValidSearchMode | string[];
	able: boolean;
	label: string;
	sort: boolean;
};

interface Config {
	data: string;
	title: string;
	index: boolean;
	footer: boolean;
	config: SearchConfig[];
	removeFirstLine: boolean;

	onLoadData: (data: Array<{ [p: string]: string }>) => void;
	onChangePage: (page: number) => void;
	onSortData: (
		key?: string,
		order?: 1 | -1
	) => void | ((a: string, b: string) => number);
	injectJson: (config: Config) => Record<string, string | number>;
	meta: {
		[key: string]: any;
	};
}

export type SelectMapper = (
	key: string,
	index: number
) => {
	key: string;
	val: string;
	weight: number;
};

export class Select {
	static defaultMap: SelectMapper;

	static from(arr: Array<string>, mapper: SelectMapper): ValidSearchMode;

	static range(
		fromTo: [number, number],
		mapper: (n: number) => string | [string, string] | [string, string, number]
	): ValidSearchMode;

	static lazyRange(
		mapper?: (n: number) => string | [string, string] | [string, string, number]
	): (fromTo: [number, number]) => ReturnType<typeof Select.range>;
}

export class Matable {
	VERSION: string;
	options: Config[];

	constructor(config?: Partial<GlobalConfig>);

	add(config: Config | Config[]): this;

	config(config: Config | Config[]): this;

	render(target: string): this;

	resolveData(config: Config): null | ITableData;
}

export type RowData = null | number | string | SearchConfig;

export function parseMode(label: string, mode: RowData): SearchConfig;

export function createMode(row: {
	[key: string]: RowData;
}): Partial<GlobalConfig>;

export function createConf(
	info: string | [string, string] | { [key: string]: string },
	row: { [key: string]: RowData },
	mergeConfig?: Partial<Config> | Record<string, number | string>
): Config;

export function init(config?: Partial<GlobalConfig>): Matable;

export interface MatableGlobal {
	Matable: Matable;
	init: typeof init;
	Select: typeof Select;
	parseMode: typeof parseMode;
	createConf: typeof createConf;
	createMode: typeof createMode;
}

declare module "matable" {
	export { init, createConf, createMode, parseMode, Select, Matable };
	const matableGlobal: MatableGlobal;
	export default matableGlobal;
}

declare global {
	interface Window {
		Matable: MatableGlobal;
	}
}
