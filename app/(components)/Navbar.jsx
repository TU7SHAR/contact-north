import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="text-white text-md  cursor-pointer w-[100vw] mb-7">
        <div className="flex justify-between mx-[14rem] sz nasp mt-8 items-center">
          <div className="flex space-x-8  items-center space">
            <Image src="/logo.png" width={40} height={40} alt="logo" />
            <ul className="flex  text-md space-x-5 sx">
              <li className="text-white text-opacity-50 hover:text-opacity-90 duration-300 res">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className=" ">
                    Products
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link href="/" className="hover:bg-gray-800">
                        Item 1
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="hover:bg-gray-800">
                        Item 2
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="text-white text-opacity-50 hover:text-opacity-90 duration-300 res">
                <div className="dropdown ">
                  <div tabIndex={0} className=" ">
                    Services
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52"
                  >
                    <li>
                      <Link href="/" className="hover:bg-gray-800 ">
                        Item 1
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="hover:bg-gray-800 ">
                        Item 2
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="text-white  text-opacity-50 hover:text-opacity-90 duration-300 res">
                <Link href="/">Courses</Link>
              </li>
              <li className="text-white text-opacity-50 hover:text-opacity-90 duration-300 res">
                <Link href="/">Membership</Link>
              </li>
              <li className="text-white text-opacity-50 hover:text-opacity-90 duration-300 res hd">
                <Link href="/">About</Link>
              </li>
            </ul>
          </div>

          <div className="flex space-x-6 items-center ">
            <p className="text-white text-opacity-50 res hover:text-opacity-90 duration-300 hd">
              Contact
            </p>
            <div className="border border-[#292929] bg-[#191919] text-md res px-3 py-1 rounded-md ">
              Log in
            </div>
            <button className="border rounded-md text-md px-3 py-1 border-[#040406] bg-[#5865F2] ">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
