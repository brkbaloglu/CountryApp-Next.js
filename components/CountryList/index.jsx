import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

async function getCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    return response.json()
}


async function CountryList() {

    const countries = await getCountries()
    // console.log(countries[0].name);

  return (
    <div >
        {
            countries.map((country, index) => (
                <div key={index} className='grid grid-cols-2 p-10 mx-10 border-b-2'>
                    <Image width={300} height={200} alt={`${country.name.official} Flag`} src={country.flags.png}></Image>
                    <div>
                        <h3 className='font-bold'>Country Name: <span className='font-normal'>{country.name.official}</span></h3>
                        <h3 className='font-bold'>Country Capital: <span className='font-normal'>{country.capital}</span></h3>
                        <h3 className='font-bold'>Country Population: <span className='font-normal'>{country.population}</span></h3>
                        <h3 className='font-bold'>Country Continent: <span className='font-normal'>{country.continents}</span></h3>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CountryList