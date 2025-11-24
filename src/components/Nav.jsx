import React from "react";

const Nav = () => {
  return (
    <div className="bg-[#E9E9E9]">
      <div className="max-w-[1200px] mx-auto">
        <div className="navbar flex flex-col sm:flex-row">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl font-bold">
              CS — Ticket System
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 items-center justify-center">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>

              <li>
                <button className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white font-bold">
                  New Ticket
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
