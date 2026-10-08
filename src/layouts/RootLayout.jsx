
import { useState } from "react"

import { FaRegHeart, FaRegUserCircle } from "react-icons/fa"

import {
  IoCallOutline,
  IoCartOutline,
  IoCloseOutline,
  IoCubeOutline,
  IoHomeOutline,
  IoInformationCircleOutline,
  IoMenu
} from "react-icons/io5"

import { Link, NavLink, Outlet } from "react-router"
import Footer from "../components/Footer"

function RootLayout() {
  const [isNav, setNav] = useState(false)

  const handleOpenNav = () => {
    setNav(true)
  }

  const handleCloseNav = () => {
    setNav(false)
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Top Shipping Bar */}
      <div className="bg-slate-950 py-2">
        <p className="text-white text-center text-sm">
          🚚 Free shipping on orders over
          <span className="text-red-500"> $50 </span>
          🌟
        </p>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">

        <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">

          {/* Left - Menu + Logo */}
          <div className="flex items-center gap-x-3">

            {/* Mobile Menu */}
            <button
              onClick={handleOpenNav}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full
              text-red-500/70 hover:bg-red-500/10 hover:text-red-500/70
              transition-all duration-200 cursor-pointer"
            >
              <IoMenu className="text-2xl" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-x-2 group"
            >
              <div
                className="w-9 h-9 rounded-full bg-red-500/70
                flex items-center justify-center
                text-white font-bold"
              >
                M
              </div>

              <span
                className="text-xl font-bold tracking-tight text-slate-900
                group-hover:text-red-500/70 transition-all duration-200"
              >
                Master
              </span>
            </Link>

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-x-1">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "text-red-500/70 bg-red-500/10"
                    : "text-slate-700 hover:text-red-500/70 hover:bg-slate-100"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/product"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "text-red-500/70 bg-red-500/10"
                    : "text-slate-700 hover:text-red-500/70 hover:bg-slate-100"
                }`
              }
            >
              Product
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "text-red-500/70 bg-red-500/10"
                    : "text-slate-700 hover:text-red-500/70 hover:bg-slate-100"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "text-red-500/70 bg-red-500/10"
                    : "text-slate-700 hover:text-red-500/70 hover:bg-slate-100"
                }`
              }
            >
              Contact
            </NavLink>

          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-x-1">

            <button
              className="w-10 h-10 flex items-center justify-center rounded-full
              text-slate-700 hover:text-red-500/70 hover:bg-red-500/10
              transition-all duration-200 cursor-pointer"
            >
              <FaRegHeart className="text-lg" />
            </button>

            <button
              className="w-10 h-10 flex items-center justify-center rounded-full
              text-slate-700 hover:text-red-500/70 hover:bg-red-500/10
              transition-all duration-200 cursor-pointer"
            >
              <IoCartOutline className="text-2xl" />
            </button>

            <button
              className="w-10 h-10 flex items-center justify-center rounded-full
              text-slate-700 hover:text-red-500/70 hover:bg-red-500/10
              transition-all duration-200 cursor-pointer"
            >
              <FaRegUserCircle className="text-xl" />
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`${
          isNav
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }
        fixed inset-0 z-50 transition-opacity duration-300 md:hidden`}
      >

        {/* Overlay */}
        <div className="flex h-screen bg-black/40 backdrop-blur-sm">

          {/* Mobile Sidebar */}
          <div
            className={`${
              isNav
                ? "translate-x-0"
                : "-translate-x-full"
            }
            w-72 max-w-[80%] bg-white shadow-xl
            transition-transform duration-300`}
          >

            {/* Sidebar Header */}
            <div className="h-16 px-4 flex items-center justify-between
              border-b border-slate-200">

              <Link
                to="/"
                onClick={handleCloseNav}
                className="flex items-center gap-x-2"
              >
                <div
                  className="w-9 h-9 rounded-full bg-red-500/70
                  flex items-center justify-center
                  text-white font-bold"
                >
                  M
                </div>

                <span className="text-lg font-bold text-slate-900">
                  Master
                </span>
              </Link>

              <button
                onClick={handleCloseNav}
                className="w-10 h-10 flex items-center justify-center
                rounded-full text-slate-600
                hover:text-red-500/70 hover:bg-red-500/10
                transition-all duration-200 cursor-pointer"
              >
                <IoCloseOutline className="text-2xl" />
              </button>

            </div>

            {/* Mobile Navigation */}
            <nav className="p-3 space-y-1">

              <NavLink
                to="/"
                onClick={handleCloseNav}
                className={({ isActive }) =>
                  `flex items-center gap-x-4 px-4 py-3 rounded-lg
                  font-medium transition-all duration-200
                  ${
                    isActive
                      ? "text-red-500/70 bg-red-500/10"
                      : "text-slate-700 hover:text-red-500/70 hover:bg-slate-100"
                  }`
                }
              >
                <IoHomeOutline className="text-xl" />
                <span>Home</span>
              </NavLink>

              <NavLink
                to="/product"
                onClick={handleCloseNav}
                className={({ isActive }) =>
                  `flex items-center gap-x-4 px-4 py-3 rounded-lg
                  font-medium transition-all duration-200
                  ${
                    isActive
                      ? "text-red-500/70 bg-red-500/10"
                      : "text-slate-700 hover:text-red-500/70 hover:bg-slate-100"
                  }`
                }
              >
                <IoCubeOutline className="text-xl" />
                <span>Product</span>
              </NavLink>

              <NavLink
                to="/contact"
                onClick={handleCloseNav}
                className={({ isActive }) =>
                  `flex items-center gap-x-4 px-4 py-3 rounded-lg
                  font-medium transition-all duration-200
                  ${
                    isActive
                      ? "text-red-500/70 bg-red-500/10"
                      : "text-slate-700 hover:text-red-500/70 hover:bg-slate-100"
                  }`
                }
              >
                <IoCallOutline className="text-xl" />
                <span>Contact</span>
              </NavLink>

              <NavLink
                to="/about"
                onClick={handleCloseNav}
                className={({ isActive }) =>
                  `flex items-center gap-x-4 px-4 py-3 rounded-lg
                  font-medium transition-all duration-200
                  ${
                    isActive
                      ? "text-red-500/70 bg-red-500/10"
                      : "text-slate-700 hover:text-red-500/70 hover:bg-slate-100"
                  }`
                }
              >
                <IoInformationCircleOutline className="text-xl" />
                <span>About</span>
              </NavLink>

            </nav>

          </div>

          {/* Click Outside */}
          <div
            onClick={handleCloseNav}z
            className="flex-1"
          />

        </div>
      </div>

      <Outlet />

      <Footer/>

    </div>
  )
}

export default RootLayout

