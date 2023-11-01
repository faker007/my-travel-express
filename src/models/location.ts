import { model, Schema } from "mongoose";

interface Location {
  lot: number;
  lat: number;
  name: string;
  price?: number;
}

const locationSchema = new Schema<Location>({
  lot: { type: Number, required: true },
  lat: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number },
});

export const Location = model<Location>("Trip", locationSchema);
