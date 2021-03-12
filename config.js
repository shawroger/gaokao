const el = Matable.init({
	title: "宁国中学高考查询",
})
	.add({
		index: false,
		data: "./store/2020.csv",
		title: "2020 高考录取查询",
		index: false,
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
				mode: ["C9", "985", "211", "本科"],
				label: "备注",
			},
		],
	})
	.add({
		index: true,
		data: "./store/2019-1.csv",
		title: "2019 一分部高考录取查询",
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
	})
	.add({
		index: true,
		data: "./store/2019-2.csv",
		title: "2019 二分部高考录取查询 ",
		footer: true,
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
				label: "说明",
			},
			{
				able: true,
				mode: ["应届", "无"],
				label: "备注",
			},
		],
	})
	.add({
		index: true,
		data: "./store/2018.csv",
		title: "2018 高考录取查询",
		footer: true,
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
	})
	.add({
		data: "./store/2018-detail.csv",
		title: "2018 高考理科明细成绩查询",
		footer: true,
		config: [
			{ able: true, mode: "[?]", label: "姓名" },
			{ able: true, mode: null, sort: true, label: "总分" },
			{ able: true, mode: null, sort: true, label: "语文" },
			{ able: true, mode: null, sort: true, label: "数学" },
			{ able: true, mode: null, sort: true, label: "英语" },
			{ able: true, mode: null, sort: true, label: "综合" },
		],
	})
	.render("#app");
