import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { FiSearch } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { BiDollarCircle } from "react-icons/bi";
import { TfiWallet } from "react-icons/tfi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import Charts from "./Charts";
import ProductsTable from "./ProductsTable";

const Dashboard = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Listen for window resize events and update the windowSize state
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex bg-slate-200 justify-between">
      <div>
        <Sidebar />
      </div>

      {/* Dashboard */}

      <div id="dashboard" className="w-[100%] h-[100vh] overflow-scroll" >
        <div
          id="header"
          className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center w-[90%] m-auto mt-5"
        >
          <h1 className="font-medium text-lg">Hello Shahrukh 👋🏻</h1>

          <div>
            <InputGroup>
              <InputLeftElement h="35px">
                <FiSearch color="gray.300"/>
              </InputLeftElement>
              <Input
                type="text"
                size={"sm"}
                w="100%"
                placeholder="Search"
                bgColor={"white"}
              />
            </InputGroup>
          </div>
        </div>

        <div
          id="four-div-box"
          className="w-[90%] m-auto mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {/* 1st */}
          <div className="flex items-center gap-4 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row bg-white p-4 box-border justify-center rounded-lg">
            <div className="p-2 sm:p-2 md:p-4 lg:p-5 xl:p-5 bg-green-100 rounded-full">
              <BiDollarCircle fontSize={"45px"} color="green" />
            </div>

            <div className="flex flex-col items-center sm:items-center md:items-start lg:items-start xl:items-start">
              <p className="text-xs font-medium text-slate-700">Earnings</p>
              <h1 className="text-xl font-bold">$198k</h1>
              <p className="text-xs">
                {" "}
                <span className="text-green-700 font-extrabold">↑37%</span> this
                month
              </p>
            </div>
          </div>

          {/* 2nd */}

          <div className="flex items-center gap-4 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row bg-white p-4 box-border justify-center rounded-lg">
            <div className="p-2 sm:p-2 md:p-4 lg:p-5 xl:p-5 bg-purple-200 rounded-full">
              <CgNotes fontSize={"45px"} color="purple" />
            </div>

            <div className="flex flex-col items-center sm:items-center md:items-start lg:items-start xl:items-start">
              <p className="text-xs font-medium text-slate-700">Orders</p>
              <h1 className="text-xl font-bold">$2.4k</h1>
              <p className="text-xs">
                {" "}
                <span className="text-red-700 font-extrabold">↓2%</span> this
                month
              </p>
            </div>
          </div>

          {/* 3rd */}

          <div className="flex items-center gap-4 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row bg-white p-4 box-border justify-center rounded-lg">
            <div className="p-2 sm:p-2 md:p-4 lg:p-5 xl:p-5 bg-sky-200 rounded-full">
              <TfiWallet fontSize={"45px"} color="blue" />
            </div>

            <div className="flex flex-col items-center sm:items-center md:items-start lg:items-start xl:items-start">
              <p className="text-xs font-medium text-slate-700">Earnings</p>
              <h1 className="text-xl font-bold">$2.4k</h1>
              <p className="text-xs">
                {" "}
                <span className="text-red-700 font-extrabold">↓2%</span> this
                month
              </p>
            </div>
          </div>

          {/* 4rth */}

          <div className="flex items-center gap-4 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row bg-white p-4 box-border justify-center rounded-lg">
            <div className="p-2 sm:p-2 md:p-4 lg:p-5 xl:p-5 bg-pink-200 rounded-full">
              <HiOutlineShoppingBag fontSize={"45px"} color="red" />
            </div>

            <div className="flex flex-col items-center sm:items-center md:items-start lg:items-start xl:items-start">
              <p className="text-xs font-medium text-slate-700">Earnings</p>
              <h1 className="text-xl font-extrabold">$89k</h1>
              <p className="text-xs">
                {" "}
                <span className="text-green-700 font-extrabold">↑11%</span> this
                month
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] m-auto  mt-10">
          <Charts windowSize={windowSize} />
        </div>

        <div className="w-[90%] m-auto mt-10">
          <ProductsTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
