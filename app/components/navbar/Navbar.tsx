'use client'

import { useState } from "react"
import Access from "./Access"
import IsMobileAccess from "./IsMobileAccess"
import IsMobileLogo from "./IsMobileLogo"
import IsMobileNavLink from "./IsMobileNavLink"
import Logo from "./Logo"
import NavLink from "./Navlink"
import IsMobileSearch from "./IsMobileSearch"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="
          relative
          z-[999]
          lg:mb-16
          w-full
        "
    >
      <div className="lg:block hidden">
        <nav className="
            grid
            grid-cols-auto-auto
            grid-rows-cus
            bg-white
            items-center
            lg:px-24
            md:px-10
            px-4
            top-0
            py-2
            gap-x-4
            w-full
            fixed
            border-b-2
            border-solid
          "
        >
          <div className="flex">
            <Logo />
            <NavLink />
          </div>
          <div className="justify-self-end">
            <Access />
          </div>
        </nav>
      </div>
      <div className="block lg:hidden">
        <nav className="
            grid
            grid-cols-auto-auto
            grid-rows-cus
            bg-white
            border-b-2
            border-solid
            w-full
            items-center
            px-4
            md:px-10
            py-2
            top-0
          "
        >
          <div className="flex">
            <IsMobileLogo />
          </div>
          <div className="justify-self-end">
            <IsMobileAccess onclick={handleShowMenu}/>
          </div>
          <div className="grid-row-start-2 grid-col-full">
            <IsMobileSearch />
          </div>
        </nav>
        {showMenu && <IsMobileNavLink />}
      </div>
    </div>
  )
}

export default Navbar