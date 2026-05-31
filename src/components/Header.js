import logo from "url:../assets/public/njanjan-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import Error from "./ErrorComponent";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");

  const onlineStatus = useOnlineStatus();


  return (
    <header className="header-container bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 px-8 py-4 flex justify-between items-center shadow-sm">
      {/* Gourmet Brand Logo */}
      <Link to="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
        <img
          className="h-12 w-auto rounded-2xl shadow-sm border border-slate-100 transition-transform group-hover:rotate-6 duration-300"
          src={logo}
          alt="Njam Njam Logo"
        />
        <div>
          <span className="text-xl font-black tracking-tight text-slate-800">
            Njam Njam<span className="text-rose-500">.</span>
          </span>
          <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider -mt-1">
            Gourmet Kitchen
          </span>
        </div>
      </Link>
      <div>
        {onlineStatus ? <h2>You are Online </h2> : <h2>You are Offline </h2>}
      </div>
      {/* Navigation Links */}
      <nav>
        <ul className="nav-list flex items-center gap-8 list-none">
          <li>
            <Link to="/" className="nav-item text-slate-600 hover:text-rose-500 font-bold transition-colors cursor-pointer text-sm">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item text-slate-600 hover:text-rose-500 font-bold transition-colors cursor-pointer text-sm">
              About
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="nav-item text-slate-600 hover:text-rose-500 font-bold transition-colors cursor-pointer text-sm">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-item text-slate-600 hover:text-rose-500 font-bold transition-colors cursor-pointer text-sm flex items-center gap-1">
              Cart <span className="bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full text-[10px] font-black">0</span>
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="nav-item text-slate-600 hover:text-rose-500 font-bold transition-colors cursor-pointer text-sm">
              Grocery
            </Link>
          </li>

          {/* Dynamic Login/Logout Button */}
          <button
            className={`px-5 py-2.5 rounded-xl font-bold transition-all shadow-md cursor-pointer text-xs border ${loginStatus === "Login"
              ? "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-100 text-white border-emerald-500"
              : "bg-rose-500 hover:bg-rose-600 shadow-rose-100 text-white border-rose-500"
              }`}
            onClick={() => {
              setLoginStatus(loginStatus === "Login" ? "Logout" : "Login");
            }}
          >
            {loginStatus === "Login" ? "Sign In 🔑" : "Sign Out 🚪"}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
