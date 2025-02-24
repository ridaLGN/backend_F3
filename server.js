const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const CategoryRoute = require("./routes/category")
const RestaurantRoute = require("./routes/restaurant")
const FoodRoute = require("./routes/food")
const RatingRoute = require("./routes/rating")
const AuthRoute = require("./routes/auth");
const UserRoute = require("./routes/user");



dotenv.config();

mongoose.connect(process.env.MONGOURL)
.then(() => console.log("Foodly Database Connected"))
.catch((err) => console.log(err));



app.use(express.json());                 
app.use(express.urlencoded({extended: true}));
app.use("/", AuthRoute);
app.use("/api/users", UserRoute);
app.use("/api/category", CategoryRoute);
app.use("/api/restaurant", RestaurantRoute);
app.use("/api/foods", FoodRoute);
app.use("/api/rating", RatingRoute);



app.listen(process.env.PORT || 6013, () => console.log(`Foodly Backend is running on ${process.env.PORT}!`))