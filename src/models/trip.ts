import { model, Schema } from "mongoose";

type 선호_여행_타입 =
  | "산"
  | "바다"
  | "역사관광지"
  | "체험관광지"
  | "건축/조형물"
  | "카페";

type 선호_숙박_시설 = "호텔" | "모텔" | "펜션";
type 선호_음식 = "한식" | "일식" | "중식";

interface Trip {
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  location: string; // 사용자가 여행 하고자 하는 지역
  preferredTransportation: "자가용" | "택시" | "버스/지하철";
  preferredPlaces: 선호_여행_타입[];
  preferredAccommodations: 선호_숙박_시설[];
  preferredFoods: 선호_음식[];
}

const tripSchema = new Schema<Trip>({
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  location: { type: String, required: true },
  preferredTransportation: { type: String, required: true },
  preferredPlaces: { type: [], required: true },
  preferredAccommodations: { type: [], required: true },
  preferredFoods: { type: [], required: true },
});

export const Trip = model<Trip>("Trip", tripSchema);
