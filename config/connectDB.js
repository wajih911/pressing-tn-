const mongoose = require("mongoose");

const connectDB = async () => {
  // fonction asynchrone
  try {
    await mongoose.connect(process.env.DB_URI, {
      // on utilise await bech mayet3ada l console log ela mayekhdem l fonction connect
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.log("Database is not connected ," + error);
  }
};
module.exports = connectDB;
