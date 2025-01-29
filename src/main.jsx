import AdminContextProvider from "./context/AdminContext.jsx";
import DoctorContextProvide from './context/DoctorContext.jsx'
import AppContextProvider from './context/AppContext.jsx'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContextProvider>
      <DoctorContextProvide>
        <AppContextProvider>
        <App />
        </AppContextProvider>
     
      </DoctorContextProvide>
    
    </AdminContextProvider>
  </BrowserRouter>
);
