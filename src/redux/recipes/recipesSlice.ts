import {createSlice} from "@reduxjs/toolkit";

import {Recipe, RecipeState} from "../../types/userTypes";

import {fetchRecipes, createRecipe} from "./recipesOperations";
// import {handlePending, handleRejected} from "../auth/authSlice";
import {logout} from "../auth/authOperations";

const initialState: RecipeState = {
    recipes: [],
    isLoading: false,
    error: null,
};

const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(fetchRecipes.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(createRecipe.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchRecipes.rejected, (state, action) => {
            state.error = action.payload || "Server error";
            state.isLoading = false;
        })
        .addCase(createRecipe.rejected, (state, action) => {
            state.error = action.payload || 'Server error';
            state.isLoading = false;
        })
        .addCase(fetchRecipes.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            state.recipes = payload;
        }).addCase(createRecipe.fulfilled, (state, {payload}) =>{
            state.isLoading = false;
            state.error = null;
            state.recipes.push(payload)
        }).addCase(logout.fulfilled, (state)=> {
            state.recipes = [];
            state.error = null;
            state.isLoading = false;
        })
})

export const  recipesReducer = recipesSlice.reducer;