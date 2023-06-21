import React , {PropsWithChildren}from "react";
import {Navigate} from "react-router";
import {Layout} from "../components/Layout/Layout";
import {Routes, Route} from "react-router-dom";
import RecipesPage from "../pages/RecipesPage";
import {useAppSelector} from "../utils/hook";

interface RouteProps {}

export const PrivateRoute: React.FC<PropsWithChildren<RouteProps>> = ({children}) => {
    const isAuth = useAppSelector(state => state.auth.isAuth);

    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}


export const PublicRoute: React.FC<PropsWithChildren<RouteProps>> = ({children}) => {
    const isAuth = useAppSelector(state => state.auth.isAuth);

    if (isAuth) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
}



