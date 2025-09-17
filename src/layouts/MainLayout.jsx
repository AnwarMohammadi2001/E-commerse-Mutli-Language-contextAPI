import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800 transition-colors duration-500">
      <Navbar />

      <main className="flex-grow">
        <Outlet /> {/* Nested route renders here */}
      </main>
    </div>
  );
}
