import path from "path";
import fse from "fs-extra";
import request from "request";
import { getToken } from "./token";
import sleep from "atomic-sleep";

const token = getToken();

if (token === null) {
	throw new Error("token not found \n try run `npm run token` first");
}

const dir = path.resolve(__dirname, "./image");

const imgData = fse.readFileSync(dir + "/0.jpg");

const image = Buffer.from(imgData).toString("base64");

let queryTimes = 0;

function queryID() {
	request(
		{
			url: `https://aip.baidubce.com/rest/2.0/solution/v1/form_ocr/request?access_token=${token}`,
			form: {
				image,
			},
			method: "POST",
			headers: {
				"content-type": "application/json",
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
					console.log(res);
					const id = res["result"][0]["request_id"];
					if (id) {
						console.log(`第${queryTimes}次请求成功，获得ID = ${id}`);
						queryTimes = 0;
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

				if (res["result"] && res["result"]["ret_msg"] === "已完成") {
					console.log(res);
					return;
				} else {
					console.log(`第${queryTimes}次请求未完成，稍后自动重试`);
					queryTimes++;
					sleep(5000);
					return queryFile(id);
				}
			}
		}
	);
}

queryID();
