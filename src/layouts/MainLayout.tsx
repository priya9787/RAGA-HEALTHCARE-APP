import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg transition ${
      isActive
        ? "bg-white text-blue-600 font-semibold"
        : "hover:bg-blue-500"
    }`;

  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-5 flex flex-col justify-between">
        
        {/* Top Section */}
        <div>
          <h2 className="text-xl font-bold mb-6">Healthcare</h2>

          <nav className="flex flex-col gap-2">
            <NavLink to="/dashboard" className={linkClass}>
              Dashboard
            </NavLink>

            <NavLink to="/analytics" className={linkClass}>
              Analytics
            </NavLink>

            <NavLink to="/patients" className={linkClass}>
              Patients
            </NavLink>
          </nav>
        </div>

        {/* Bottom Section (Logout) */}
        <div>
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col">
        
        {/* Header */}
        <div className="bg-white p-4 shadow flex justify-between items-center">
          <h1 className="font-semibold text-lg">Welcome 👋</h1>
        </div>

        {/* Content */}
        <div className="flex-1 bg-gray-100 p-6 overflow-auto">
          {children}
        </div>

      </div>
    </div>
  );
};

export default MainLayout;