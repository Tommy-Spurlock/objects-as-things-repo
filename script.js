const myPet = {
    name: "Muffintop Rodriguez",
    species: "Dog",
    nicknames: ["Reggie", "Rocky", "Pupper"],
    age: "N/A",
}
// Practice: Fast Food Ordering
// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    }
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinksize: "medium",
}

const clubComboMeal = {
    sandwichType: "club",
    fries: true,
    drinksize: "medium",
}

const saladMeal = {
    sandwichType: "SALAD",
    fries: false,
    drinksize: "small",
}
// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(clubComboMeal)
restaurant.placeOrder(saladMeal)


// Invoke the function to return the list of all orders
console.log(restaurant.orders)
// Output all orders to the console using console.table()
console.table(restaurant.orders)

// Challenge: Political Campaign
// Challenges are optional exercises that you should attempt only if you've completed the practice exercises and understand the concepts.

// You have volunteered your time to a local political candidate, Elizabeth Sanger, who wants to become a US representative in Congress for your district. Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, and store information about Elizabeth and her campaign.

// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

// 1. Her congressional district (you can use yours here)

const congressionalDistrict = "West Virgina 2nd"

// 2. Her platform statements for the following issues.
// Taxes
// Jobs
// Infrastructure
// Health care
// Crime and enforcement

const plaformStatments = {
    taxes: "yo yo money",
    jobs: "work work work",
    infrastructure: "ooooohhhh prettttty",
    healthcare: "health is wealth",
}
// 3.  URL for donation form
const donationsHere = "www.give-me-money.com"
// 4. Calendar of events
const eventCalender = {
    calender: [],
    makeEvent: function (newEventName,newEventDate,newEventTime) {
        const newEvent = {
            eventName: `${newEventName}`,
            eventDate: `${newEventDate}`,
            eventTime: `${newEventTime}`,
        }
        this.calender.push(newEvent)
    }  
} 
eventCalender.makeEvent("make money", "9/12/12", "12:30")
console.log(eventCalender.calender)

console.table(eventCalender.calender)
// 5. Volunteer information
// Name
// Address
// Email
// Phone number
// Availability
// What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
// 6. Biography
// 7. Image gallery
// Head shot
// Picture of family
// Picture of constituents
// 8. Mission statement
// 9. URL for registering to vote






