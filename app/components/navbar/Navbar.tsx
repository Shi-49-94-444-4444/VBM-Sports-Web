'use client'

import Access from "./Access"
import Logo from "./Logo"
import NavLink from "./Navlink"

const Navbar = () => {
  return (
    <div className="
        z-[999]
        sm:mb-32
        lg:mb-16
        px-10
        mt-5
      "
    >
      <div className="lg:block hidden">
        <div className="
            grid
            grid-cols-auto-auto
            grid-rows-cus
            bg-navbar-cus
            items-center
            px-20
            top-0
            gap-x-4
            w-full
            rounded-full
            py-2
          "
        >
          <div className="flex">
            <Logo />
            <NavLink />
          </div>
          <div className="justify-self-end">
            <Access />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar