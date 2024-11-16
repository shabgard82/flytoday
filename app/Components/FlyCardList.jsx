"use client";
import { useState } from "react";
import { pricedItineraries } from "../data/db";
import FlyCard from "./FlyCard";
import FlySort from "./FlySort";
import FilterBox from "./FilterBox";
import NewFlycard from "./NewFlyCard";

export default function FlyCardList() {
  const [sortedItineraries, setSortedItineraries] = useState(pricedItineraries);
  const [sortCriteria, setSortCriteria] = useState("قیمت");
  const [filters, setFilters] = useState({
    charter: false,
    system: false,
    economy: false,
    business: false,
  });

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
  const filteredItineraries = sortedItineraries.filter((flight) => {
    const matchesCharter = filters.charter ? flight.isCharter : true;
    const matchesSystem = filters.system ? flight.isSystem : true;

    const matchesCabinClass =
      filters.economy || filters.business
        ? flight.originDestinationOptions.some((option) =>
            option.flightSegments.some(
              (segment) =>
                (filters.economy && segment.cabinClassCode === "Y") ||
                (filters.business && segment.cabinClassCode === "C")
            )
          )
        : true;

    return matchesCharter && matchesSystem && matchesCabinClass;
  });

  return (
    <div className="flex justify-center gap-10">
      <div>
        {/* <FlySort
          handleSortChange={handleSortChange}
          sortCriteria={sortCriteria}
        /> */}
        {filteredItineraries.map((flight) => {
          return flight.originDestinationOptions.map((option) => {
            return option.flightSegments.map((segment) => {
              return (
                <NewFlycard
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
      {/* <FilterBox filters={filters} setFilters={setFilters} /> */}
    </div>
  );
}
