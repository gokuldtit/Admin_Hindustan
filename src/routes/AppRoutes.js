import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import DashBoard from "../Pages/Dashboard";
import Analytics from "../Pages/Analytics";
import MainLayout from "../routes/MainLayout";
import DailyLog from "../Pages/Daily_Logs";
import MonthlyHerald from "../Pages/MonthlyHerald";
import MyClasses from "../Pages/MyClasses";

const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="dailylog" element={<DailyLog />} />
        <Route path="monthlyherald" element={<MonthlyHerald />} />
        <Route path="myclasses" element={<MyClasses />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;
