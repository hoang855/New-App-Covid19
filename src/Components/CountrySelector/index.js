import "./CountrySelecto.css";
import "antd/dist/antd.css";
import { Select} from "antd";
import moment from "moment";
import "moment/locale/vi";

const CountrySelector = ({ value, handleOnChange, countries }) => {
  const { Option } = Select;
  return (
    <div className="form-css">
      <Select
        defaultValue="lucy"
        className="select-style"
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map((country) => {
          return (
            <Option key={country.ISO2} value={country.ISO2.toLowerCase()}>
              {country.Country}
            </Option>
          );
        })}
      </Select>
      <div className="h3-flex">
        <h3>{moment().format("LLL")}</h3>
      </div>
    </div>
  );
};

export default CountrySelector;
