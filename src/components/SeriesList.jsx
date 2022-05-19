import React, { useEffect, useState } from "react";
import axios from "axios";

const SeriesList = () => {
  const [series, setSeries] = useState([]);

  const fetchSeries = async () => {
    const response = await axios.get(
      "https://content.viaplay.se/pc-se/serier/samtliga"
    );

    setSeries(
      response.data._embedded["viaplay:blocks"][0]._embedded["viaplay:products"]
    );
  };

  const seriesList = series.map((serie) => {
    return (
      <li key={serie.publicPath}>
        <h3>{serie.publicPath}</h3>
      </li>
    );
  });

  useEffect(() => {
    fetchSeries();
  }, []);

  return <ul data-cy="series-list">{seriesList}</ul>;
};

export default SeriesList;
