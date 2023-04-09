@addItems
Feature: Add Items on the cart

Scenario: 
Given The user puts the items "43,40" into the chart
And The user clicks on the button cart
And The user clicks on button table
And The user fills the coupon code "0000"
And The user fills the shipping and taxes ,Bolivia, Cochabamba and Code Postal "26,405,0000"
And The  user fills the Git Certificate "0000"
When The user clicks on checkout
Then The next page is CHECKOUT

 

    