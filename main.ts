controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Jumps < 2) {
        mySprite.vy = -150
        Jumps = Jumps + 1
    }
})
let Jumps = 0
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level`)
mySprite = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 2 2 2 8 8 8 8 8 8 8 8 2 2 2 8 
    8 2 2 2 8 8 8 8 8 8 8 8 2 2 2 8 
    8 2 2 2 8 8 8 8 8 8 8 8 2 2 2 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 2 2 2 2 2 2 2 2 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Player)
info.setLife(3)
mySprite.ay = 300
mySprite.setPosition(5, 98)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 9 9 9 9 . . . . . . 9 9 9 9 . 
    . 9 9 9 9 . . . . . . 9 9 9 9 . 
    . 9 9 9 9 . . . . . . 9 9 9 9 . 
    . 9 9 9 9 . . . . . . 9 9 9 9 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . e e e e e e e e e e e e e e . 
    . e e . . . . . . . . . . e e . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let ahhhhhhhhhhhhhhhhhhhhh = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdate(function () {
    mySprite2.follow(mySprite, 45)
})
game.onUpdate(function () {
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 0)
    if (mySprite.vy == 0) {
        Jumps = 0
    }
})
forever(function () {
    if (true) {
        if (mySprite.overlapsWith(mySprite2)) {
            info.changeLifeBy(-1)
            mySprite2.setPosition(0, 0)
        }
    }
})
