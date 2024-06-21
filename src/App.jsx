
import viteLogo from '/vite.svg'
import {gql, useQuery} from "@apollo/client";
import {ListCountry} from "./components/ListCountry.jsx";
import {PagePrincipal} from "./pages/PagePrincipal.jsx";
import {AppRouter} from "./AppRouter.jsx";
import {CountryRoutes} from "./routes/CountryRoutes.jsx";



function App() {
    /*
        const {data,error,loading} = useQuery(ALL_CONTINENTS)
         if (error) return <p>Error: {error.message}</p>;

      return (
        <>
          <div >
                {loading
                    ? <p>Loading ...</p>

                    :( <PagePrincipal continent={data?.continents} />
                    )
                }
        </div>
        </>
      )
    }*/

    return(
        <CountryRoutes/>
    )
}

export default App
