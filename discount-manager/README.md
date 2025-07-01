Context: Gousto processes thousands of meal kit orders daily. Sometimes, special discounts need to be applied based on
various criteria (e.g., first-time customer, loyalty points, specific promotion codes, or order value thresholds).

Problem: Design and implement a DiscountCalculator service or module (using Python, PHP, or Node.js) that can apply
multiple types of discounts to an Order object. The Order object would contain items, quantities, and prices. The
DiscountCalculator should be designed with Test-Driven Development (TDD) in mind, meaning tests should drive the
implementation.

Requirements:

Core Functionality: Given an Order object and a list of available Discount objects, calculate the final total price
after applying all applicable discounts.

Discount Types: Implement at least two distinct discount types:

Percentage Discount: e.g., 10% off the total order.

Fixed Amount Discount: e.g., £5 off the total order.

(Optional - for more advanced candidates): "Buy N Get M Free" on specific items, or a minimum order value required for a
discount.

Applicability Rules: Each Discount should have a method to determine if it is applicable to a given Order. For example,
a discount might only apply if the order total is above a certain threshold, or if a specific promotional code is
present.

Order of Application (for discussion): Consider and discuss how the order of applying discounts might affect the final
price (e.g., percentage before fixed amount, or vice versa). For the initial implementation, choose a sensible default
order, but be prepared to discuss alternatives.

TDD Emphasis: The expectation is to write tests before writing the corresponding production code, iterating through the
Red-Green-Refactor cycle.