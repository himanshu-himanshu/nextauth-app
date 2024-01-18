import mongoose, { Schema, models } from "mongoose";

/**
 * -----------------------------------------------
 * User Model
 * -----------------------------------------------
 */

const userSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);

export default User;
