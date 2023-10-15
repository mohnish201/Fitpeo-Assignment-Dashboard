import React, { useState } from "react";
import { TbSettings2 } from "react-icons/tb";
import { FaKey } from "react-icons/fa";
import { HiCube } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidWalletAlt } from "react-icons/bi";
import { BiSolidOffer } from "react-icons/bi";
import { TbHelpSquareFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBoxArrowLeft } from "react-icons/bs";
import { BsBoxArrowRight } from "react-icons/bs";
import { Avatar } from "@chakra-ui/react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hidden sm:hidden md:hidden lg:flex xl:flex h-full text-md">
      <div
        className={`${
          isOpen ? "w-56" : "w-0"
        }  min-h-screen text-white bg-[#071952]  overflow-hidden transition-width duration-500`}
      >
        <div className="flex justify-end fixed">
          <buthrefn onClick={toggleSidebar} className="flex cursor-pointer ">
            {/* <GiHamburgerMenu fontSize={"30px"}/> */}
          </buthrefn>
        </div>
        <div className="p-1  h-[100%] flex flex-col justify-between">
          <div>
            <h1 className="flex items-center space-x-2 text-[20px] font-medium ml-5 mt-2 mb-4">
              {" "}
              <TbSettings2 fontSize={"25px"} /> <span>Dashboard</span>
            </h1>
            <ul className="flex flex-col gap-3 p-4 box-border ">
              <a href="/Dashboard">
                {" "}
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
          </div>

          <div className="flex items-center  gap-5 p-1 m-2  mb-2  text-xs bg-gray-400 font-medium    rounded-md">
            <Avatar src="https://i.pinimg.com/564x/e5/13/33/e513339a410a97dd979c4c86c22a164b.jpg" size={"sm"}></Avatar>
            <div>
              <h1 className="font-bold text-sm">Evano </h1>
              <p>Project Manager</p>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// (
//     <div className="w-52 h-screen bg-[#071952] border text-white ">
//       <h1 className="flex items-center space-x-2 text-[20px] font-medium ml-5 mt-4">
//         <TbSettings2 fontSize={"25px"} /> <span>Dashboard</span>
//       </h1>

//       <ul className="flex flex-col mt-6 p-5 gap-3">
//         <li className="flex items-center space-x-3 text-[15px] font-medium hover:bg-slate-500 p-2 rounded-md active:bg-slate-500 cursor-pointer ">
//           <FaKey fontSize={"15px"} /> <span>Dashboard</span>
//         </li>
//         <li className="flex items-center space-x-3 text-[15px] font-medium hover:bg-slate-500 p-2 rounded-md active:bg-slate-500 cursor-pointer ">
//           <HiCube fontSize={"15px"} /> <span>Products</span>
//         </li>
//         <li className="flex items-center space-x-3 text-[15px] font-medium hover:bg-slate-500 p-2 rounded-md active:bg-slate-500 cursor-pointer ">
//           <FaUserAlt fontSize={"15px"} /> <span>Cushrefmers</span>
//         </li>
//         <li className="flex items-center space-x-3 text-[15px] font-medium hover:bg-slate-500 p-2 rounded-md active:bg-slate-500 cursor-pointer ">
//           <BiSolidWalletAlt fontSize={"15px"} /> <span>Income</span>
//         </li>
//         <li className="flex items-center space-x-3 text-[15px] font-medium hover:bg-slate-500 p-2 rounded-md active:bg-slate-500 cursor-pointer ">
//           <BiSolidOffer fontSize={"15px"} /> <span>Promote</span>
//         </li>
//         <li className="flex items-center space-x-3 text-[15px] font-medium hover:bg-slate-500 p-2  rounded-md active:bg-slate-500 cursor-pointer ">
//           <TbHelpSquareFilled fontSize={"15px"} /> <span>Help</span>
//         </li>
//       </ul>
//     </div>
//   );
