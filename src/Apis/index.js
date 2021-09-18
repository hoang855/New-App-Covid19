import axios from "axios";

const baseURl = "https://api.covid19api.com";
const API = {
  fetcountries: () => {
    return axios.get(`${baseURl}/countries`);
  },

  getCountries: (country) => {
    return axios.get(`${baseURl}/dayone/country/${country}`);
  },
};
export default API;