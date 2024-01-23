import * as fs from "fs";
import * as path from "path";

const targets = process.argv.slice(2);
// console.log("targets:", targets);

const rootPath = path.resolve(__dirname);

if (!targets.length)
    console.log("No Target: please choose a specific file or directory!!!");
else traverseDir(rootPath);

function traverseDir(directory: string, printChild?: boolean) {
    // 路徑下所有檔案與資料夾名稱陣列
    const files = fs.readdirSync(directory);
    // console.log("files:", files);

    // 遍歷名稱陣列
    for (const file of files) {
        // 檔案絕對路徑
        const filePath = path.join(directory, file);

        // 取得檔案或路徑的詳細訊息
        const stats = fs.statSync(filePath);

        const isTarget = targets?.includes(file);

        const isOutputJsFile =
            filePath.endsWith(".js") && (isTarget || printChild);

        // console.log("file:", file, ", is target:", isTarget);

        // 是資料夾
        if (stats.isDirectory()) traverseDir(filePath, isTarget);
        // 是 JS 檔
        else if (isOutputJsFile) {
            const module = require(filePath);

            const outputFn = module.default as (() => void) | undefined;

            if (typeof outputFn === "function") outputFn();
        }
    }
}
