import React, { useEffect, useState } from "react";
import axios from "axios";

const SeriesList = () => {
  const [series, setSeries] = useState([]);
  //get the data
  // fetch it with axios

  const fetchSeries = async () => {
    const response = await axios.get("https://content.viaplay.se/pc-se/serier/samtliga");
    setSeries(response.data.results);
  };
  const seriesList = series.map(serie) => {
    return (
      <li key={}>
        <h3>{}</h3>
      </li>
    );
});
  
  //call for fetchEmployee function
  useEffect(() => {
    fetchSeries();
  }, []);

  return <ul data-cy="series-list">{seriesList}</ul>;
};

export default SeriesList;
