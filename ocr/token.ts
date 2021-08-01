import path from "path";
import fse from "fs-extra";
import { stringify } from "querystring";
import request from "request";

import { API_KEY, SECRET_KEY } from "./secret";

export const dir = path.resolve(__dirname, "./temp");
const tokenFile = dir + "/token.txt";

const URL = "https://aip.baidubce.com/oauth/2.0/token?";

const param = stringify({
	grant_type: "client_credentials",
	client_id: API_KEY,
	client_secret: SECRET_KEY,
});

export function requestToken(cb: request.RequestCallback) {
	request(URL + param, cb);
}

requestToken((error, response, body) => {
	if (!error) {
		fse.ensureFileSync(tokenFile);
		fse.writeJSONSync(tokenFile, body);
	}
});

export function getToken() {
	fse.ensureFileSync(tokenFile);
	const data = fse.readFileSync(tokenFile).toString();

	if (data.length > 0) {
		return data;
	} else {
		return null;
	}
}
