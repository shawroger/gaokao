import path from "path";
import fse from "fs-extra";
import request from "request";
import { getToken } from "./token";

const token = getToken();

if (token === null) {
	throw new Error("token not found \n try run `npm run ocr` first");
}

const dir = path.resolve(__dirname, "./image");

const REQ_URL = `https://aip.baidubce.com/rest/2.0/solution/v1/form_ocr/request?access_token=${token}`;

const imgData = fse.readFileSync(dir + "/0.jpg");

const image = Buffer.from(imgData).toString("base64");

function fetchAPI(cb: request.RequestCallback) {
	request(
		{
			url: REQ_URL,
			form: {
				image,
			},
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
		},
		cb
	);
}

function main() {
	let times = 1;
	const loopAction: request.RequestCallback = (error, response, body) => {
		if (!error && response.statusCode == 200) {
			const res = JSON.parse(body);
			if (typeof res["error_code"] !== undefined && res["error_code"]) {
				const msg = res["error_msg"] ? "，错误信息：" + res["error_msg"] : "";
				console.log(`第${times}次请求返回了错误码${res["error_code"]}${msg}`);

				times++;
				return fetchAPI(loopAction);
			} else {
				console.log(res);
				console.log(`第${times}次请求成功`);
			}
		}
	};
	fetchAPI(loopAction);
}

main();
