import { Order, OrderItem, DiscountCalculator } from "./index";

describe('discount manager', () => {
  it('should return zero if no discounts are provided', () => {
    const order = new Order([new OrderItem('sku', 100, 100)])
    expect(DiscountCalculator.calculateDiscount(order, [])).toBe(0)
  });
});