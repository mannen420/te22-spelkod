import Layer from './Layer'

export default class Background {
  constructor(game) {
    this.game = game
    this.width = 1920
    this.height = 1080
    
    this.sl = new Image()
    this.sl.src = "./src/assets/floor_128px.png"

    this.backgroundLayers = [
      new Layer(this.game, this.width, this.height, 0.0, this.sl)
    ]
  }

  update(deltaTime) {
    this.backgroundLayers.forEach(layer => {
      layer.update(deltaTime)
    })
  }

  draw(ctx) {
    this.backgroundLayers.forEach(layer => {
      layer.draw(ctx)
    })
  }

}