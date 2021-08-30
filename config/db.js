const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // are not supported
    // useCreateIndex: true,
    // useFindAndModify: true,
  });

  console.log("MongoDB connected");
};

module.exports = connectDB;
