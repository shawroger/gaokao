#!/usr/bin/env zx

const pkg = require("../package.json");

console.log(`准备上传 Project ${chalk.red(pkg.name)} @${pkg.version}`);

let msg = await question("Commit message: ");

await $`git add .`;

await $`git commit -m  ${msg || "init"}`;

await $`git push origin master`;

console.log(chalk.blue("gitee 仓库上传成功！"));

await $`git push github master`;

console.log(chalk.blue("github 仓库上传成功！"));
