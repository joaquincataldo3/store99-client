import { ILoading } from "../loading/ILoading";
import { IShoe } from "./IShoe";

export interface IShoeInitialState {
    shoe: IShoe | null
    inStockShoes: IShoe[] | []
    onDemandShoes: IShoe[] | []
    isFetchingShoeLoading: ILoading
    isFetchingInStockShoesLoading: ILoading
    isFetchingOnDemandShoesLoading: ILoading
}