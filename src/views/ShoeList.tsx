import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchOnDemandShoes,  fetchInStockShoes } from "../redux/features/shoe/shoeSlice";
import { AppDispatch, RootState } from "../redux/store/reduxStore";
import { useSelector } from "react-redux";
import { ShoeCard } from "../components/shoe-card/ShoeCard";


export const ShoeList = () => {

    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();
    const shoes = useSelector((state: RootState) => state.shoeReducer.onDemandShoes);
    const [param, setParam] = useState<string>('');
    const [paramError, setParamError] = useState<string>('');

    const handleFetchList = (param: string) => {
        if (param === 'demand') {
            dispatch(fetchOnDemandShoes());
        } else if (param === 'stock') {
            dispatch(fetchInStockShoes());
        } else {
            setParamError("Error. Vuelva a intentarlo nuevamente")
        }

    } 
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
        handleFetchList(param);
    }, [param])
 

    return (
        <main>
            {
                paramError &&
                <div>
                    <p>Error, intentelo nuevamente</p>
                </div>
            }
            {
                !paramError && shoes.length > 0 &&
                <div className="shoe-list-container">
                <ul className="shoe-list">
                    {
                        shoes.map(shoe => {
                            return (
                                <ShoeCard shoe={shoe}/>
                            )
                        })
                    }
                </ul>
            </div>
            }
           
        </main>
    )
}
