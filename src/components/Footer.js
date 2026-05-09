const Footer = () => (
  <footer className="flex justify-between items-center p-8 border-t border-slate-100 bg-slate-50 mt-12">
    <div className="text-slate-500 font-medium">
      © 2026 Njam Njam. All rights reserved.
    </div>
    <nav>
      <ul className="flex items-center gap-8 text-slate-600 font-medium">
        <li className="hover:text-rose-500 cursor-pointer transition-colors">
          Privacy Policy
        </li>
        <li className="hover:text-rose-500 cursor-pointer transition-colors">
          Terms of Service
        </li>
        <li className="hover:text-rose-500 cursor-pointer transition-colors">
          Contact Us
        </li>
      </ul>
    </nav>
  </footer>
);
export default Footer;
