import { appState } from "../AppState.js";
import { snackService } from "../Services/SnackService.js";

function _drawSnack() {
  let snack = appState.snacks
  let snackTemplate = ''
  snack.forEach(s => snackTemplate += s.Template)
  // @ts-ignore
  document.getElementById('snacks').innerHTML = snackTemplate

}
function _drawQuarters() {
  // @ts-ignore
  document.getElementById('quarters').innerText = `${appState.quarters}`
}

export class SnackController {
  constructor() {

    _drawSnack()
  }
  buySnack(name) {
    console.log(name, 'adding to total')
    snackService.buySnack(name)
    _drawQuarters()
  }

  addQuarter() {
    console.log('adding quata')
    snackService.addQuarter()
    _drawQuarters()
    console.log(appState.quarters)
  }




}