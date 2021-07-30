
const assets = (file) => "./@data/" + file;

const allClass = Array(16).fill(0).map((_, i) => ({
	val: i + 1,
	key: i + 1 + "班",
}));



const config = [
	{
		index: true,
		data: assets("2021高考录取结果.xlsx"),
		title: "二〇二一 高考录取结果",
		removeFirstLine: true,
		config: [
			{ able: true, mode: "[?]", label: "姓名" },
			{
				able: true,
				sort: true,
				label: "班级",
				mode: allClass,
			},
			{
				able: true,
				label: "科类",
				mode: ["理科", "文科"],
			},
			{ able: true, mode: null, sort: true, label: "总分" },
			{ able: true, mode: "[?]", label: "学校" },
			{ able: true, mode: "[?]", label: "专业" },
			{
				able: true,
				label: "备注",
				mode: ["", "复读"],
			},
			{
				able: true,
				label: "层次",
				mode: ["985", "211", "一本", "本科"],
			},
		],
	},
	{
		index: true,
		data: assets("2020高考录取结果.xlsx"),
		title: "二〇二〇 高考录取结果",
		removeFirstLine: true,
		config: [
			{
				able: true,
				sort: true,
				label: "班级",
				mode: allClass,
			},
			{ able: true, mode: "[?]", label: "姓名" },
			{ able: true, mode: "[?]", label: "学校" },
			{
				able: true,
				label: "层次",
				mode: ["C9", "985", "211", "一本", "本科"],
			},
		],
	},
	{
		index: true,
		data: assets("2019一分部高考录取结果.xlsx"),
		title: "二〇一九 高考录取结果 · 一分部",
		removeFirstLine: true,
		index: true,
		config: [
			{
				able: true,
				sort: true,
				label: "班级",
				mode: allClass,
			},
			{ able: true, mode: "[?]", label: "姓名" },
			{ able: true, mode: "[?]", label: "学校" },
		],
	},
	{
		index: true,
		data: assets("2019二分部高考录取结果.xlsx"),
		title: "二〇一九 高考录取结果 · 二分部",
		removeFirstLine: true,
		config: [
			{
				able: true,
				sort: true,
				label: "班级",
				mode: [
					"理1",
					"理2",
					"理3",
					"文1",
					"文2",
					"文3",
					"文4",
					"文5",
					"文6",
					"文7",
					"文8",
				],
			},
			{ able: true, mode: "[?]", label: "姓名" },
			{ able: true, mode: "[?]", label: "学校" },
			{
				able: true,
				label: "备注",
				mode: ["985", "211", "一本", "艺术类名校", "无"],
			},
			{
				able: true,
				label: "应届",
				mode: ["是", "否"],
			},
		],
	},
	{
		index: true,
		data: assets("2018高考录取结果.xlsx"),
		title: "二〇一八 高考录取结果",
		removeFirstLine: true,
		config: [
			{
				able: true,
				sort: true,
				label: "班级",
				mode: allClass,
			},
			{ able: true, mode: "[?]", label: "姓名" },
			{ able: true, mode: "[?]", label: "学校" },
		],
	},
	{
		data: assets("2018科目成绩详情.xlsx"),
		title: "二〇一八 高考单科成绩单",
		removeFirstLine: true,
		removeFirstLine: true,
		config: [
			{ able: true, mode: "[?]", label: "姓名" },
			{ able: true, mode: null, sort: true, label: "总分" },
			{ able: true, mode: null, sort: true, label: "语文" },
			{ able: true, mode: null, sort: true, label: "数学" },
			{ able: true, mode: null, sort: true, label: "英语" },
			{ able: true, mode: null, sort: true, label: "理综" },
		],
	},
];

const matable = Matable.init({
	copyright: true,
	title: "宁国中学高考数据查询",
	countdown: {
		// 时间还早，不着急开放
		// name: "二〇二二 高考倒计时",
		// date: "2022-06-07 09:00:00",
	},
}).config(config).render("#app");
