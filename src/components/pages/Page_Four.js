import React from "react";

import Header from "../../budget-components/Header";
import Balance from "../../budget-components/Balance";
import IncomeList from "../../budget-components/IncomeList";
import ExpenseList from "../../budget-components/ExpenseList";
import AddTransaction from "../../budget-components/AddTransaction";
import { GlobalContextProvider } from "../../context/GlobalState";
import "./Page_Four.css";
import About from "../About/About";


const PageFour = () => {
    return (
        <GlobalContextProvider>
            <div className="container-fluid">
                <div className="app-wrapper">
                    <Header />
                    <Balance />
                    <IncomeList />
                    <ExpenseList />
                    <AddTransaction />

                </div>

            </div>
            <About />


        </GlobalContextProvider>
    );
};

export default PageFour;