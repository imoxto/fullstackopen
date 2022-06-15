import View from "./View";
import CountryList from "./CountryList";

export default function Countries({ countries }) {
  if (countries.length === 1) {
    return <View country={countries[0]} />;
  } else if (countries.length < 11) {
    return <CountryList countries={countries} />;
  } else {
    return <p>Unable to display {countries.length} countries. Please use another filter</p>;
  }
}
