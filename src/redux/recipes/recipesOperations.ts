import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Recipe} from "../../types/userTypes";
import {AuthState} from "../auth/authSlice";

export const fetchRecipes = createAsyncThunk<Recipe[], undefined, {rejectValue: string}>(
    "recipes/fetchAll",
    async (_ , {rejectWithValue}) => {
        try{
            const {data} = await axios.get("/recipes");
            return data
        }
        catch (e){
            rejectWithValue("Can't fetch all");
        }
    }
);

export const createRecipe = createAsyncThunk<Recipe, Omit<Recipe, "_id">, {rejectValue: string, state: { auth: AuthState}}>(
    "recipes/add",
    async (transactionData, {rejectWithValue, getState})=>{
        try {
            const userId = getState().auth.id;
            console.log(transactionData)
            const {data} = await axios.post(`/recipes/create/${userId}`, transactionData);

            return data;
        }
        catch (e){
            rejectWithValue("Can't create recipe");
        }
    }
);
