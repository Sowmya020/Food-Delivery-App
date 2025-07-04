import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tangisowmya:sowmi2005@cluster0.z39jm5h.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}