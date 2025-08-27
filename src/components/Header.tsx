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
    <header>
      <div className="flex flex-row justify-between items-center ">
        <nav className="flex flex-row gap-4">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} > {link.label}</NavLink>
          ))}
        </nav>
        <div>
          <img src={logo} alt="" />
        </div>
        <div></div>
      </div>
      <div></div>
    </header>
  )
}
