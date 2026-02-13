let t = 0
basic.forever(function () {
    t = input.temperature()
    meter.use(meter.Styles.Dial, -5, 25)
    meter.show(t)
})
