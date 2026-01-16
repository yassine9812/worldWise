import { useSearchParams, useParams } from "react-router-dom";

function City() {
  const { id } = useParams();
  const [searchParams, _setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  // TEMP DATA
  const currentCity = {
    cityName: "Lisbon",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
  };

  const { _cityName, _emoji, _date, _notes } = currentCity;

  return (
    <>
      <h1>City {id}</h1>
      <p>
        Position: {lat}, {lng}
      </p>
      ;
    </>
  );

}

export default City;
