import React from "react";
import Cameras from "../components/Cameras";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { useState } from "react";
import { RiTempHotLine } from "react-icons/ri";
import { RiWaterFlashLine } from "react-icons/ri";
import {  Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
} from "../data/dummy";
import kitchen from "../data/kitchen.jpg";
import home from "../data/homeblue.png";

import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";
import garden from "./../data/garden.jpg";
import hall from "./../data/hall.jpg";
import doorcam from "./../data/doorcam.jpg";
import cam from "./../data/cam.jpg";


const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div className="mt-14">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="flex m-3 flex-wrap gap-4 items-center justify-between bg-sky-500 p-4 rounded-2xl">
          <p className=" text-xl w-full text-white font-semibold">
            Security Devices
          </p>
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-30 dark:text-gray-200 dark:bg-secondary-dark-bg flex-auto md:w-40 p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <input
                class="ml-14 mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-chosen checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />

              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="flex m-4 flex-col items-center justify-center w-1/3 flex-nowrap gap-2  bg-slate-100 p-4 rounded-2xl">
          <p className="text-xl">Summary</p>
          <div className="flex  flex-col flex-wrap lg:flex-nowrap items-center justify-center">
            <img src={home} className="w-24 h-24 mb-4" />
            <div className="flex items-center">
              <div className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-4 py-4 text-center mr-3 mb-2">
                <RiTempHotLine className="w-7 h-7" />
              </div>
              <p className="text-lg">25°C</p>
            </div>
            <div className="flex items-center">
              <div className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-4 py-4 text-center ml-0 mr-5 mb-2">
                <RiWaterFlashLine className="w-7 h-7" />
              </div>
              <p className="text-lg">7%</p>
            </div>
            <div className="flex mt-3">
              {" "}
              <p className="text-lg">Condition</p>
              <p className="text-lg text-green-500 ml-5">Good </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center ml-5 bg-slate-100 p-4 rounded-2xl">
        <p className="text-3xl font-semibold mt-7 mb-10">Live Camera</p>
        <div className="flex justify-between	space-x-14"> 
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-32 h-32 rounded-full mb-2"
              src={kitchen}
              alt="Rounded avatar"
            ></img>
            <p className="font-medium">Kitchen</p>

            <Cameras />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-32 h-32 rounded-full mb-2"
              src={hall}
              alt="Rounded avatar"
            ></img>
            <p className="font-medium">Hall</p>

            <Cameras />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-32 h-32 rounded-full mb-2"
              src={garden}
              alt="Rounded avatar"
            ></img>
            <p className="font-medium">Garden</p>

            <Cameras />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-32 h-32 rounded-full mb-2"
              src={doorcam}
              alt="Rounded avatar"
            ></img>
            <p className="font-medium">Door</p>

            <Cameras />
          </div>
        </div>
        <img src={cam}/>
      </div>

    
        
     
      
      
    </div>
  );
};

export default Ecommerce;
