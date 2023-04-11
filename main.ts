input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Número_aleatorio = randint(0, 4)
    if (Número_aleatorio == 0) {
        basic.showString("SI")
        music.playMelody("E D G F B A C5 B ", 120)
    } else if (Número_aleatorio == 1) {
        basic.showString("NO")
        music.playMelody("C5 A B G A F G E ", 120)
    } else if (Número_aleatorio == 2) {
        basic.showString("NO SE")
        music.playMelody("G B A G C5 B A B ", 120)
    } else if (Número_aleatorio == 3) {
        basic.showString("TAL VEZ ")
        music.playMelody("B A G A G F A C5 ", 120)
    } else if (Número_aleatorio == 4) {
        basic.showString("SIEMPRE")
        music.playMelody("G F G A - F E D ", 120)
    } else {
        basic.showString("QUIZAS")
        music.playMelody("C5 G B A F A C5 B ", 120)
    }
    basic.showNumber(8)
})
let Número_aleatorio = 0
basic.showString("Haz una pregunta")
basic.showNumber(8)
basic.forever(function () {
	
})
