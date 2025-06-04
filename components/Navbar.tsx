import Link from 'next/link'

const Navbar = () => (
  <nav className="shadow px-6 py-4 flex justify-between text-[#EBEED8]"
  style={{
      backgroundImage:
        'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), linear-gradient(to top right, #563F1B, #76431E)',
    }}>
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
