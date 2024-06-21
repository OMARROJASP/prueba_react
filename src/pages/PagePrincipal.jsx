import React, { useState } from "react";
import { ListCountry } from "../components/ListCountry.jsx";
import { gql, useQuery } from "@apollo/client";

const ALL_CONTINENTS = gql`
  query {
    continents {
      code
      name
      countries {
        name
        code
        capital
        currency
        languages{
            name
         }
          states{
      name
    }
      }
    }
  }
`;

export const PagePrincipal = () => {
    const { data, error, loading } = useQuery(ALL_CONTINENTS);
    const [continente, setContinente] = useState([]);
    const [pais, setPais] = useState("");
    const [verFiltroContinente, setVerFiltroContinente] = useState(false);

    const handleInputChange = (e) => {
        setVerFiltroContinente(false);
        setPais(e.target.value);
    };

    const verFiltro = () => {
        setVerFiltroContinente(true);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No data available</p>;

    const filterByContinents = (name) => {
        if (continente.includes(name)) {
            setContinente(continente.filter((c) => c !== name));
        } else {
            setContinente([...continente, name]);
        }
    };

    // Filtrar países por nombre
    const filterByCountry = data.continents.map((continent) => ({
        ...continent,
        countries: continent.countries.filter((country) =>
            country.name.toLowerCase().startsWith(pais.toLowerCase())
        ),
    }));

    const filteredCountriesByContinent = filterByCountry.filter((continent) =>
        continente.length === 0 ? true : continente.includes(continent.name)
    );

    return (
        <>
            <div className="flex justify-center mt-8">
                <div className="flex flex-col bg-white rounded-lg shadow-lg p-4 w-10/12">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Buscar país"
                            value={pais}
                            onChange={handleInputChange}
                            onClick={verFiltro}
                            className="border border-gray-300 rounded-l-lg p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="text-white bg-blue-500 px-4 rounded-r-lg">
                            Buscar
                        </button>
                    </div>
                    {pais.length === 0 && (
                        <p className="mt-2 text-gray-600">
                            ¿Qué país te gustaría buscar?
                        </p>
                    )}
                    {verFiltroContinente && (
                        <div className="mt-4">
                            <p>Selecciona continentes:</p>
                            {data.continents.map((continent) => (
                                <button
                                    key={continent.code}
                                    className={`m-1 px-2 rounded h-8 ${
                                        continente.includes(continent.name) ? " bg-sky-400 border-sky-400" : "bg-gray-200 border-sky-400"
                                    }`}
                                    onClick={() => filterByContinents(continent.name)}
                                >
                                    {continent.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <ListCountry continent={filteredCountriesByContinent} />
        </>
    );
};
