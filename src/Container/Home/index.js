import React, { Component, useEffect, useState } from "react";
import CountrySelector from "../../Components/CountrySelector";
import Highlight from "../../Components/Highlight";
import Summary from "../../Components/Summary";

import API from "../../Apis";

const Home = () => {
  const [countries, setcountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    API.fetcountries().then((res) => {
      setcountries(res.data);
      setSelectedCountryId('vn')
    });
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      API.getCountries(Slug).then((res) => {
        // Xóa arr Cuối mảng data trả về
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);

  return (
    <>
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountryId}
      />
      <Highlight report={report} selectedCountryId={selectedCountryId}/>
      <Summary countryId={selectedCountryId} report={report} />
    </>
  );
};

export default Home;
