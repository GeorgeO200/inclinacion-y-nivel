let x = 0
let y = 0
let z = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    if (x > 500) {
        basic.showArrow(ArrowNames.East)
    } else if (x < -500) {
        basic.showArrow(ArrowNames.West)
    } else if (y < -500) {
        basic.showArrow(ArrowNames.North)
    } else if (y > 500) {
        basic.showArrow(ArrowNames.South)
    } else if (z > 800 && Math.abs(x) < 500) {
        if (z > 800 && Math.abs(y) < 500) {
            basic.showString("Up")
        }
    } else if (z < -1023 && Math.abs(x) < 500) {
        if (z == -1023 && Math.abs(y) < 500) {
            basic.showString("Down")
        }
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
