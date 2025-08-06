import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      lowercase: true,
      maxlength: 32,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      maxlength: 32,
      trim: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: true,

      trim: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      maxlength: 32,
      trim: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
  },
  { timestamps: true }
);

export const userModel = model("User", userSchema);
