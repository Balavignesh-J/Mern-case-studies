//Question
Your Turn!

Write an aggregation pipeline to find the average rating for each genre in 2024, but only include genres with more than 10,000 total views.

Output should show genre, average rating (rounded to 1 decimal), and total views.

//MongoDb Data

db.mongo1.insertMany([
  {
    "movie": "Edge of Tomorrow",
    "genre": "Sci-Fi",
    "country": "USA",
    "views": 15000,
    "rating": 8.2,
    "year": 2024
  },
  {
    "movie": "Dune Part Two",
    "genre": "Sci-Fi",
    "country": "USA",
    "views": 25000,
    "rating": 8.7,
    "year": 2024
  },
  {
    "movie": "Oppenheimer",
    "genre": "Drama",
    "country": "USA",
    "views": 32000,
    "rating": 8.4,
    "year": 2023
  },
  {
    "movie": "Barbie",
    "genre": "Comedy",
    "country": "USA",
    "views": 45000,
    "rating": 6.9,
    "year": 2023
  },
  {
    "movie": "Spider-Man No Way Home",
    "genre": "Action",
    "country": "USA",
    "views": 80000,
    "rating": 8.2,
    "year": 2021
  },
  {
    "movie": "Inception",
    "genre": "Sci-Fi",
    "country": "USA",
    "views": 120000,
    "rating": 8.8,
    "year": 2010
  },
  {
    "movie": "Parasite",
    "genre": "Thriller",
    "country": "South Korea",
    "views": 95000,
    "rating": 8.5,
    "year": 2019
  },
  {
    "movie": "RRR",
    "genre": "Action",
    "country": "India",
    "views": 60000,
    "rating": 7.8,
    "year": 2022
  },
  {
    "movie": "Avengers Endgame",
    "genre": "Action",
    "country": "USA",
    "views": 200000,
    "rating": 8.4,
    "year": 2019
  },
  {
    "movie": "The Godfather",
    "genre": "Crime",
    "country": "USA",
    "views": 75000,
    "rating": 9.2,
    "year": 1972
  },
  {
    "movie": "Schindler's List",
    "genre": "Drama",
    "country": "USA",
    "views": 40000,
    "rating": 9.0,
    "year": 1993
  },
  {
    "movie": "Pulp Fiction",
    "genre": "Crime",
    "country": "USA",
    "views": 110000,
    "rating": 8.9,
    "year": 1994
  },
  {
    "movie": "The Dark Knight",
    "genre": "Action",
    "country": "USA",
    "views": 180000,
    "rating": 9.0,
    "year": 2008
  },
  {
    "movie": "Fight Club",
    "genre": "Drama",
    "country": "USA",
    "views": 140000,
    "rating": 8.8,
    "year": 1999
  },
  {
    "movie": "3 Idiots",
    "genre": "Comedy",
    "country": "India",
    "views": 70000,
    "rating": 8.4,
    "year": 2009
  }
]);

//Command

db.mongo1.aggregate([{$match: {"year": 2024}},{ $group: {_id: "$genre",totalViews: { $sum: "$views" },avgRating: { $avg: "$rating" }}},{$match: { "totalViews": {$gt:10000}}},{ $project: {_id: 0,genre: "$_id",totalViews: 1,avgRating: { $round:["$avgRating", 1] }}}]);