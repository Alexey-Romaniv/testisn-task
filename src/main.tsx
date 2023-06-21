import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";
import {store, persist} from "./redux/store";
import {GlobalStyles} from "./utils/GlobalStyles";
import theme from "./utils/theme";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <PersistGate persistor={persist}>
                    <Router>
                        <GlobalStyles/>
                        <App/>
                    </Router>
                </PersistGate>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
)
