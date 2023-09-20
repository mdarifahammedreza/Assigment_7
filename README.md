# README

## App()

In the `App` function, we utilize the `useState()` hook three times. The first instance is used to store data retrieved after fetching a JSON file, the second one stores the credit data value, initially set to 20, and the third one is used to store the data returned by an event handler. We also use the `useEffect` hook to manage side effects in our components, such as fetching API data or JSON files.

## HandleAddToBookmarks

This function is responsible for handling the return object from an event handler. If the return object already exists, it will display an error message: "Item Already Exists." If the total remaining credit is less than the credit value of the returning object, it will be added to bookmarks, accompanied by a message. Otherwise, an error message stating, "You can't add more than 20 credits," will be displayed.

We utilized the `reduce` function to calculate the total credit hours and amounts.

The remaining code passes values to child components to proceed with the application.

## Carts()

The `Carts` component takes data via the `cartvalue` parameter and passes this data one by one to the next child cart using the `map` function.

## Cart()

This component is responsible for visualizing the data on the web browser.

## Bookmarks()

The `Bookmarks` component accepts all return objects from event handlers, visualizes the credit and amount, and then passes these objects one by one to the list child component.

## List()

The `List` component takes an object as input but only displays the title of the object.

## Other Used

We incorporated React icons and React Toast into this project for additional functionality.

For more Please contact : reza412200@gmail.com
