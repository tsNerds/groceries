#grocery list

It's basically a to-do app, but with a different name!
------------------------------------------------------  

Basic steps to follow:  
1. bootstrap angular 2 app
    - we recommend using the [angular-cli](https://cli.angular.io/) because it's awesome
    - ...but you can use anything you like (you can even run your app in a plunkr: http://plnkr.co/edit/ZybOUleel4YOLjRRrOO5?p=preview)
2. implement a grocery list component
    - it should spit out some hardcoded text values into a template
3. implement a grocery component (a.k.a. directive)
    - we should also have a grocery model
    - we should also have a grocery provider
    - make the grocery list component use and render grocery components
4. implement the ability to add a grocery component
    - an input element shuold be enough for the user to add a new grocery
5. implement the ability to remove a grocery component
    - a delete icon (a simple "␡" or "X") that should be rendered besides the grocery component name
    - when clicked it should remove the grocery component from the listing
    - implement an [@Output](https://angular.io/docs/ts/latest/api/core/index/Output-var.html) event from the dumb to the smart component (from the grocery component to the grocery list component)
    - let the smart component handle the grocery removal
6. implement a way to select a grocery
    - it should alter it's state somehow... a new property, a class in the DOM
7. add the ability to filter the groceries based on their selected state
    - either work with a build in filter
    - or work with a custom filter (using angular's [@Pipes](https://angular.io/docs/ts/latest/guide/pipes.html))