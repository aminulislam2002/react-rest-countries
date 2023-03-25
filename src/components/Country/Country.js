import React from "react";
import "./Country.css";

const Country = (props) => {
//   console.log(props.country);
  const { name, capital, area, region, population, flags } = props.country;
  return (
    <div className="country">
      <h1>Country Name: {name.common}</h1>
      <img src={flags.png} alt="" />
      <h2>Capital Name: {capital}</h2>
      <h3>Area: {area}</h3>
      <h4>Region: {region}</h4>
      <h5>Population: {population}</h5>
    </div>
  );
};

export default Country;
