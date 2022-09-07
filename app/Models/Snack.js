

export class Snack {
  constructor(name, price) {
    this.name = name
    this.price = price
  }


  get Template() {
    return `
      <div class="col-md-4 p-3 text-center bg-light shadow">
          <div>
            <h2>${this.name}</h2>
            <p>$${this.price}</p>
            <button class="btn btn-primary" onclick="app.snackController.buySnack('${this.name}')">BUY</button>
          </div>
        </div>
    `
  }
}