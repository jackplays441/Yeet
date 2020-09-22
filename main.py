def on_a_pressed():
    global Jumps
    if Jumps < 2:
        mySprite.vy = -150
        Jumps = Jumps + 1
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

Jumps = 0
mySprite: Sprite = None
tiles.set_tilemap(tilemap("""
    level
"""))
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
info.set_life(3)
mySprite.ay = 300
mySprite.set_position(5, 98)
mySprite2 = sprites.create(img("""
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
    """),
    SpriteKind.player)

def on_on_update():
    global Jumps
    scene.camera_follow_sprite(mySprite)
    controller.move_sprite(mySprite, 100, 0)
    if mySprite.vy == 0:
        Jumps = 0
game.on_update(on_on_update)

def on_on_update2():
    mySprite2.follow(mySprite, 45)
game.on_update(on_on_update2)

def on_forever():
    if mySprite.overlaps_with(mySprite2):
        pass
forever(on_forever)
