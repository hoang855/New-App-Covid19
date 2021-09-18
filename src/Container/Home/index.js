import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import CountrySelector from "../../Components/CountrySelector";
import Highlight from "../../Components/Highlight";
import Summary from "../../Components/Summary";

import API from "../../Apis";

const Home = () => {
  const [countries, setcountries] = useState([]);
  

  useEffect(() => {
    API.fetcountries().then((res) => {
      console.log({ res });
      setcountries(res.data);
    });
  }, []);

  const handleOnChange = (e) => {
    const { Slug } = countries.find(
      (country) => country.ISO2.toLowerCase() === e.target.value
    );
    console.log({ e, Slug });

    // get Api

    API.getCountries(Slug).then((res) =>
      console.log("getReportBycountry", { res })
    );
  };

  return (
    <>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} />
      <Highlight />
      <Summary />
    </>
  );
};

export default Home;
