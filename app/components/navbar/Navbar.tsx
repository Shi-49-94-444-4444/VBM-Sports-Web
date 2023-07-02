'use client'

import Access from "./Access"
import Logo from "./Logo"
import NavLink from "./Navlink"

const Navbar = () => {
  return (
    <div className="
          relative
          z-[999]
          sm:mb-32
          lg:mb-16
          w-full
        "
    >
      <div className="lg:block hidden">
        <div className="
            grid
            grid-cols-auto-auto
            grid-rows-cus
            bg-white
            items-center
            px-20
            top-0
            gap-x-4
            w-full
            py-2
            fixed
            border-2
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
        </div>
      </div>
    </div>
  )
}

export default Navbar