import fse from "fs-extra";
import path from "path";
import request from "request";
//@ts-ignore
import sleep from "atomic-sleep";
import { dir, getToken } from "./token";

const token = getToken();

if (token === null) {
	throw new Error("token not found \n try run `npm run token` first");
}

let xid = 36;

const image = Buffer.from(
	fse.readFileSync(dir + "\\image\\" + xid + ".png")
).toString("base64");

let queryTimes = 1;

function queryID() {
	request(
		{
			url: `https://aip.baidubce.com/rest/2.0/solution/v1/form_ocr/request?access_token=${token}`,
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			form: {
				image,
			},
		},
		(error, response, body) => {
			if (!error && response.statusCode == 200) {
				const res = JSON.parse(body);

				if (typeof res["error_code"] !== undefined && res["error_code"]) {
					const msg = res["error_msg"] ? "，错误信息：" + res["error_msg"] : "";
					console.log(
						`第${queryTimes}次请求返回了错误码${res["error_code"]}${msg}`
					);

					queryTimes++;
					return queryID();
				} else {
					const id = res?.["result"]?.[0]?.["request_id"];
					if (id) {
						console.log(`第${queryTimes}次请求成功，获得ID = ${id}`);
						console.log("=======下一任务：下载ID对应文件=======");
						queryTimes = 1;
						sleep(2000);
						return queryFile(id);
					}

					return;
				}
			}
		}
	);
}

function queryFile(id: string) {
	request(
		{
			url: `https://aip.baidubce.com/rest/2.0/solution/v1/form_ocr/get_request_result?access_token=${token}`,
			form: {
				request_id: id,
			},
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
		},
		(error, response, body) => {
			if (!error && response.statusCode == 200) {
				const res = JSON.parse(body);

				if (
					res["result"] &&
					res["result"]["result_data"] &&
					res["result"]["ret_msg"] === "已完成"
				) {
					const file = res["result"]["result_data"];
					console.log("文件下载地址：" + file + "即将自动下载");
					console.log("id = " + xid);
					return downloadFile(file);
				} else {
					console.log(`第${queryTimes}次请求未完成，2秒稍后自动重试`);
					queryTimes++;
					sleep(2000);
					return queryFile(id);
				}
			}
		}
	);
}

function downloadFile(url: string) {
	const filename = dir + "\\result-" + xid + ".xls";
	const stream = fse.createWriteStream(filename);
	request(url)
		.pipe(stream)
		.on("close", () => {
			console.log(`文件下载完成，路径为：${filename}`);
		});
}

console.log("=======下一任务：获取任务ID数据=======");
queryID();
