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
    API.fetcountries().then((res) => {
      const { data } = res;
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
      API.getCountries(Slug).then((res) => {
        // Xóa arr Cuối mảng data trả về
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);

  useEffect(() => {
    API.getsummary().then((res) => {
      setgetsummary(res.data.Countries);
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
      <Summary countryId={selectedCountryId} report={report} getsummary={getsummary}/>
    </>
  );
};

export default Home;