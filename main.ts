input.onButtonPressed(Button.A, function () {
    radio.sendString("Prueba1")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Prueba2")
})
radio.setGroup(255)
