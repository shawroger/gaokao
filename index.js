const matable = Matable.init({
	title: "宁国中学高考数据查询",
	copyright: true,
})
	.config([
		{
			index: true,
			data: "./store/2020.csv",
			title: "二〇二〇 高考录取结果",
			config: [
				{
					able: true,
					sort: true,
					mode: Array(16)
						.fill(0)
						.map((_, i) => ({
							key: i + 1 + "班",
							val: i + 1,
						})),
					label: "班级",
				},
				{ able: true, mode: "[?]", label: "姓名" },
				{ able: true, mode: "[?]", label: "学校" },
				{
					able: true,
					mode: ["C9", "985", "211", "一本", "本科"],
					label: "备注",
				},
			],
		},
		{
			index: true,
			data: "./store/2019@part1.csv",
			title: "二〇一九 高考录取结果 · 一分部",
			index: true,
			config: [
				{ able: false, mode: null, label: "序号" },
				{
					able: true,
					sort: true,
					mode: Array(16)
						.fill(0)
						.map((_, i) => ({
							key: i + 1 + "班",
							val: i + 1,
						})),
					label: "班级",
				},
				{ able: true, mode: "[?]", label: "姓名" },
				{ able: true, mode: "[?]", label: "学校" },
			],
		},
		{
			index: true,
			data: "./store/2019@part2.csv",
			title: "二〇一九 高考录取结果 · 二分部",
			config: [
				{
					able: true,
					sort: true,
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
					label: "班级",
				},
				{ able: true, mode: "[?]", label: "姓名" },
				{ able: true, mode: "[?]", label: "学校" },
				{
					able: true,
					mode: ["985", "211", "一本", "艺术类名校", "无"],
					label: "备注",
				},
				{
					able: true,
					mode: ["是", "否"],
					label: "应届",
				},
			],
		},
		{
			index: true,
			data: "./store/2018.csv",
			title: "二〇一八 高考录取结果",
			config: [
				{
					able: true,
					mode: Array(16)
						.fill(0)
						.map((_, i) => ({
							key: i + 1 + "班",
							val: i + 1,
						})),
					sort: true,
					label: "班级",
				},
				{ able: true, mode: "[?]", label: "姓名" },
				{ able: true, mode: "[?]", label: "学校" },
			],
		},
		{
			data: "./store/2018@score.csv",
			title: "二〇一八 高考单科成绩单",
			config: [
				{ able: true, mode: "[?]", label: "姓名" },
				{ able: true, mode: null, sort: true, label: "总分" },
				{ able: true, mode: null, sort: true, label: "语文" },
				{ able: true, mode: null, sort: true, label: "数学" },
				{ able: true, mode: null, sort: true, label: "英语" },
				{ able: true, mode: null, sort: true, label: "理综" },
			],
		},
	])
	.render("#app");
