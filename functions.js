// Function Syntax:

// This stays as a constant variable

// const holidayDestination = (country,month) => {
//     console.log(`Yay! I'm going on holiday! I am going to ${country} in ${month}`)
// }

// holidayDestination ("Spain", "June")


// holidayDestination()




// ACTIVITY 1


// const inventory = (productCode, departmentName, quantity) => {
//     console.log(`${quantity} of ${productCode} sold from ${departmentName} department, need to update stock by ${quantity}`)

// }

// inventory(412345, "baked goods", 65)




//  ACTIVITY 2


// const sayHello =(myName,drink) => {
//     console.log(`Hello, how are you? My name is ${myName}. I like to drink ${drink}.`)

// }
// sayHello("Jacob", "Coke")



// const multiply = (num1, num2) => {
//     return num1 * num2
// }

// console.log(multiply(2,5))

// Idk what this is :

// const replenishStock = (productCode) => {
//     console.log(`Order product number ${productCode} stock is low!`)
// }

// const reducePrice = (productCode, originalPrice) => {
//     let salePrice = originalPrice /=2
//     console.log(`Product number ${productCode} is now £${salePrice}`)
// }

// const checkStock = (productCode, quantity, originalPrice) => {
//     if (quantity <= 10) {
//         replenishStock(productCode)
    
// } else if (quantity > 100) {
//     reducePrice(productCode, originalPrice)

// }else{console.log("Don't order stock")}
// }
// checkStock(345678, 200, 100)

// // ARROW FUNCTION

// const addMe = (num1,num2) => {
//     return num1 + num2
// }
// addMe(4,5)

// DECLARATION:

// function addMe(num1, num2) {
//     return num1 + num2
// }

// addMe(4,5)







// OBJECTS




// SYNTAX:

// const marketingOp = () =>{
    //     do something
    // }
    
    
    // const person = {
        //     firstName: "Sally",
        //     lastName: "Evans",
        //     age: 40,
        //     occupation: "Sales assistant",
        // married: false,
        // homeOwner: true,
        // hobbies: ["tennis", "gardening", "bungee jumping"],
        // marketingOp () {
            //     if (this.homeowner == false && this.age > 25) {
                //         return "send mortgage offer email."
                //     }
                //     else if (this.homeOwner == false && this.age <25){
                    //         return "Send summer holiday fun credit card offer."
                    //     }
                    //     else if (this.homeOwner == true && this.age >25){
                        //         return "Pension investment offer."
                        //     }
                        //     else {
                            //         return "Send sensible Savings offer."
                            //     }
                            //     }
                            // }
                            
                            //     console.log(person.marketingOp())
                            
                            
                            
    // // ACTIVITY 1, 2, 3 
    
    // let day = "Wednesday"
    
    // const pet = {
    //     Name: "Will",
    //     Type: "cockapoo",
    //     age: 13,
    //     colour: "white",
    //     attributes: ["Naughty", "Sneaky", "Cuddly", "needy"]
    // }
    
    // // console.log(`I have a dog called ${pet.Name}. He is a ${pet.Type}. He is ${pet.age} and ${pet.colour}`)
    
    // if (day === "Monday" || day === "Tuesday") {
    //     console.log(`Great it's ${day}, let's be ${pet.attributes[0]}`)
    // }else{
    //     console.log(`Oh no! It's ${day}, I hate being a ${pet.Type}`)
    // }






// const pet = {
//     Name: "Will",
//     Type: "cockapoo",
//     age: 13,
//     colour: "white",
//     attributes: ["Naughty", "Sneaky", "Cuddly", "needy"],
//     // activities: ["eating","drinking"],
//     eating: true,
//     drinking: false

// }
// // need an if statement that will check if eating/drinking is true.

// if (pet.eating) {
//     console.log(`${pet.Name} is eating!`)

// }
// else if (pet.drinking) {
//     console.log(`${pet.Name} is drinking!`)
// }
// else {
//     console.log(`${pet.Name} is doing what he likes.`)
