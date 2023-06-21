import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, {AxiosError, AxiosResponse} from "axios";
// import { AppState } from './path/to/appState';
import { AuthState} from './authSlice';
import {SignRequest, SignResponse, Recipe} from "../../types/userTypes";

axios.defaults.baseURL = "http://localhost:3000";

type AxiosSignResponse = {
    token: string,
    email: string
    id: string,
}

const token = {
    set(token: string) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

export const registration = createAsyncThunk<Omit<SignResponse, "savedRecipes">, SignRequest, {rejectValue: string}>(
    "auth/registerUser",
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post("/users/register", userData);
            console.log(data)
            token.set(data.token);
            return data;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

export const login = createAsyncThunk<SignResponse, SignRequest, {rejectValue: string}>(
    "auth/loginUser",
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post("/users/login", userData);
            console.log(data.token)
            token.set(data.token);
            return data;
        } catch (e) {
            return rejectWithValue("Can`t login");
        }
    }
);

export const logout = createAsyncThunk<undefined, undefined, {rejectValue: string}>(
    "auth/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            await axios.post("/users/logout");
            token.unset();
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

export const fetchCurrentUser = createAsyncThunk<Omit<SignResponse, "token">, undefined, {rejectValue: string, state: {auth:  AuthState }}>(
    "auth/refreshUser",
    async (_, { rejectWithValue, getState}) => {
        const tokenFromStorage = getState().auth.token;

        if (!tokenFromStorage) {
            return rejectWithValue("Unauthorized");
        }
        token.set(tokenFromStorage);
        try {
            const { data } = await axios("/users/current");
            return data;
        } catch (e) {
            return rejectWithValue("Unauthorized");
        }
    }
);

export const getSavedRecipes = createAsyncThunk<Recipe[], undefined, {rejectValue: string , state: {auth:  AuthState }}>(
    "auth/getSavedRecipes",
    async (_, {rejectWithValue, getState}) => {
        try {
            const userId = getState().auth.id;
            if (!userId){
                rejectWithValue("Can't fetch saved recipes")
            }
            const {data} = await axios.get(`/users/${userId}/savedRecipes`)
            return data;
        } catch (e) {
            rejectWithValue("Can't fetch saved recipes")
        }
    }
);

export const addSavedRecipes = createAsyncThunk<{ recipe: Recipe }, string, {rejectValue: string , state: {auth:  AuthState }}>(
    "auth/addSavedRecipe",
    async (recipeId, {rejectWithValue, getState}) => {
        try {
            const userId = getState().auth.id;
            console.log("addToSaved")
            const {data} = await axios.post(`/users/${userId}/savedRecipes/${recipeId}`)

            return data;
        } catch (e){
            rejectWithValue("Внутренняя ошибка сервера!")
        }
    }
);

export const removeSavedRecipe = createAsyncThunk<{recipe: Recipe}, string, {rejectValue: string, state: {auth:  AuthState }}>(
    "auth/removeSavedRecipe",
    async (recipeId, { rejectWithValue, getState}) => {
        try {
            const userId = getState().auth.id
            const {data} = await axios.delete(`users/${userId}/savedRecipes/${recipeId}`)
            console.log("deleteFromSaved")
            return data;
        } catch (e) {
            rejectWithValue("Внутренняя ошибка сервера!")
        }
    }
)