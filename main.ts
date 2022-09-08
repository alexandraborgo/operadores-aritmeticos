let Numero1 = 0
let Numero2 = 0
let Numero3 = 0
input.onButtonPressed(Button.A, function () {
    Numero1 = randint(0, 9)
    basic.showNumber(Numero1)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    Numero2 = randint(0, 9)
    basic.showNumber(Numero2)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(Numero1 + Numero2)
})
input.onButtonPressed(Button.B, function () {
    Numero3 = randint(0, 9)
    basic.showNumber(Numero3)
    basic.showString("°C")
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(Numero3 * (1.8 + 32))
    basic.showString("°F")
})
