import Link from 'next/link';

const Footer = () => (
  <footer
    className="text-[#EBEED8] py-10 px-6"
    style={{
      backgroundImage:
        'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), linear-gradient(to top right, #563F1B, #76431E)',
    }}
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      {/* Branding */}
      <div className="text-center md:text-left">
        <h3 className="text-xl font-semibold text-[#F0DFAD]">Thief Carpentry</h3>
        <p className="text-sm text-[#EBEED8]/80">
          Built with tradition, finished with passion.
        </p>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col md:flex-row gap-4 text-center md:text-right">
        <li>
          <Link href="/#home" className="hover:text-[#F0DFAD] transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/#about" className="hover:text-[#F0DFAD] transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/#services" className="hover:text-[#F0DFAD] transition">
            Services
          </Link>
        </li>
      </ul>
    </div>

    {/* Bottom Note */}
    <div className="mt-8 text-center text-xs text-[#EBEED8]/60">
      © {new Date().getFullYear()} Thief Carpentry. All rights reserved to Thief.
    </div>
  </footer>
)

export default Footer
