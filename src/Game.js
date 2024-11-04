import GameObject from "./GameObject"

export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        console.log("ny instans av game ", this.width)
        this.box = new GameObject(40, 10 ,200, 200, 1, "purple")
        this.box2 = new GameObject(600, 270 ,200, 200, -1, "purple")
    }

    update(deltaTime) {
       this.box.update(deltaTime)
       this.box2.update(deltaTime)

    }

    draw(ctx) {
    this.box.draw(ctx)
    this.box2.draw(ctx)


    }
}