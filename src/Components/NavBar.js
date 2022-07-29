import { useEffect, useState } from "react";
import logo from "../img/SP-Bleu-Jaune.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import * as React from "react";

function NavBar() {
  return (
    <div className="containerNavBar">
      <Link to="/" id="linkNavBarTransactions2">
        <div className="containerLogo">
          <img
            className="logoMenu"
            src={logo}
            alt="logo SmileAndPay"
            id="logoImg"
            loading="lazy"
          ></img>
        </div>
      </Link>
      <div className="containerBtnNavBar">
        <Link to="/" className="linkNavBar" id="linkNavBarTransactions2">
          <Button variant="text" className="btnNavBar">
            Transactions
          </Button>
        </Link>
        <Link
          to="/recapitulatif"
          className="linkNavBar"
          id="linkNavBarRecapitulatif"
        >
          <Button variant="text" className="btnNavBar">
            Recapitulatif
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
