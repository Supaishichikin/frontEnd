import DragDropInput from "./components/DragDropInput";
import {GlobalStyles} from "@mui/material";
import {useEffect, useState} from "react";
import HomePage from "./pages/HomePage";



const App = () => {




  return (
    <div className="App">
        <GlobalStyles styles={{ '&.App': {minHeight: '100vh'} }} />
        <HomePage/>
    </div>
  );
}

export default App;
