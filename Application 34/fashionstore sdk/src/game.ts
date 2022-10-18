

// flags
let fashionstore = new Entity()
engine.addEntity(fashionstore)

fashionstore.addComponent(new GLTFShape('models/the fashion.glb'))
fashionstore.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1)

  })
)



// flags
let fashionstorefurniture = new Entity()
engine.addEntity(fashionstorefurniture)

fashionstorefurniture.addComponent(new GLTFShape('models/store furniture.glb'))
fashionstorefurniture.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1)

  })
)











// flags
let flags = new Entity()
engine.addEntity(flags)

flags.addComponent(new GLTFShape('models/flags.glb'))
flags.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1)

  })
)
