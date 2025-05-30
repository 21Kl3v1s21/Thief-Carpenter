import Link from 'next/link'

const Navbar = () => (
  <nav className="bg-white shadow px-6 py-4 flex justify-between">
    <h1 className="text-xl font-bold">Crafted Woodworks</h1>
    <ul className="flex gap-6">
      <li><Link href="/#home">Home</Link></li>
      <li><Link href="/#about">About</Link></li>
      <li><Link href="/services">Services</Link></li>
      <li><Link href="/gallery">Gallery</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </nav>
)

export default Navbar
