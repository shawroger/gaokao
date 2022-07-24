/// <reference path="./matable.d.ts" />

const Matable = window.Matable;

const { createConf, parseMode, Select } = Matable;

/**
 *
 * @param {[string, string]}
 * @param {import("./assets/matable").Config}
 * @param {Partial<import("./assets/matable").Config> | Record<string, number | string>}
 * @returns
 */
function h(
	[file, title],
	config,
	customConf = {
		injectJson() {
			return {
				timeStamp: new Date().toLocaleTimeString(),
			};
		},
	}
) {
	return createConf(["./@data/" + file, title], config, customConf);
}

const 班级Range = Select.lazyRange((i) => [i + " 班", i]);
const 班级 = 班级Range([1, 17]);

const d2022 = h(["2022.xlsx", "2022高考录取结果"], {
	姓名: "",
	班级: 班级Range([1, 28]),
	科类: ["理工", "文史"],
	学校: "",
	专业: "",
	层次: [
		"C9",
		"985",
		"211",
		"港澳名校",
		"军事公安",
		"飞行员",
		"一本",
		"提前批专科",
	],
});

const d2021 = h(["2021.xlsx", "2021高考录取结果"], {
	姓名: "",
	班级: 班级Range([1, 25]),
	科类: ["理科", "文科"],
	总分: 0,
	学校: "",
	专业: "",
	备注: ["复读", "提前批"],
	层次: ["985", "211", "一本"],
});

const d2020 = h(["2020.xlsx", "2020高考录取结果"], {
	姓名: "",
	班级,
	学校: "",
	层次: ["C9", "985", "211", "一本", "本科"],
});

const d2019_1 = h(["2019_1.xlsx", "2019一分部高考录取结果"], {
	姓名: "",
	班级,
	学校: "",
});

const d2019_2 = h(
	["2019_2.xlsx", "2019二分部高考录取结果"],
	{
		姓名: "",
		班级: Select.from([
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
		]),
		学校: "",
		层次: ["985", "211", "一本", "艺术类名校", "无"],
		应届: ["是", "否"],
	},
	{
		onSortData() {},
	}
);

const d2018 = h(["2018.xlsx", "2018高考录取结果"], {
	姓名: "",
	班级,
	学校: "",
});

const d2018_s = h(["2018_s.xlsx", "2018科目成绩详情"], {
	姓名: "",
	总分: 0,
	语文: 0,
	数学: 0,
	英语: 0,
	综合: 0,
});

const d2017 = h(["2017.xlsx", "2017高考录取结果"], {
	班级: 班级Range([1, 16]),
	姓名: "",
	学校: "",
	类别: ["C9", "985", "211", "提前", "独立"],
});

const configList = [
	d2022,
	d2021,
	d2020,
	d2019_1,
	d2019_2,
	d2018,
	d2018_s,
	d2017,
].reverse();

const matable = Matable.init({
	copyright: true,
	title: "宁国中学高考数据查询",
	countdown: {
		name: "2023 高考",
		// date: "2023-06-07 09:00:00",
	},
})
	.config(configList)
	.render("#app");
