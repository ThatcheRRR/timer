import React, { useState } from 'react';
import { Timer } from "./Timer";
import Popup from "reactjs-popup";
import './App.css';

const initDates = {
    popupinit: new Date() - 200000,
    componentInit: new Date(),
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <Popup
          open={isOpen}
          onClose={() => setIsOpen(false)}
      >
          <Timer initDateInMs={initDates.popupinit} />
      </Popup>
      <Timer initDateInMs={initDates.componentInit} />
      <button onClick={() => setIsOpen(true)}>click</button>
    </div>
  );
}

export default App;
