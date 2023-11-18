// import { useState } from "react";
import { NavSearch } from "./NavSearch";
import { NavLogo } from "./NavLogo";
import { NavItemCount } from "./NavItemCount";

export function NavBar() {
  return (
    <nav className="nav-bar">
      <NavLogo />
      <NavSearch />
      <NavItemCount />
    </nav>
  );
}
