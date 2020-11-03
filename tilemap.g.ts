// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers.registerTilemapFactory(function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level": return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000101010101010000010101000001010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010100000000000000000001000000000000000100010000010000000000000000000000000000000000000000000000000001000000000000000000000000000000000100000100010000000000000000000000000000000000000100000000000000000000000000010000000000000000020000000001000000000000000000000101010100000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 . . 2 2 2 . . 2 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . . . 2 . . . . . . 
. 2 . 2 . . 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
. 2 . . 2 . 2 . . . . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,myTiles.tile1], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
