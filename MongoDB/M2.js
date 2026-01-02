//MongoDb challenge

Your Turn!

You’re managing FastBite’s menu database. Complete these tasks using MongoDB CRUD operations:

Add a new vegan dish called “Tofu Buddha Bowl” (cuisine: “Asian”, price: $9.50, tags: [“vegan”, “gluten-free”], available: true).

Find all available vegan dishes under $12, showing only their name and price.

Update the price of “Tofu Buddha Bowl” to $10.00 and add a “popular” tag.

Delete the dish “Old Special Soup” from the menu.

//Sample data
db.dishes.insertMany([
  {
    "name": "Honey Sriracha Salmon Bowl",
    "cuisine": "Asian Fusion",
    "price": 12.50,
    "tags": ["salmon", "gluten-free"],
    "available": true
  },
  {
    "name": "Lemon Garlic Chicken Bowl",
    "cuisine": "Mediterranean",
    "price": 11.50,
    "tags": ["chicken", "high-protein"],
    "available": true
  },
  {
    "name": "Furikake Salmon Rice Bowl",
    "cuisine": "Japanese",
    "price": 13.00,
    "tags": ["salmon", "rice-bowl"],
    "available": true
  },
  {
    "name": "Greek Salmon Chickpea Bowl",
    "cuisine": "Greek",
    "price": 12.75,
    "tags": ["salmon", "chickpeas"],
    "available": true
  },
  {
    "name": "Quinoa Egg Breakfast Bowl",
    "cuisine": "Fusion",
    "price": 10.25,
    "tags": ["egg", "breakfast"],
    "available": true
  },
  {
    "name": "Chicken Shawarma Rice Bowl",
    "cuisine": "Middle Eastern",
    "price": 11.75,
    "tags": ["chicken", "spiced"],
    "available": true
  },
  {
    "name": "Teriyaki Chicken Veggie Bowl",
    "cuisine": "Japanese",
    "price": 11.00,
    "tags": ["chicken", "teriyaki"],
    "available": true
  },
  {
    "name": "Shrimp Avocado Poke Bowl",
    "cuisine": "Hawaiian",
    "price": 13.50,
    "tags": ["shrimp", "avocado"],
    "available": true
  },
  {
    "name": "Old Special Soup",
    "cuisine": "American",
    "price": 12.00,
    "tags": ["beef", "quinoa"],
    "available": true
  },
  {
    "name": "Egg Fried Millet Buddha Bowl",
    "cuisine": "Asian",
    "price": 9.75,
    "tags": ["egg", "millet"],
    "available": true
  }
]);


//Inserting Tofu Buddha Bowl
db.dishes.insertOne({"name": "Tofu Buddha Bowl","cuisine": "Asian","price": 9.50,"tags": ["vegan", "gluten-free"],"available": true});

//Find all available vegan dishes under $12, showing only their name and price.
db.dishes.find({tags:"vegan","price":{$lt:12},available: true},{ name: 1, price: 1, _id: 0 });

//Update the price of “Tofu Buddha Bowl” to $10.00 and add a “popular” tag.
db.dishes.updateOne({name:"Tofu Buddha Bowl"},{$set :{price:10},$push:{tags:"popular"}});

//Delete the dish “Old Special Soup” from the menu.
db.dishes.deleteOne({name: "Old Special Soup"});