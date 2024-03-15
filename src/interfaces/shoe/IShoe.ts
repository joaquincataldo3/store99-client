import { IBrand } from "../brand/IBrand"
import { IShoeFile } from "../shoe-file/IShoeFile"
import { IStockShoesSizes } from "../stock-shoe-size/IStockShoesSizes"

export interface IShoe {
    id: number
    name: string
    colorName: string
    createdAt: Date | null
    brand: IBrand
    shoeFiles: IShoeFile[]
    stockShoesSizes: IStockShoesSizes[]
}