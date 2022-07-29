import {
  Box,
  Button,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Home({ transactions, setTransactions }) {
  const [tabDateTrueorNot, setTabDateTrueorNot] = useState(true);
  const [tabAmountTrueorNot, setTabAmountTrueorNot] = useState(true);
  const [tabTypeTrueorNot, setTabTypeTrueorNot] = useState(true);
  const [tabModeTrueorNot, setTabModeTrueorNot] = useState(true);
  const [tabComTrueorNot, setTabComTrueorNot] = useState(true);

  const [creditOrDebit, setCreditOrDebit] = useState("Crédit");
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (event) => {
    setCreditOrDebit(event.target.value);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Ajout de transaction A finir
  const handleClickAdd = () => {};

  // delete transaction
  const handleClickDelete = (currentId) => {
    const tab = transactions.filter(
      (transaction) => transaction.id !== currentId
    );
    setTransactions(tab);
  };

  //tri transaction ID
  const handleClickId = () => {
    window.location.reload();
  };

  //tri transaction Date
  const handleClickDate = () => {
    let tabDate = [];
    let tabDateSort = [];
    transactions.map((data) => {
      tabDate.push(data.datetime);
    });
    tabDate.sort();
    tabDate.map((data) => {
      let i = 0;
      while (i !== tabDate.length) {
        if (
          data == transactions[i].datetime &&
          !tabDateSort.includes(transactions[i])
        ) {
          tabDateSort.push(transactions[i]);
        }
        i++;
      }
    });
    const tab = tabDateSort;
    if (tabDateTrueorNot) {
      setTransactions(tab);
      setTabDateTrueorNot(false);
    } else {
      setTransactions(tab.reverse());
      setTabDateTrueorNot(true);
    }
  };

  function compare(x, y) {
    return x - y;
  }

  //tri transaction Montant
  const handleClickAmount = () => {
    let tabAmount = [];
    let tabAmountSort = [];
    transactions.map((data) => {
      tabAmount.push(data.amount);
    });
    tabAmount.sort(compare);
    tabAmount.map((data) => {
      let i = 0;
      while (i !== tabAmount.length) {
        if (
          data == transactions[i].amount &&
          !tabAmountSort.includes(transactions[i])
        ) {
          tabAmountSort.push(transactions[i]);
        }
        i++;
      }
    });
    const tab = tabAmountSort;
    if (tabAmountTrueorNot) {
      setTransactions(tab);
      setTabAmountTrueorNot(false);
    } else {
      setTransactions(tab.reverse());
      setTabAmountTrueorNot(true);
    }
  };

  //tri transaction Type
  const handleClickType = () => {
    let tabType = [];
    transactions.map((data) => {
      if (data.type == "crédit") {
        tabType.unshift(data);
      } else {
        tabType.push(data);
      }
    });
    const tab = tabType;
    if (tabTypeTrueorNot) {
      setTransactions(tab);
      setTabTypeTrueorNot(false);
    } else {
      setTransactions(tab.reverse());
      setTabTypeTrueorNot(true);
    }
  };

  //tri transaction Mode
  const handleClickMode = () => {
    let tabMode = [];
    transactions.map((data) => {
      if (data.mode !== null && data.mode !== "") {
        tabMode.unshift(data);
      } else {
        tabMode.push(data);
      }
    });
    const tab = tabMode;
    console.log(tab);
    if (tabModeTrueorNot) {
      setTransactions(tab);
      setTabModeTrueorNot(false);
    } else {
      setTransactions(tab.reverse());
      setTabModeTrueorNot(true);
    }
  };

  //tri transaction Commentaire
  const handleClickCom = () => {
    let tabCom = [];
    transactions.map((data) => {
      if (data.commentaire !== null && data.commentaire !== "") {
        tabCom.unshift(data);
      } else {
        tabCom.push(data);
      }
    });
    const tab = tabCom;
    console.log(tab);
    if (tabComTrueorNot) {
      setTransactions(tab);
      setTabComTrueorNot(false);
    } else {
      setTransactions(tab.reverse());
      setTabComTrueorNot(true);
    }
  };

  return (
    <div className="containerListTransactions">
      <div className="labelListTransactions">
        <p
          className="labelTransactions labelId"
          onClick={() => {
            handleClickId();
          }}
        >
          id
        </p>
        <p
          className="labelTransactionsAlt labelDate"
          onClick={() => {
            handleClickDate();
          }}
        >
          Date
        </p>
        <p
          className="labelTransactionsAlt labelAmount"
          onClick={() => {
            handleClickAmount();
          }}
        >
          Montant
        </p>
        <p
          className="labelTransactionsAlt labelType"
          onClick={() => {
            handleClickType();
          }}
        >
          Type
        </p>
        <p
          className="labelTransactionsAlt labelMode"
          onClick={() => {
            handleClickMode();
          }}
        >
          Mode
        </p>
        <p
          className="labelTransactionsAlt labelCommentaire"
          onClick={() => {
            handleClickCom();
          }}
        >
          Commentaire
        </p>
        <Button
          className="btnAddTransaction"
          onClick={() => {
            handleOpen();
          }}
          variant="contained"
        >
          +
        </Button>
      </div>
      {transactions.map((data, idx) => {
        return (
          <div className="listTransactions" key={data.id}>
            <p className="transactions">{data.id}</p>
            <p className="transactionsAlt">{data.datetime.substr(0, 10)}</p>
            <p className="transactionsAlt">{data.amount}</p>
            <p className="transactionsAlt">{data.type}</p>
            <p className="transactionsAlt">{data.mode}</p>
            <p className="transactionsAlt">{data.commentaire}</p>

            <Button
              className="btnDeleteTransaction"
              onClick={() => {
                handleClickDelete(data.id);
              }}
              variant="contained"
            >
              x
            </Button>
          </div>
        );
      })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="containerModalAdd">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <TextField
            required
            id="outlined-required"
            label="Montant"
            defaultValue=""
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={creditOrDebit}
            label="Type"
            onChange={handleChange}
          >
            <MenuItem value={"Crédit"}>Crédit</MenuItem>
            <MenuItem value={"Débit"}>Débit</MenuItem>
          </Select>
          <TextField id="outlined-required" label="Mode" defaultValue="" />
          <TextField
            id="outlined-required"
            label="Commentaire"
            defaultValue=""
          />
        </Box>
      </Modal>
    </div>
  );
}

export default Home;
