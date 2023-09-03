import React, { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import ButtonDown from "./ButtonDown";
import ButtonUp from "./ButtonUp";
import Author from "./Author";

const Container = () => {
  const [breaker, setBreaker] = useState(5);
  const [session, setSession] = useState(25);
  return (
    <div>
      <div id="wrapper" className="p-[5px] max-w-fit">
        <h1 id="main-title" className="font-extrabold text-2xl">
          Pomodoro Clock
        </h1>
        <div
          id="length-control"
          className="flex flex-wrap justify-between mt-1"
        >
          <div id="brake-control" className="">
            <div id="break-label" className="text-xl font-bold">
              Break
            </div>
            <div id="brake-controls" className="flex flex-wrap justify-between">
              <div id="break-decrement" className="">
                <ButtonDown />
              </div>
              <div id="break-length" className="text-xl font-bold px-1">
                {breaker}
              </div>
              <div id="break-increment" className="">
                <ButtonUp />
              </div>
            </div>
          </div>
          <div id="length-control" className="">
            <div id="session-label" className="text-xl font-bold">
              Session
            </div>
            <div
              id="session-controls"
              className="flex flex-wrap justify-between"
            >
              <div id="session-decrement" className="">
                <ButtonDown />
              </div>
              <div id="session-length" className="text-xl font-bold px-1">
                {session}
              </div>
              <div id="session-increment" className="">
                <ButtonUp />
              </div>
            </div>
          </div>
        </div>
        <div id="timer-wrapper" className="">
          <div id="timer-label" className="font-extrabold text-xl">
            Work it baby!
          </div>
          <div id="time-left" className="text-6xl font-bold">
            25:00
          </div>
        </div>

        <div id="controls-wrapper" className="flex justify-around">
          <div id="start_stop" className="">
            <FaPlay className="transition-transform duration-[0.3s] ease-[ease-in-out] shadow-[3px_2px_5px_black] hover:shadow-[4px_3px_5px_black] hover:scale-110 hover:bg-[#50644d] active:shadow-[2px_1px_4px_black] active:scale-110 h-[25px] w-[25px]" />
            <FaPause className="transition-transform duration-[0.3s] ease-[ease-in-out] shadow-[3px_2px_5px_black] hover:shadow-[4px_3px_5px_black] hover:scale-110 hover:bg-[#50644d] active:shadow-[2px_1px_4px_black] active:scale-110 h-[25px] w-[25px]" />
          </div>
          <div id="reset" className="">
            <FaClockRotateLeft className="transition-transform duration-[0.3s] ease-[ease-in-out] shadow-[3px_2px_5px_black] hover:shadow-[4px_3px_5px_black] hover:scale-110 hover:bg-[#50644d] active:shadow-[2px_1px_4px_black] active:scale-110 rounded-[50%] h-[25px] w-[25px]" />
          </div>
        </div>
      </div>
      <Author />
    </div>
  );
};

export default Container;
