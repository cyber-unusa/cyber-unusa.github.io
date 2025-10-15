import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUrl = process.env.MONGODB_URL;

  if (!mongoUrl) {
    console.warn(
      "MONGODB_URL is not set. Skipping database connection (useful for local dev without DB)."
    );
    return;
  }

  mongoose.connection.on("connected", () => console.log("Database Connected"));

  try {
    await mongoose.connect(`${mongoUrl}/profile-cyber`);
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
  }
};

export default connectDB;
