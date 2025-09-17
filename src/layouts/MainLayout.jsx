import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-800">
      <Navbar />
      <main className="flex-grow mt-14">
        <Outlet /> {/* Nested route renders here */}
      </main>
    </div>
  );
}
