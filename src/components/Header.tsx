import { NavLink } from "react-router-dom"
import logo from '../../public/logo.svg'

interface NavLinkProps {
  label: string
  path: string
}


const navLinks: NavLinkProps[] = [
  { label: 'Home', path: '/' },
  { label: 'Collections', path: '/collections' },
  { label: 'New', path: '/new' },
]

export default function Header() {
  return (
    <header className="max-md:p-2 p-4">
      <div className="flex flex-row justify-between items-center ">
        <nav className="hidden sm:flex flex-row gap-4">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} > {link.label}</NavLink>
          ))}
        </nav>
        <div className="sm:hidden">
          <i className=" fa-solid fa-bars fa-xl"></i>
        </div>
        <div className="w-10">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-row gap-2">
          <i className=" fa-regular fa-heart"></i>
          <i className=" fa-solid fa-cart-shopping"></i>
          <i className=" fa-solid fa-user"></i>
        </div>
      </div>
      <div></div>
    </header>
  )
}
