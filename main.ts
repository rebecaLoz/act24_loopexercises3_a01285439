input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # #
            . # . # .
            # . . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # #
            # . . # .
            `)
        basic.pause(100)
    }
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 2)
        basic.pause(100)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let counter = 0; counter <= 15; counter++) {
        basic.showIcon(IconNames.Surprised)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
})
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.pause(100)
    basic.showArrow(ArrowNames.East)
    basic.pause(100)
    basic.showArrow(ArrowNames.South)
    basic.pause(100)
    basic.showArrow(ArrowNames.West)
    basic.pause(100)
}
