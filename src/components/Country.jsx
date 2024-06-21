export const Country =({country})=> {
    return (
        <>
            <div className={"bg-white "}>
                <div>
                    <img alt={"Pais"} />
                    <p>Continent</p>
                </div>
                <div>
                    <p>Capital: <span>{country.name}</span></p>
                   <ul className="list-disc pl-6">
                        {country.languages.map((state) => (
                            <li key={state.name}>{state.name}</li>
                        ))}
                    </ul>
                    <p>Capital: <span>{country.capital}</span></p>
                    <p>Currency: <span>{country.currency}</span></p>
                </div>
                <div>
                    <h3 className=" font-bold mb-2">Estados:</h3>
                    <ul className="list-disc pl-6">
                        {country.states.map((state) => (
                            <li key={state.name}>{state.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
