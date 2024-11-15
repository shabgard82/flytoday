"use client";
import { useState } from "react";
import { pricedItineraries } from "../data/db";
//COMPONENTS
import FlyCard from "./FlyCard";
import FlySort from "./FlySort";
import FilterBox from "./FilterBox";

export default function FlyCardList() {
  const [sortedItineraries, setSortedItineraries] = useState(pricedItineraries);
  const [sortCriteria, setSortCriteria] = useState("قیمت");

  const handleSortChange = (e) => {
    const selectedCriteria = e.target.value;
    setSortCriteria(selectedCriteria);

    const sortedData = [...pricedItineraries].sort((a, b) => {
      if (selectedCriteria === "قیمت") {
        return (
          a.airItineraryPricingInfo.itinTotalFare.totalFare -
          b.airItineraryPricingInfo.itinTotalFare.totalFare
        );
      } else if (selectedCriteria === "زمان پرواز") {
        return (
          a.originDestinationOptions[0].journeyDurationPerMinute -
          b.originDestinationOptions[0].journeyDurationPerMinute
        );
      }
      return 0;
    });

    setSortedItineraries(sortedData);
  };

  return (
    <div className="flex items-center">
      <div>
        <FlySort
          handleSortChange={handleSortChange}
          sortCriteria={sortCriteria}
        />
        {sortedItineraries.map((flight) => {
          return flight.originDestinationOptions.map((option) => {
            return option.flightSegments.map((segment) => {
              return (
                <FlyCard
                  key={segment.flightNumber}
                  segment={segment}
                  flight={flight}
                  option={option}
                />
              );
            });
          });
        })}
      </div>
      <FilterBox />
    </div>
  );
}
