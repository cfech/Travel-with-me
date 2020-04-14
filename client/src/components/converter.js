//Imports
import React, { useEffect, useState } from "react";

//Currency Converter
const Converter = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    getValue();
  });
  const getValue = async () => {
    let z = "DKK";
    let amount = 10;
    fetch(`https://api.frankfurter.app/latest?from=USD`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.rates);
        // how can i set the data to a variable?  (data.rates.VARIABLE)
        setValue(data.rates.DKK);
      });
  };

  return (
    <>
      <div>Conversion Rate = {value}</div>
    </>
  );
};

export default Converter;
