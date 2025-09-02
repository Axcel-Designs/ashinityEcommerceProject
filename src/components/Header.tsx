import { NavLink } from "react-router-dom"
import logo from '../../public/logo.svg'
import useActive from "../hooks/useActive"
import type NavProps from '../types/headertype'

const navLinks: NavProps[] = [
  { label: 'Home', path: '/' },
  { label: 'Collections', path: '/products' },
  { label: 'New', path: '/new' },
]

export default function Header() {

  const { isActive, toggleActive } = useActive()

  return (
    <header className="max-md:p-2 p-4 mt-4">
      <div className="flex flex-row justify-between items-center ">
        <nav className="hidden sm:flex flex-row gap-4">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={({ isActive }) => (
              isActive ? "font-bold" : "")}> {link.label}</NavLink>
          ))}
        </nav>
        <div className="sm:hidden cursor-pointer" onClick={toggleActive}>
          <i className={`fa-solid fa-xl  ${isActive ?'fa-times': 'fa-bars'} `}></i>
        </div>
        <div className="w-8">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-row gap-2">
          <NavLink to='/wishlist' className="rounded-full w-8 h-8 flex justify-center items-center bg-black text-white">
            <i className=" fa-regular fa-heart"></i>
          </NavLink>
          <NavLink to='/cart' className="border-2 rounded-full w-8 h-8 flex justify-center items-center">
            <i className=" fa-solid fa-cart-shopping"></i>
          </NavLink>
          <NavLink to='/user' className="rounded-full w-8 h-8 flex justify-center items-center bg-black text-white">
            <i className=" fa-regular fa-user"></i>
          </NavLink>
        </div>
      </div>
      {isActive &&
      <nav className="flex flex-col gap-4 pt-4 sm:hidden">
        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path} className={({ isActive }) => (
            isActive ? "font-bold" : "")} onClick={toggleActive}> {link.label}</NavLink>
        ))}
      </nav>}
    </header>
  )
}
