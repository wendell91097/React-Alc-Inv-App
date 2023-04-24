

import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        type: 'Type',
        price: "Price",
        proof: "Proof",
        origin: "Origin",
        vintage: "Vintage",
        description: "Description"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload }, 
        chooseType: (state, action) => { state.type = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseProof: (state, action) => { state.proof = action.payload },
        chooseOrigin: (state, action) => { state.origin = action.payload },
        chooseVintage: (state, action) => { state.vintage = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseType, choosePrice, chooseProof, chooseOrigin, chooseVintage, chooseDescription } = rootSlice.actions