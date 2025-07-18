import Link from "next/link";
import Logo from "@/assets/images/logo.svg";
import Image from "next/image";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBuilding } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src={Logo} className="h-12 w-12" alt="Logo" />
              {/* <img
                className="h-12 w-12"
                src="../../assets/images/logo.svg"
                alt="Bookit"
              /> */}
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Rooms
                </Link>
                {/* <!-- Logged In Only --> */}
                <a
                  href="/bookings.html"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Bookings
                </a>
                <a
                  href="/add-room.html"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Add Room
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Right Side Menu --> */}
          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6">
              {/* <!-- Logged Out Only --> */}
              <a
                href="login.html"
                className="mr-3 text-gray-800 hover:text-gray-600"
              >
                <FaSignInAlt className=" inline mr-1" /> Login
              </a>
              <a
                href="register.html"
                className="mr-3 text-gray-800 hover:text-gray-600"
              >
                <FaUser className=" inline mr-1" /> Register
              </a>
              <a href="my-rooms.html">
                <FaBuilding className=" inline mr-1" /> My Rooms
              </a>
              <a
                href="login.html"
                className="mx-3 text-gray-800 hover:text-gray-600"
              >
                <FaSignOutAlt className=" inline mr-1" /> Sign Out
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Mobile menu --> */}
      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Rooms
          </Link>
          {/* <!-- Logged In Only --> */}
          <a
            href="/bookings.html"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Bookings
          </a>
          <a
            href="/add-room.html"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Add Room
          </a>
        </div>
      </div>
    </header>
  );
};
export { Header };
