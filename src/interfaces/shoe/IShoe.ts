import { IBrand } from "../brand/IBrand"
import { IShoeFile } from "../shoe-file/IShoeFile"
import { IStockShoeSize } from "../stock-shoe-size/IStockShoeSize"

export interface IShoe {
    id: number
    name: string
    createdAt: Date | null
    brand: IBrand
    shoeFiles: IShoeFile[]
    stockShoeSizes: IStockShoeSize[]
}