const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://foodFinder:foodFinder@cluster0.ga8vhtw.mongodb.net/foodFinder?retryWrites=true&w=majority";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("Database Connected!!");
        const data = await mongoose.connection.db.collection("food_items").find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection("food_category").find({}).toArray();
        global.food_items=data;
        global.food_category=foodCategory;
        // console.log(food_items);
        // console.log(food_category);
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

module.exports = mongoDB;
