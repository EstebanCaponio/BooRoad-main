import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import DefaultLayout from "./layouts/DefaultLayouts";
import TripContext from "./context/TripContext";
import ArrayTrip from "./data/ArrayTrip";
import ArrayOperators from "./data/ArrayOperators";
import DetailTrip from "./pages/DetailTrip";
import DetailUser from "./pages/DetailUser";

function App() {
  return (
    <>
      <TripContext.Provider value={{ ArrayTrip }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/trip/:id" element={<DetailTrip />} />
              <Route path="/user/:id" element={<DetailUser />} />
              <Route path="/operators" element={<div>Operatori</div>} />
              <Route path="/contacts" element={<div>contatti agenzia</div>} />
            </Route>
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </BrowserRouter>
      </TripContext.Provider>
    </>
  );
}

export default App;
