import { useState, useEffect } from "react";

function Recapitulatif({ transactions }) {
  const [totalDebit, setTotalDebit] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [total, setTotal] = useState(0);

  let credit = 0;
  let debit = 0;

  useEffect(() => {
    transactions.map((data) => {
      if (data.type === "crédit") {
        credit = credit + parseInt(data.amount);
        console.log("ca rentre");
      } else if (data.type === "débit") {
        debit = debit + parseInt(data.amount);
        console.log("ca rentre");
      }
    });
    setTotalDebit(debit);
    setTotalCredit(credit);
    // const totalInit = credit - debit;
    setTotal(credit - debit);
  }, [transactions]);

  return (
    <div className="containerCumul">
      <div className="containerCumulLabel">
        <p className="cumulLabel">Crédits</p>
        <p className="cumulLabel">Débits</p>
        <p className="cumulLabel">Total</p>
      </div>
      <div className="containerCumulTotal">
        <p className="cumul">{totalCredit}</p>
        <p className="cumul">{totalDebit}</p>
        <p className="cumul">{total}</p>
      </div>
    </div>
  );
}

export default Recapitulatif;
