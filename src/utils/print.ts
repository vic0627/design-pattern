import ansi from "./ANSI";
const { color, format, reset } = ansi;
enum Scope {
    h1,
    h2,
    h3,
}

function printBlock(scope: Scope, title: string, clientCode: Function) {
    let outPutHeader: string, outputFooter: string;
    if (scope === Scope.h1) {
        const L = "##########  ";
        const RS = " Start  ##########";
        const RE = " End  ##########";
        outPutHeader = format.bold + color.green + L + title + RS + reset;
        outputFooter = format.bold + color.green + L + title + RE + reset;
    } else if (scope === Scope.h2) {
        const L = "==========  ";
        const RS = " Start  ==========";
        const RE = " End  ==========";
        outPutHeader = format.bold + color.blue + L + title + RS + reset;
        outputFooter = format.bold + color.blue + L + title + RE + reset;
    } else if (scope === Scope.h3) {
        const L = "----------  ";
        const RS = " Start  ----------";
        const RE = " End  ----------";
        outPutHeader = color.purple + L + title + RS + reset;
        outputFooter = color.purple + L + title + RE + reset;
    }
    return function () {
        console.log(outPutHeader);
        clientCode();
        console.log(outputFooter);
    };
}
export default {
    Scope,
    printBlock,
};
