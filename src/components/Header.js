import logo from "url:../assets/public/njanjan-logo.png";
import { useState } from "react";
const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");

  return (
    <header className="header-container">
      <div className="flex items-center gap-3">
        <img className="h-12 w-auto rounded-xl" src={logo} alt="logo" />
        <span className="text-xl logo font-bold text-slate-800">Njam Njam</span>
      </div>

      <nav>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setLoginStatus(loginStatus == "Login" ? "Logout" : "Login");
            }}
          >
            {loginStatus}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
