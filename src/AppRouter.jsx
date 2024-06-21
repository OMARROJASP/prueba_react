import {Route, Routes} from "react-router-dom";

import {CountryRoutes} from "./routes/CountryRoutes.jsx";


export const AppRouter =()=> {

    return(
        <Routes>
            <Route path={'/*'} element={<CountryRoutes/>}/>
        </Routes>
    )
}
