import {Barra} from "../components/barra/Barra.jsx";
import {ListCountry} from "../components/ListCountry.jsx";
import {useState} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {PagePrincipal} from "../pages/PagePrincipal.jsx";
import {Vista1} from "../components/barra/Vista1.jsx";
import {Vista2} from "../components/barra/Vista2.jsx";

export const CountryRoutes = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="grid grid-cols-12 min-h-screen">
            <div className="col-span-3">
                <Barra />
            </div>
            <div className="col-span-9 bg-blue-200">

                <div>
                    <Routes>
                        <Route path="/main" element={<PagePrincipal  />} />
                        <Route path="/main/countries" element={<ListCountry/>} />
                        <Route path="/main/vista1" element={<Vista1 />} />
                        <Route path="/main/vista2" element={<Vista2 />} />
                        <Route path="/" element={<Navigate to="/main" />} />
                        {/* <Route path="*" element={<NotFoundMessage />}/> */}
                    </Routes>
                </div>
            </div>
        </div>
    );
}
