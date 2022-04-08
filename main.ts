radio.onReceivedString(function (receivedString) {
    if (receivedString == "ENRRERA") {
        cuteBot.motors(-100, -100)
    }
    if (receivedString == "ENDAVANT") {
        cuteBot.motors(100, 100)
    }
    if (receivedString == "ESQUERRA") {
        cuteBot.motors(80, -80)
    }
    if (receivedString == "DRETA") {
        cuteBot.motors(-80, 80)
    }
    if (receivedString == "PARAR") {
        cuteBot.motors(0, 0)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
