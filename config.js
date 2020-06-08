var classMode = Array(16)
	.fill(0)
	.map((_, i) => ({
		key: i + 1 + "班",
		val: i + 1,
	}));

EasyTable.init()
	.add({
		index: true,
		data: "./store/gk2019.csv",
		title: "2019 高考录取查询",
		config: [
			{ able: false, mode: null, label: "序号" },
			{
				able: true,
				mode: classMode,
				label: "班级",
			},
			{ able: true, mode: "[]", label: "姓名" },
			{ able: true, mode: "[]", label: "学校" },
		],
	})
	.add({
		index: true,
		data: "./store/gk2018.csv",
		title: "2018 高考录取查询",
		config: [
			{
				able: true,
				mode: classMode,
				label: "班级",
			},
			{ able: true, mode: "[]", label: "姓名" },
			{ able: true, mode: "[]", label: "学校" },
		],
	})
	.add({
		data: "./store/gk2018.score.csv",
		title: "2018 高考理科成绩查询",
		config: [
			{ able: true, mode: "[]", label: "姓名" },
			{ able: true, mode: null, sort: true, label: "总分" },
			{ able: true, mode: null, sort: true, label: "语文" },
			{ able: true, mode: null, sort: true, label: "数学" },
			{ able: true, mode: null, sort: true, label: "英语" },
			{ able: true, mode: null, sort: true, label: "综合" },
		],
	})
	.render("#app");
