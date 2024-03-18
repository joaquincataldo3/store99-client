import { IBrand } from "../brand/IBrand"
import { IShoeFile } from "../shoe-file/IShoeFile"
import { IStockShoeSizes } from "../stock-shoe-size/IStockShoesSizes"

export interface IShoe {
    id: number
    name: string
    colorName: string
    createdAt: Date | null
    brand: IBrand
    shoeFiles: IShoeFile[]
    stockShoeSizes: IStockShoeSizes[]
}