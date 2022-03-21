input.onButtonPressed(Button.A, function () {
    coin_1 = randint(1, 2)
    if (coin_1 == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            `)
    }
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (coin_1 == 1 && coin_2 == 1) {
        P1 += 1
        basic.showString("P1")
        basic.showNumber(P1)
    } else if (coin_1 == coin_2) {
        P1 += 1
        basic.showString("P1")
        basic.showNumber(P1)
    } else if (!(false)) {
        P2 += 1
        basic.showString("P2")
        basic.showNumber(P2)
    } else if (coin_1 > coin_2 || coin_1 < coin_2) {
        P2 += 1
        basic.showString("P2")
        basic.showNumber(P2)
    }
})
input.onButtonPressed(Button.B, function () {
    coin_2 = randint(1, 2)
    if (coin_2 == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            `)
    }
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(P1)
    basic.showNumber(P2)
    basic.showString("Game Over!")
    if (P1 > P2) {
        basic.showString("P1 Wins")
    } else if (P1 < P2) {
        basic.showString("P2 Wins")
    } else {
        basic.showString("Tie")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    P1 = 0
    P2 = 0
})
let coin_2 = 0
let coin_1 = 0
let P2 = 0
let P1 = 0
P1 = 0
P2 = 0
basic.forever(function () {
	
})
