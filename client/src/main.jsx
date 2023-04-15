import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainID, ThirdwebProvider } from "@thirdweb/thirdweb-provider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ThirdwebProvider desiredChainId={ChainID.Sepolia}>
        <Router>
            <App />
        </Router>   
    </ThirdwebProvider>
);