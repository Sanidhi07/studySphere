import { NavLink } from "react-router-dom";
import {FaHome,FaBook,FaUser,FaSignOutAlt} from "react-icons/fa";
function Sidebar() {  
    return (
      <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="mb-10">
                  <h1 className="text-3xl font-bold text-indigo-600">StudySphere</h1>
                  <p className="text-sm text-gray-500 mt-1">Study smarter</p>
        </div>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li><NavLink to="/dashboard" className={({ isActive }) =>  `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${isActive? "bg-indigo-100 text-indigo-600 font-semibold": "hover:bg-indigo-100"}`}><FaHome/>Dashboard</NavLink></li>
            <li><NavLink to="/subjects" className={({ isActive }) =>  `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${isActive? "bg-indigo-100 text-indigo-600 font-semibold": "hover:bg-indigo-100"}`}><FaBook/>Subjects</NavLink></li>
            <li><NavLink to="/profile" className={({ isActive }) =>  `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${isActive? "bg-indigo-100 text-indigo-600 font-semibold": "hover:bg-indigo-100"}`}><FaUser/>Profile</NavLink></li>
          </ul>
        </nav>
        <button className="flex items-center gap-3 rounded-lg px-4 py-3 text-red-500 hover:bg-red-50"><FaSignOutAlt/>Logout</button>
      </aside>
    );
}

export default Sidebar;