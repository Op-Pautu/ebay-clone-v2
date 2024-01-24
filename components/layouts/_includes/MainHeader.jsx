import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function MainHeader() {
  return (
    <header id="MainHeader" className="border-b">
      <nav className="flex items-center bg-white w-full mx-auto max-w-[1200px]">
        <div className="flex lg:justify-start justify-between items-center gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto">
          <Link href={"/"}>
            <Image
              width={150}
              height={150}
              alt="eray logo"
              src="/images/logo.svg"
            />
          </Link>

          <div className="relative flex items-center w-full">
            <div className="relative flex items-center w-full p-2 border-2 border-gray-900">
              <button className="flex items-center">
                <AiOutlineSearch size={22} />
              </button>

              <input
                className="w-full pl-3 text-sm placeholder-gray-400 focus:outline-none"
                type="text"
                placeholder="Search for anything"
              />
            </div>

            <button className="flex items-center bg-blue-600 text-sm font-semibold text-white p-[11px] ml-2 px-14">
              Search
            </button>

            <div className="px-2 text-xs cursor-pointer hover:text-blue-500">
              Advanced
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
