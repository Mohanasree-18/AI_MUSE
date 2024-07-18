const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      ""
    );
    console.log(`MONGODB CONNECTED SUCCESSFULLY TO ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;
