input.onButtonPressed(Button.A, function () {
    radio.sendString("clear")
    
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("at your position")

})

radio.setTransmitPower(7)


radio.onReceivedString(function (recievedString){basic.showString(recievedString)
})
radio.setGroup(123)