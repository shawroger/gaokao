const execa = require("execa");
const { prompt } = require("enquirer");
const pkg = require("../package.json");
const pkgName = pkg.name[0].toUpperCase() + pkg.name.slice(1);

const gitTasks = (msg) => [
	{
		command: "git",
		args: ["add", "."],
	},
	{
		command: "git",
		args: ["commit", "-m", msg],
	},
	{
		command: "git",
		args: ["push", "origin", "master"],
	},
];

(async () => {
	const res = await prompt({
		type: "input",
		name: "msg",
		message: "Commit message: ",
	});

	const msg = '"' + res.msg + '"';

	for (const { command, args } of gitTasks(msg)) {
		try {
			const { stdout } = await execa(command, args);

			if (stdout) {
				console.log(stdout);
			}
		} catch (error) {
			console.log("Cause an error!");
			if (error.stderr) {
				console.log(error.stderr);
			}
		}
	}

	console.log(`Publish package ${pkgName}@${pkg.version} successfully`);
	console.log(`Publish commit message: ${msg}`);
})();
