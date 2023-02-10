import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { blobService } from "../../dbConfig"

export interface ProductHome {
    isLoading: boolean,
    productImagesResponse: []
}

const initialState: ProductHome = {
    isLoading: false,
    productImagesResponse: [],
};

export const getProductImages = createAsyncThunk(
    "home/getProductImages",
    async () => {
        let data = [];
        const baseUrl = "https://devgurukulstorage.blob.core.windows.net/knowledebase/";

        try {
            for await (let blob of blobService.listBlobsFlat({ prefix: "productImage/" })) {
                data.push(`${baseUrl}${blob.name}`);
            }
            return { status: 'success', data }
        } catch (error: any) {
            return { status: 'error', error }
        }
    }
);

const productImagesSlice = createSlice({
    name: "productImages",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductImages.pending, (state: any) => {
            return { ...state, isLoading: true };
        })
        builder.addCase(getProductImages.fulfilled, (state: any, { payload }) => {
            return { ...state, productImagesResponse: payload.data, isLoading: false };
        })
        builder.addCase(getProductImages.rejected, (state: any) => {
            return { ...state, isLoading: false };
        })
    }
})

export const { } = productImagesSlice.actions;

export default productImagesSlice.reducer;