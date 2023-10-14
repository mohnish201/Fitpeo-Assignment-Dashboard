import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { TbSettings2 } from "react-icons/tb";
import { FaKey } from "react-icons/fa";
import { HiCube } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidWalletAlt } from "react-icons/bi";
import { BiSolidOffer } from "react-icons/bi";
import { TbHelpSquareFilled } from "react-icons/tb";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="p-3 bg-violet-950 flex justify-between pl-4 pr-4 text-white sm:flex md:flex lg:hidden xl:hidden">
      <GiHamburgerMenu fontSize={"25px"} onClick={onOpen} />

      <div className="hidden items-center sm:hidden md:hidden space-x-1 pl-1 h-8 bg-white basis-4 shrink-0 grow-0 rounded-lg ">
        <FiSearch color="black" />
        <input type="search" placeholder="Search" className="p-1 rounded-lg" />
      </div>

      <div className="flex justify-around gap-10">
        <h1 className="text-lg font-medium">Hello Shahrukh 👋🏻,</h1>
      </div>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bgColor={"#27005D"} color="white">
          <DrawerHeader borderBottomWidth="1px">
            <h1 className="flex items-center space-x-2 text-[20px] font-medium ml-5 mt-2 mb-4">
              {" "}
              <TbSettings2 fontSize={"25px"} /> <span>Dashboard</span>
            </h1>
          </DrawerHeader>
          <DrawerBody>
            <ul className="flex flex-col gap-3 p-4">
              <a href="/Dashboard">
                <li className="flex items-center hover:text-black font-medium space-x-2 pl-2 pt-2 pr-1 pb-2 box-border cursor-pointer hover:bg-slate-200 rounded-md active:bg-slate-200">
                  <FaKey fontSize={"18px"} />
                  <span>Dashboard</span>
                </li>
              </a>
              <a href="/Products">
                <li className="flex items-center hover:text-black font-medium space-x-2 pl-2 pt-2 pr-1 pb-2 box-border cursor-pointer hover:bg-slate-200 rounded-md active:bg-slate-50 ">
                  <HiCube fontSize={"18px"} />
                  <span>Product</span>
                </li>{" "}
              </a>
              <a href="/Customers">
                <li className="flex items-center hover:text-black font-medium space-x-2 pl-2 pt-2 pr-1 pb-2 box-border cursor-pointer hover:bg-slate-200 rounded-md active:bg-slate-50">
                  <FaUserAlt fontSize={"18px"} />
                  <span>Customers</span>
                </li>
              </a>

              <a href="/Income">
                <li className="flex items-center hover:text-black font-medium space-x-2 pl-2 pt-2 pr-1 pb-2 box-border cursor-pointer hover:bg-slate-200 rounded-md active:bg-slate-50">
                  <BiSolidWalletAlt fontSize={"18px"} />
                  <span>Income</span>
                </li>
              </a>

              <a href="/Promote">
                <li className="flex items-center hover:text-black font-medium space-x-2 pl-2 pt-2 pr-1 pb-2 box-border cursor-pointer hover:bg-slate-200 rounded-md active:bg-slate-50">
                  <BiSolidOffer fontSize={"18px"} />
                  <span>Promote</span>
                </li>
              </a>

              <a href="/Help">
                <li className="flex items-center hover:text-black font-medium space-x-2 pl-2 pt-2 pr-1 pb-2 box-border cursor-pointer hover:bg-slate-200 rounded-md active:bg-slate-50">
                  <TbHelpSquareFilled fontSize={"18px"} />
                  <span>Help</span>
                </li>
              </a>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
