/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Sep 2020
 * This program ...
*/

// setup
let AmountOfLight:number = 0
let myStrip: neopixel.Strip = null 
myStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
  basic.clearScreen()
  myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  myStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  basic.showIcon(IconNames.Happy)

// Press A
input.onButtonPressed(Button.A, function() {
  basic.clearScreen()
  input.lightLevel()
if (AmountOfLight <= 51) {
  myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  myStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  myStrip.clear()
}

if (AmountOfLight > 52) {
  myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
  myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  myStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
}

if (AmountOfLight > 104) {
  myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
  myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
  myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  myStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
}

if (AmountOfLight > 156) {
    myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    myStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
}

if (AmountOfLight > 208) {
    myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    myStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
}
  
})

myStrip.clear()
  
