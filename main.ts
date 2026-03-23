/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Sep 2020
 * This program ...
*/

// setup
let AmountOfLight:number = 0
let neopixelStrip: neopixel.Strip = null 
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)

//Press A
input.onButtonPressed(Button.A, function() {
  basic.clearScreen()
  input.lightLevel()
  if (AmountOfLight <= 51) {
    neopixelStrip.clear()
}

if (AmountOfLight > 52) {
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
}

if (AmountOfLight > 104) {
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
}

if (AmountOfLight > 156) {
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
}

if (AmountOfLight > 208) {
    neopixelStrip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
}
  
})

neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  