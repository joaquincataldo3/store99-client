import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IShoeInitialState } from "../../../interfaces/shoe/IShoeInitialState";
import axios from "axios";
import { IShoe } from "../../../interfaces/shoe/IShoe";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reduxStore";

const apiUrl = import.meta.env.VITE_API_URL;

const shoeInitState: IShoe = {
    id: 0,
    name: '',
    createdAt: null,
    colorName: '',
    brand: {
        id: 0,
        name: ''
    },
    shoeFiles: [],
    stockShoeSizes: []
}

const initialState: IShoeInitialState = {
    shoe: shoeInitState,
    inStockShoes: [],
    onDemandShoes: [],
    isFetchingInStockShoesLoading: 'idle',
    isFetchingOnDemandShoesLoading: 'idle',
    isFetchingShoeLoading: 'idle'
};

export const fetchOnDemandShoes = createAsyncThunk("shoe/fetchOnDemandShoes", async () => {
    try {
        const response = await axios(`${apiUrl}/api/shoes/on-demand`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.data.shoes;
        return data;
    } catch (error: any) {
        return error.message;
    }
})

export const fetchInStockShoes = createAsyncThunk("shoe/fetchInStockShoes", async () => {
    const response = await axios(`${apiUrl}/api/shoes/in-stock`, { 
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.data.shoes;
    return data;
})

const shoeSlice = createSlice({
    name: "shoe",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOnDemandShoes.pending, (state) => {
            state.isFetchingOnDemandShoesLoading = "pending"
        })
        builder.addCase(fetchOnDemandShoes.rejected, (state) => {
            state.isFetchingOnDemandShoesLoading = "error";
        })
        builder.addCase(fetchOnDemandShoes.fulfilled, (state, action) => {
            state.isFetchingOnDemandShoesLoading = "finished"
            const data = action.payload;
            state.onDemandShoes = data;
            state.isFetchingOnDemandShoesLoading = 'idle';
        })
        builder.addCase(fetchInStockShoes.pending, (state) => {
            state.isFetchingInStockShoesLoading = "pending"
        })
        builder.addCase(fetchInStockShoes.rejected, (state) => {
            state.isFetchingInStockShoesLoading = "error";
        })
        builder.addCase(fetchInStockShoes.fulfilled, (state, action) => {
            state.isFetchingInStockShoesLoading = "finished"
            const data = action.payload;
            state.onDemandShoes = data;
            state.isFetchingInStockShoesLoading = 'idle';
        })
    }
})

export const shoeReducer = shoeSlice.reducer;
