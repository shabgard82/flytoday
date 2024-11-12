import { pricedItineraries } from "../data/db";
import FlyCard from "./FlyCard";

export default function FlyCardList() {
  return (
    <div className="pb-10">
      {pricedItineraries.map((item) => (
        <div>
          <FlyCard />
        </div>
      ))}
    </div>
  );
}
