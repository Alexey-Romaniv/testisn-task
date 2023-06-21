import React from "react";
import { Outlet} from "react-router-dom";
import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import {CircularProgress} from "@mui/material";


export const Layout= () => {
    return (
        <div>
            <AppBar/>
            <Suspense fallback={<CircularProgress />}>
                <main>
                    <Outlet />
                </main>
            </Suspense>
        </div>
    );
};
