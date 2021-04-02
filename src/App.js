import React from "react";
import Navigation from "./assets/components/Navigation/Navigation";
import Header from "./assets/components/Header/Header";
import Callendar from "./assets/components/Callendar/Callendar";
import Ads from "./assets/components/Add/Ads";
import { DataContextProvider } from "./assets/contexts/DataContext";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <DataContextProvider>
        <Callendar />
      </DataContextProvider>
      <Ads />
    </>
  );
}

export default App;
