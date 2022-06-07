radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("Motor_1", 1)
    } else {
        radio.sendValue("Motor_1", 0)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("Motor_2", 1)
    } else {
        radio.sendValue("Motor_2", 0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # . # #
            # . . . #
            . . . . .
            `,1)
    } else {
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                . . # # .
                . # # . .
                # # . . .
                . # # . .
                . . # # .
                `,1)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                basic.showLeds(`
                    . # # . .
                    . . # # .
                    . . . # #
                    . . # # .
                    . # # . .
                    `,1)
            } else {
                basic.clearScreen()
            }
        }
    }
})
