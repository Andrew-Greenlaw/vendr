import { appState } from "../AppState.js"


class SnackService {

  buySnack(name) {
    console.log(name, 'add to total service')
    let snack = appState.snacks.find(s => s.name == name)
    console.log(snack);
    // @ts-ignore
    if (appState.quarters >= snack.price) {
      appState.quarters -= snack.price
    }
  }

  addQuarter() {
    appState.quarters += .25
    console.log('adding quata service', appState.quarters)
  }


}
export const snackService = new SnackService()