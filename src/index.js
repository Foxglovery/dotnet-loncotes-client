import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/tickets/MaterialList";
import MaterialDetails from "./components/tickets/MaterialDetails";
import CreateMaterial from "./components/tickets/CreateMaterial";
import PatronList from "./components/patrons/PatronList";
import PatronDetails from "./components/patrons/PatronDetails";
import UpdatePatron from "./components/patrons/UpdatePatron";
import CheckoutList from "./components/checkouts/CheckoutList";
import BrowseMaterials from "./components/tickets/BrowseMaterials";
import CreateCheckout from "./components/checkouts/CreateCheckout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>

        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
        </Route>

        <Route path="patrons">
        <Route index element={<PatronList />} />
        <Route path=":id" element={<PatronDetails />} />
        <Route path="edit/:id" element={<UpdatePatron />} />
        </Route>

        <Route path="checkouts">
          <Route index element={<CheckoutList />}/>
        </Route>

        <Route path="browse" >
          <Route index element={<BrowseMaterials />} />
          <Route path="create/:id" element={<CreateCheckout />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
