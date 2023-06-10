/**
 * 定義一個抽象的圖形介面
 */
interface Shape {
    draw(): void
}

/**
 * 實現具體的圖形類別
 */
class Circle implements Shape {
    draw(): void {
        console.log("圓型：Ｏ")
    }
}

class Rectangle implements Shape {
    draw(): void {
        console.log("方形：口")
    }
}

class ShapeFactory {
    createShape(type: string): Shape | null {
        if (type === "circle") {
            return new Circle();
        } else if (type === "rectangle") {
            return new Rectangle()
        }
        return null
    }
}

import print from "../../utils/print"
const { Scope, printBlock } = print;
export default printBlock(Scope.h3, "Shape factory", () => {
    const factory = new ShapeFactory();

    const circle = factory.createShape("circle");
    circle?.draw()

    const rectangle = factory.createShape("rectangle");
    rectangle?.draw()
})