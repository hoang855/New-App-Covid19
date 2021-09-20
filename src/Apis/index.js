import axios from "axios";
// import "@highcharts/map-collection"

const baseURl = "https://api.covid19api.com";
const API = {
  fetcountries: () => {
    return axios.get(`${baseURl}/countries`);
  },

  getCountries: (country) => {
    return axios.get(`${baseURl}/dayone/country/${country}`);
  },

  getsummary: () => {
    return axios.get(`https://api.covid19api.com/summary`);
  },
};
export default API;
