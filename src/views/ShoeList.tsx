import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
// import { fetchOnDemandShoes, fetchInStockShoes } from "../redux/features/shoe/ShoeSlice";


export const ShoeList = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const [param, setParam] = useState<string>('');
    const [paramError, setParamError] = useState<string>('');

 /*    const handleFetchList = (param: string) => {
        if (param === 'demand') {
            dispatch(fetchOnDemandShoes());
        } else if (param === 'stock') {
            dispatch(fetchInStockShoes());
        } else {
            setParamError("Error. Vuelva a intentarlo nuevamente")
        }

    } */

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        console.log(location.search)
        const queryParam = searchParams.get('f');
        if (queryParam) {
            setParam(queryParam);
        }
    }, []);
    
    
 useEffect(() => {
    console.log(param)    
    //handleFetchList(param);
    }, [param])
 

    return (
        <main>
            {
                paramError &&
                <div>
                    <p>Error, intentelo nuevamente</p>
                </div>
            }
            <h3>LIST SHOE !</h3>
        </main>
    )
}
