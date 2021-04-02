import React from "react";
import Navigation from "./assets/components/Navigation/Navigation";
import Callendar from "./assets/components/Callendar/Callendar";
import Ads from "./assets/components/Add/Ads";
import { DataContextProvider } from "./assets/contexts/DataContext";

function App() {
  return (
    <>
      <Navigation />
      <DataContextProvider>
        <Callendar />
      </DataContextProvider>
      <Ads />
    </>
  );
}

export default App;
