import mongoose from "mongoose";

export default async function connect() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL!);
    console.log("Mongo Db connected Succesfuly");
  } catch (error: any) {
    console.log("Error Connecting Database", error.message);
  }
}
