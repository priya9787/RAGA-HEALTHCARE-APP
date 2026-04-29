import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login.tsx";
import Dashboard from "../pages/Dashboard/Dashboard.tsx";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout.tsx";
import Analytics from "../pages/Analytics/Analytics.tsx";
import Patients from "../pages/Patients/Patients.tsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Analytics />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/patients"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Patients />
              </MainLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
