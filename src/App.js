import React from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMode } from "./theme";

import Navbar from "./pages/Navbar";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./pages/Sidebar";
import Collections from "./pages/collections/index";
import SchoolList from "./pages/schoolList/index";
import DashboardOverview from "./pages/dashoverview";
import Invoices from "./pages/invoices/index";
import { UpdateModal } from "./components/modal/UpdateModal";

function App() {
  const [theme] = useMode();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <div style={{ marginTop: "60px" }}>
          <Sidebar />{" "}
        </div>
        <main className="content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/school-listing" element={<SchoolList />} />

            <Route path="/invoices" element={<Invoices />} />

            <Route path="/collections" element={<Collections />} />
            <Route path="/update/:id" element={<UpdateModal />} />

            <Route path="/dashboard-overview" element={<DashboardOverview />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
