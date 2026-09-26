import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/footerLogo.png";
const Footer = () => {
  return (
    <footer className="bg-[#090A0D] text-[#6B7280]">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-5 py-10 sm:flex-row">

          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src={logo}
              alt="FitLog Logo"
              className="w-[120] object-contain"
            />
          </Link>

          <p className="text-center text-xs text-gray-500 sm:text-right sm:text-sm">
            © {new Date().getFullYear()} FitLog — Workout Library.
            <br className="sm:hidden" />
            <span className="sm:ml-1">
              Train hard, log honest.
            </span>
          </p>

          
        </div>
      </div>
    </footer>
  );
};
export default Footer;