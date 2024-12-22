import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB Connected successfully!");
    });

    connection.on("error", () => {
      console.log("Failed to connect to MongoDB!");
      process.exit(1);
    });
  } catch (error) {
    console.error(error);
  }
};
