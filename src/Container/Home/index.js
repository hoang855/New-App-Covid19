import React, { Component, useEffect, useState } from "react";
import CountrySelector from "../../Components/CountrySelector";
import Highlight from "../../Components/Highlight";
import Summary from "../../Components/Summary";
import API from "../../Apis";
import { sortBy } from "lodash";

const Home = () => {
  const [countries, setcountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);
  const [getsummary, setgetsummary] = useState([]);

  useEffect(() => {
    API.fetcountries().then((ele) => {
      const { data } = ele;
      const sorcountry = sortBy(data, "Country");
      setcountries(sorcountry);
      setSelectedCountryId("vn");
    });
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryId(e);
  };

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      API.getCountries(Slug).then((ele) => {
        ele.data.pop();
        setReport(ele.data);
      });
    }
  }, [countries, selectedCountryId]);

  useEffect(() => {
    API.getsummary().then((ele) => {
      setgetsummary(ele.data.Countries);
    });
  }, []);

  return (
    <>
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountryId}
      />
      <Highlight report={report} selectedCountryId={selectedCountryId} />
      <Summary
        countryId={selectedCountryId}
        report={report}
        getsummary={getsummary}
      />
    </>
  );
};

export default Home;
