import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const Barra =()=> {

    const [activado,setActivado] = useState(1);

    const navigate = useNavigate();

    const goHome =()=> {
        setActivado(1)
        navigate('/main')
    }

    const goVista1 =()=> {
        setActivado(2)
        navigate('/main/vista1')
    }

    const goVista2 =()=> {
        setActivado(3)
        navigate('/main/vista2')
    }


    return (
        <div className="flex flex-col items-center bg-stone-700 font-bold h-full">
            <div className="bg-gray-400 m-7 h-24 flex justify-center items-center w-10/12 text-center rounded py-3  text-gray-700">
                <p>Logo</p>
            </div>
            <button onClick={goHome} className={
                activado === 1? "bg-gray-200 m-4 px-2 rounded w-11/12 h-12": "text-white  m-4 px-2 w-11/12 h-12"
            }>Home</button>
            <button onClick={goVista1} className={
                activado === 2? "bg-gray-200 m-4 px-2 rounded w-11/12 h-12": "text-white  m-4 px-2 w-11/12 h-12"
            }>Vista 1</button>
            <button onClick={goVista2} className={
                activado === 3? "bg-gray-200 m-4 px-2 rounded w-11/12 h-12": "text-white  m-4 px-2 w-11/12 h-12"
            }>Vista 2</button>
        </div>
    );

}