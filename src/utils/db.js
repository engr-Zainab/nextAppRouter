import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error);
    throw error;
  }
};

export default connect;
