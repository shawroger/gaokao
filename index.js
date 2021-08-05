/// <reference path="assets/matable.d.ts" />

const Matable = window.Matable;

const { createConf, createSelection } = Matable;

/**
 *
 * @param {[string, string]} a
 * @param {import("./assets/matable").Config} b
 * @param {Partial<import("./assets/matable").Config> | Record<string, number | string>} c
 * @returns
 */
function h(
	a,
	b,
	c = {
		injectJson() {
			return {
				timeStamp: new Date().toLocaleTimeString(),
			};
		},
	}
) {
	return createConf(["./@data/" + a[0], a[1]], b, c);
}

const 班级 = createSelection([1, 17], (i) => i + " 班");

const d2021 = h(["2021.xlsx", "2021高考录取结果"], {
	姓名: "",
	班级,
	科类: ["理科", "文科"],
	总分: 0,
	学校: "",
	专业: "",
	备注: ["", "复读"],
	层次: ["985", "211", "一本", "本科"],
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

const d2019_2 = h(["2019_2.xlsx", "2019二分部高考录取结果"], {
	姓名: "",
	班级: [
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
	学校: "",
	层次: ["985", "211", "一本", "艺术类名校", "无"],
	应届: ["是", "否"],
});

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

const matable = Matable.init({
	copyright: true,
	title: "宁国中学高考数据查询",
	countdown: {
		name: "二〇二二 高考倒计时",
		date: "2022-06-07 09:00:00",
	},
})
	.config([d2021, d2020, d2019_1, d2019_2, d2018, d2018_s])
	.render("#app");
