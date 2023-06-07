import * as fs from "fs";
import * as path from "path";

// 取得當前絕對路徑
const rootPath = path.resolve(__dirname);

const moduleFunctions: {
    [props: string]: Function[];
} = {};

function importAllModules(directory: string, fileName?: string) {
    // 路徑下所有檔案與資料夾名稱陣列
    const files = fs.readdirSync(directory);

    // 遍歷名稱陣列
    for (const file of files) {
        // 檔案絕對路徑
        const filePath = path.join(directory, file);

        // 取得檔案或路徑的詳細訊息
        const stats = fs.statSync(filePath);

        // 是資料夾，且不為特定路徑
        if (stats.isDirectory() && file !== "utils") {
            // 若資料夾為設計模式種類，將名稱帶入函式遞迴
            if (file.includes("Patterns")) importAllModules(filePath, file);
            // 若 fileName 參數存在，繼續帶入遞迴
            else if (fileName) importAllModules(filePath, fileName);
            // 錯誤路徑
            else throw new Error("路徑設定錯誤! 請檢查資料夾結構!");
            // 是 JS 檔
        } else if (filePath.endsWith(".js")) {
            if (!fileName) continue;
            const module = require(filePath);
            if (!(moduleFunctions[fileName] instanceof Array))
                moduleFunctions[fileName] = [];
            if (module.default) moduleFunctions[fileName].push(module.default);
        }
    }
}

importAllModules(rootPath);

import print from "./utils/print";
const { Scope, printBlock } = print;
Object.keys(moduleFunctions).forEach((pattern) => {
    printBlock(Scope.h1, pattern.split("P").join(" P"), () => {
        moduleFunctions[pattern].forEach((func) => {
            func();
        });
    })();
});
