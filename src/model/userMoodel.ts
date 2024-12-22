import mongoose from "mongoose";
import { minify } from "next/dist/build/swc/generated-native";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username Required!"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email Required!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password Required!"],
  },
});

// const userModel = mongoose.model("User", userSchema);

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

export default userModel;   
