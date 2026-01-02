interface Observer {
  update(drink: string): void;
}

class DrinkOrder {
  private drinkOrder: Observer[] = [];

  addObserver(observer: Observer):void {
    this.drinkOrder.push(observer);
  }

  removeObserver(observer: Observer):void {
    this.drinkOrder = this.drinkOrder.filter(o => o !== observer);
  }

  serveDrink(drink: string):void {
    console.log(`Serving: ${drink}`);
    this.notifydrinkOrder(drink);
  }

  private notifydrinkOrder(drink: string):void {
    this.drinkOrder.forEach(observer => observer.update(drink));
  }
}

class PromotionSystem implements Observer {
  update(drink: string): void {
    switch (drink) {
        case "Ice Coffee":
            console.log("Enjoy on caffeine hits today! and 10% off on your next order");
            break;
        case "Ice cream":
            console.log("Enjoy on Ice Cream today! and 5% off on your next order");
            break;
        default:
            console.log(`Since you enjoyed your ${drink}, get 20% off your next order!`);
            break;
    }
  }
}

const order = new DrinkOrder();
const promo = new PromotionSystem();

order.addObserver(promo);

order.serveDrink("Ice Coffee");
order.serveDrink("Ice cream");
order.serveDrink("Coke");