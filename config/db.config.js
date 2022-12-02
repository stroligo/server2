import mongoose from "mongoose";

async function conect() {
  try {
    const dbConection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conection in DB ");
  } catch (error) {
    console.log(error);
  }
}
export default conect;
