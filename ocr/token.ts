import path from "path";
import fse from "fs-extra";
import { stringify } from "querystring";
import request from "request";

import { API_KEY, SECRET_KEY } from "./secret";

export const dir = path.resolve(__dirname, "./temp");
const tokenFile = path.resolve(__dirname, "./token.txt");

const URL = "https://aip.baidubce.com/oauth/2.0/token?";

const param = stringify({
	grant_type: "client_credentials",
	client_id: API_KEY,
	client_secret: SECRET_KEY,
});

export function requestToken(cb: request.RequestCallback) {
	request(URL + param, cb);
}

requestToken((error, _response, body) => {
	if (!error) {
		fse.ensureFileSync(tokenFile);
		const data = JSON.parse(body);
		fse.writeJSONSync(tokenFile, data["access_token"]);
	}
});

export function getToken() {
	fse.ensureFileSync(tokenFile);
	const data = fse.readFileSync(tokenFile).toString();

	if (data) {
		return data;
	} else {
		return null;
	}
}
