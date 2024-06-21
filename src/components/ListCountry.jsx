import { useState, useEffect } from "react";
import {Country} from "./Country.jsx";

export const ListCountry = ({ continent }) => {
    const [imagenes, setImagenes] = useState({});
    const [verPais, setVerPais] = useState(false)
    const [paisSeleccionado, setPaisSeleccionado] = useState(null);
    const buscarImagen = async (pais) => {
        const API_KEY = 'pM_RkeC0SohKY6xX8zL9FaGh1Syx1pW8CZPQjr7QG-w';
        const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${pais}`;
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data.results[0].urls?.regular)
        return data.results[0]?.urls?.regular; // Devuelve la URL de la primera imagen encontrada
    };

    useEffect(() => {
        const cargarImagenes = async () => {
            const nuevasImagenes = {};
            for (const cont of continent) {
                for (const c of cont.countries) {
                    const imagen = await buscarImagen(c.name);
                    if (imagen) {
                        nuevasImagenes[c.name] = imagen;
                    }
                }
            }
            setImagenes(nuevasImagenes);
        };

        cargarImagenes();
    }, [continent]);

    if (!continent || continent.length === 0) return null;

    const handlePaisClick = (pais) => {
        setPaisSeleccionado(pais);
    };

    const cerrar =()=>{
        setPaisSeleccionado(null)
    }

    return (
        <div className=" grid grid-cols-2 gap-3 p-4 ">
            <div className={""}>
                {continent.map((cont) => (
                    <div key={cont.code} className="col-span-12 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {cont.countries.map((c) => (
                                <div
                                    className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer"
                                    key={c.name}
                                    onClick={() => handlePaisClick(c)}
                                >
                                    {imagenes[c.name] ? (
                                        <img
                                            src={imagenes[c.name]}
                                            alt={c.name}
                                            className="w-full h-32 object-cover rounded-lg mb-4"
                                        />
                                    ) : (
                                        <div className="w-full h-32 flex items-center justify-center bg-gray-200 rounded-lg mb-4">
                                            <p className="text-gray-500">Cargando imagen...</p>
                                        </div>
                                    )}
                                    <h3 className="text-sky-400 text-xl font-bold">{c.name}</h3>
                                    <h4 className="text-gray-400 font-bold mb-4">{cont.name}</h4>
                                </div>
                            ))}
                        </div>

                        
                    </div>
                ))}
            </div>
            <div className="">
                {paisSeleccionado && (
                    <div className="bg-white shadow-md rounded-lg p-4 h-full">
                        <h2 className="text-xl font-bold mb-4">Detalles de {paisSeleccionado.name}</h2>
                        <Country country={paisSeleccionado}  />
                    </div>
                )}
            </div>
        </div>
    );
};