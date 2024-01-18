Feature: Shopping Cart Functionality

  Scenario: Product selection and adding to cart
    Given the user is on the product selection page
    When the user adds a product to the cart
    Then the product should be visible in the cart

  Scenario: Buying items in the cart
    Given the user has products in the cart
    When the user proceeds to buy the cart
    Then the user should be directed to the checkout page

  Scenario: Removing element from cart
    Given the user has products in the cart
    When the user removes an item from the cart
    Then the cart should not contain the removed item
