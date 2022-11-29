# Development

### Link to Deployed Website
If you used the stencil code, this is `https://hungrylizard232.github.io/development/`

### Goal and Value of the Application
The goal of the application is to provide a catalog of rubber ducks at the rubber duck store. The value to the users is that it shows and catagorizes the rubber ducks by type and quantity, which allows user to shop for the rubber ducks of their dreams conveniently. 

### Usability Principles Considered
I chose to place the sorting and filtering buttons at the top of the page to give users easy access to the customization of their rubber duck feed. I also considered that since check out and review order is usually after the users browse through all that they want to see, it makes sense to have the aggregator (cart) at the end of the page. 

### Organization of Components
This page uses components to create DuckFilter and DuckItem. DuckFilter generates all the dropdown filters and sorting box at the the top of the page. These buttons contain eventKey and onChange event listeners to set the state of the filter type (duck theme or quantity) and the sorting state in App. DuckItem generates a bootstrap card that contains the duck image, name, price, and buttons to add and delete from cart. In App, each item in the accordingly filtered duck data is plugged into the DuckItem component to create a card that populates the main page. 

### How Data is Passed Down Through Components
DuckFilter does not pass down any data. It only creates the relevant buttons and trigger App to trigger states appropriately. DuckItem uses the duck data json that is being passed in through a map function, assigns each item with an index, accesses information like name and price through the items, and uses the index (uid) as the key to change the quantity of items in the cart. 

### How the User Triggers State Changes
The user triggers state changes through onClick, onChange, eventKey listeners embedded into the buttons/checkboxes. These listeners call consts in App that calls the set___ functions to cause state changes. 
