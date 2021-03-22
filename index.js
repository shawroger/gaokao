const config = [
	{
		index: true,
		data: "./assets/_data/2020.csv",
		title: "二〇二〇 高考录取结果",
		removeFirstLine: true,
		config: [
			{
				able: true,
				sort: true,
				label: "班级",
				mode: Array(16)
					.fill(0)
					.map((_, i) => ({
						key: i + 1 + "班",
						val: i + 1,
					})),
			},
			{ able: true, mode: "[?]", label: "姓名" },
			{ able: true, mode: "[?]", label: "学校" },
			{
				able: true,
				label: "备注",
				mode: ["C9", "985", "211", "一本", "本科"],
			},
		],
	},
	{
		index: true,
		data: "./assets/_data/2019@part1.csv",
		title: "二〇一九 高考录取结果 · 一分部",
		removeFirstLine: true,
		index: true,
		config: [
			{ able: false, mode: null, label: "序号" },
			{
				able: true,
				sort: true,
				label: "班级",
				mode: Array(16)
					.fill(0)
					.map((_, i) => ({
						key: i + 1 + "班",
						val: i + 1,
					})),
			},
			{ able: true, mode: "[?]", label: "姓名" },
			{ able: true, mode: "[?]", label: "学校" },
		],
	},
	{
		index: true,
		data: "./assets/_data/2019@part2.csv",
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
		data: "./assets/_data/2018.csv",
		title: "二〇一八 高考录取结果",
		removeFirstLine: true,
		config: [
			{
				able: true,
				sort: true,
				label: "班级",
				mode: Array(16)
					.fill(0)
					.map((_, i) => ({
						key: i + 1 + "班",
						val: i + 1,
					})),
			},
			{ able: true, mode: "[?]", label: "姓名" },
			{ able: true, mode: "[?]", label: "学校" },
		],
	},
	{
		data: "./assets/_data/2018@score.csv",
		title: "二〇一八 高考单科成绩单",
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
		name: "二〇二一 高考倒计时",
		date: "2021-06-07 09:00:00",
	},
})
	.config(config)
	.render("#app");
