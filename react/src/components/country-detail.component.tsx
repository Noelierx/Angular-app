import React from 'react';

interface Country {
  name: string;
  capital: string;
  area: number;
  population: number;
  gdp: number;
  currency: string;
}

interface CountryDetailProps {
  country: Country | null;
  goBack: () => void;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ country, goBack }) => {
  if (!country) {
    return null;
  }

  return (
    <div className="container">
      <div>
        <h2>{country.name.toUpperCase()}</h2>
        <p>
          <span>Capital: </span>{country.capital}
        </p>
        <p>
          <span>Area: </span>{country.area.toLocaleString()} km<sup>2</sup>
        </p>
        <p>
          <span>Population: </span>{country.population.toLocaleString()}
        </p>
        <p>
          <span>GDP: </span>{country.gdp.toLocaleString()} USD
        </p>
        <p>
          <span>Currency: </span>{country.currency}
        </p>
        <button onClick={goBack}>Go Back</button>
      </div>
    </div>
  );
};

export default CountryDetail;