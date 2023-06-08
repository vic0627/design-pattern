import ansi from "./ansi";
const { color, format, reset } = ansi;
enum Scope {
    h1,
    h2,
    h3,
}
const err = (str: string | undefined) => str === undefined;
function printBlock(scope: Scope, title: string, clientCode: Function) {
    let outPutHeader: string, outputFooter: string;
    let L: string | undefined,
        RS: string | undefined,
        RE: string | undefined,
        fm: string | undefined,
        cl: string | undefined;
    if (scope === Scope.h1) {
        L = "##########  ";
        RS = " Start  ##########";
        RE = " End  ##########";
        fm = format.bold;
        cl = color.green;
    } else if (scope === Scope.h2) {
        L = "==========  ";
        RS = " Start  ==========";
        RE = " End  ==========";
        fm = format.bold;
        cl = color.blue;
    } else if (scope === Scope.h3) {
        L = "----------  ";
        RS = " Start  ----------";
        RE = " End  ----------";
        fm = "";
        cl = color.purple;
    } else {
        throw new Error("Something went wrong!");
    }
    outPutHeader = fm + cl + L + title + RS + reset;
    outputFooter = fm + cl + L + title + RE + reset;
    return function () {
        console.log("");
        console.log(outPutHeader);
        clientCode();
        console.log(outputFooter);
        console.log("");
    };
}
export default {
    Scope,
    printBlock,
};
