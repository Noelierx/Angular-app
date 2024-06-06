import React from 'react';
import { Link } from 'react-router-dom';

interface Country {
  name: string;
  capital: string;
}

interface AllCountriesProps {
  countries: Country[];
}

const AllCountries: React.FC<AllCountriesProps> = ({ countries }) => {
  return (
    <div className="container">
      <h2>List of All the Countries in Our Database</h2>
      {countries.map((country) => (
        <Link key={country.name} to={`/detail/${country.name}`} className="country-unit">
          <div className="country-block">
            <h4>{country.name}</h4>
            <p>Capital <br /> ({country.capital})</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllCountries;