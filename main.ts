let ganjil = 1
basic.forever(function () {
    if (ganjil <= 10) {
        basic.showNumber(ganjil)
        basic.pause(500)
        ganjil += 2
    } else {
        ganjil = 1
    }
})
