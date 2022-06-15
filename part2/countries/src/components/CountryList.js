import { useState } from "react";
import View from "./View";

export default function CountryList({ countries }) {
  const [cntryView, setCntryView] = useState(null);
  return countries.map((cntry) => {
    const isThisCntry = cntryView && cntryView.name.common === cntry.name.common;
    return (
      <div key={cntry.name.common}>
        <p>
          {`${cntry.name.common} `}
          <button onClick={() => (isThisCntry ? setCntryView(null) : setCntryView(cntry))}>
            {isThisCntry ? "hide" : "show"}
          </button>
        </p>
        {isThisCntry ? <View country={cntryView} /> : ""}
      </div>
    );
  });
}
