import React from "react";
import Sidebar from "./Sidebar";
import { FiSearch } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { BiDollarCircle } from "react-icons/bi";
import { TfiWallet } from "react-icons/tfi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="flex bg-slate-100">
      <div className="fixed">
        <Sidebar />
      </div>

      {/* Dashboard component part */}
      {/* Main div */}
      <div className="flex-1 pl-0 sm:pl-0 md:pl-0 lg:pl-56 xl:pl-56 h-screen">
        {/* Heading and search input div */}
        <div className="flex justify-between pl-12 pr-12 mt-6">
          <h1 className="text-lg font-medium">Hello Shahrukh 👋🏻,</h1>

          <div className="flex items-center space-x-1 pl-1 h-8 bg-white rounded-sm ">
            <FiSearch />
            <input type="search" placeholder="Search" className="p-1" />
          </div>
        </div>

        {/* four top flex box */}

        <div className="flex justify-center  gap-16 flex-wrap mt-10 font-medium">
          <div className="flex items-center justify-center space-x-4 bg-white p-4 rounded-lg">
            <div className="p-8 rounded-full bg-green-200">
              <BiDollarCircle fontSize={"45px"} color="green" />
            </div>
            <div>
              <p className="text-xs">Earning</p>
              <h1 className="text-2xl font-bold">$198k</h1>
              <p className="text-xs">
                {" "}
                <span className="text-green-600 font-extrabold text-xs">
                  ↑ 37.8%
                </span>{" "}
                this month
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 bg-white p-4 rounded-lg">
            <div className="p-8 rounded-full bg-purple-300">
              <CgNotes fontSize={"45px"} color="purple" />
            </div>

            <div>
              <p className="text-xs">Orders</p>
              <h1 className="text-2xl font-bold">$2.4k</h1>
              <p className="text-xs">
                {" "}
                <span className="text-red-600 font-extrabold text-xs">
                  ↓ 2%
                </span>{" "}
                this month
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 bg-white p-4 rounded-lg">
            <div className="p-8 rounded-full bg-blue-200">
              <TfiWallet fontSize={"45px"} color="blue" />
            </div>
            <div>
              <p className="text-xs">Balance</p>
              <h1 className="text-2xl font-bold">$2.4k</h1>
              <p className="text-xs">
                {" "}
                <span className="text-red-600 font-extrabold text-xs">
                  ↓ 2%
                </span>{" "}
                this month
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 bg-white p-7 rounded-lg">
            <div className="p-8 rounded-full bg-pink-200">
              <HiOutlineShoppingBag fontSize={"45px"} color="red" />
            </div>
            <div>
              <p className="text-xs">Total Sales</p>
              <h1 className="text-2xl font-bold">$89k</h1>
              <p className="text-xs">
                {" "}
                <span className="text-green-600 font-extrabold text-xs">
                  ↑ 11%
                </span>{" "}
                this month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
