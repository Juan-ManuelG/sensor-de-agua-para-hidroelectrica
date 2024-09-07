let nivel_maximo = 0
nivel_maximo += 1
basic.forever(function () {
    nivel_maximo = pins.analogReadPin(AnalogReadWritePin.P10)
    if (nivel_maximo >= 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
