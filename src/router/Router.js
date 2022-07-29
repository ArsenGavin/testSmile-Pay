import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recapitulatif from "../Components/Recapitulatif";
import Home from "../Components/Home";
import NavBar from "../Components/NavBar";
import Data from "../Data/data.json";
import * as React from "react";
import { useState } from "react";

export default function Router() {
  const [transactions, setTransactions] = useState(Data.transactions);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              transactions={transactions}
              setTransactions={setTransactions}
            />
          }
        />
        <Route
          path="/recapitulatif"
          element={<Recapitulatif transactions={transactions} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
