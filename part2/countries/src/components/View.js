import axios from "axios";
import { useEffect, useState } from "react";
export default function View({ country }) {
  const {
    name: { common: commonName },
    capital,
    languages,
    flags,
    area,
  } = country;
  const [weath, setWeath] = useState({
    temp: undefined,
    icon: undefined,
    wind: undefined,
  });
  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital[0]}&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res) =>
        setWeath({
          temp: res.data.main.temp - 273,
          icon: res.data.weather[0].icon,
          wind: res.data.wind.speed,
        })
      )
      .catch((err) => console.log(err));
  }, [capital]);
  return (
    <>
      <h1>{commonName}</h1>
      <p>Capital: {capital.join(", ")}</p>
      <p>Area: {area}</p>
      <h3>Languages: </h3>
      {Object.values(languages).map((val) => (
        <li key={val}>{val}</li>
      ))}
      <img src={flags.png} alt={`flag of ${commonName}`} />
      <p>{weath.temp ? `Temperature: ${Number(weath.temp).toFixed(2)} Celcius` : `Temperature unavailable`}</p>
      <img alt={`Icon is ${weath.icon}`} src={`http://openweathermap.org/img/wn/${weath.icon}@2x.png`} />
      <p>{weath.wind ? `Wind ${weath.wind} m/s` : `Wind unavailable`}</p>
    </>
  );
}
