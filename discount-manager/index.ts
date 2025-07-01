export class OrderItem {
  sku: string;
  quantity: number;
  price: number;

  constructor(sku: string, quantity: number, price: number) {
    this.sku = sku
    this.quantity = quantity
    this.price = price
  }

  get total() {
    return this.quantity * this.price
  }
}

class Order {
  items: OrderItem[]

  constructor(items: OrderItem[]) {
    this.items = items
  }

  get subtotal() {
    return this.items.reduce((total, item) => total + item.total, 0)
  }
}

abstract class Discount {
  protected value: number;

  constructor(value: number) {
    this.value = value
  }

  isApplicable(order: Order, minimumAmount = 0): boolean {
    return order.subtotal >= minimumAmount
  }

  apply(_: Order): number {
    throw new Error('Not implemented')
  }
}

class PercentageDiscount extends Discount {
  apply(order: Order): number {
    return order.subtotal * this.value / 100
  }
}

class FlatDiscount extends Discount {
  apply(order: Order): number {
    return this.value
  }
}

class DiscountCalculator {
  static calculateDiscount(order: Order, discounts: Discount[]): number {
    let totalDiscount = 0
    for (const discount of discounts) {
      if (discount.isApplicable(order)) {
        totalDiscount += discount.apply(order)
      }
    }
    return totalDiscount
  }
}

export {
  Order,
  Discount,
  PercentageDiscount,
  DiscountCalculator
}