import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchOnDemandShoes, fetchInStockShoes } from "../../redux/features/shoe/shoeSlice";
import { AppDispatch, RootState } from "../../redux/store/reduxStore";
import { useSelector } from "react-redux";
import { ShoeCard } from "../../components/shoe-card/ShoeCard";
import './ShoeList.css';


export const ShoeList = () => {

    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();
    const shoes = useSelector((state: RootState) => state.shoeReducer.onDemandShoes);
    const [param, setParam] = useState<string>('');
    const [paramError, setParamError] = useState<string>('');
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const queryParam = searchParams.get('f');
        if (queryParam) {
            setParam(queryParam);
        }
    }, []);

    useEffect(() => {
        // Evitar el efecto en el primer renderizado del componente
        if (renderCount > 1) {
            handleFetchList(param);
        } else {
            setRenderCount(renderCount + 1);
        }
    }, [param, renderCount]);

    const handleFetchList = (param: string) => {
        if (param === 'encargue') {
            dispatch(fetchOnDemandShoes());
        } else if (param === 'stock') {
            dispatch(fetchInStockShoes());
        } else {
            setParamError("Error. Vuelva a intentarlo nuevamente")
        }
    }


    return (
        <main>
            {
                paramError &&
                <div>
                    <p>Error, intentelo nuevamente</p>
                </div>
            }
            <div className="title container">
                {
                    param === 'stock' ?
                        <h1>En Stock</h1>
                        :
                        <h1>A pedido</h1>
                }
            </div>
            {
                shoes.length > 0 &&
                <ul className="shoe-list">
                    {
                        shoes.map((shoe, i) => {
                            return (
                                <ShoeCard shoe={shoe} key={`${shoe.id}-${i}`} param={param}/>
                            )
                        })
                    }
                </ul>
            }


        </main>
    )
}
