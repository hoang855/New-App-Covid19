import { FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import "./CountrySelecto.css";

const CountrySelector = ({ value, handleOnChange, countries }) => {
  return (
    <div className="form-css">
      <FormControl>
        <InputLabel htmlFor="country-selector" shrink>
          Quốc Gia
        </InputLabel>
        <NativeSelect
          value={value}
          onChange={handleOnChange}
          inputProps={{
            name: "country",
            id: "country-selector",
          }}
        >
          {countries.map((country) => {
            return <option value={country.ISO2.toLowerCase()}>{country.Country}</option>;
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountrySelector;
