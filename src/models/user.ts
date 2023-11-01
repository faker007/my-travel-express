import { Schema, model } from "mongoose";

interface User {
  name: string;
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
});

export const User = model<User>("User", userSchema);
