import React from "react";
import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import Author from "./Author";

const Container = () => {
  return (
    <div>
      <div
        id="wrapper"
        className="p-[5px] max-w-fit border-2 border-solid  mx-auto rounded-[5px]"
      >
        <h1 id="main-title" className="font-extrabold text-2xl">
          Pomodoro Clock
        </h1>
        <div
          id="length-control"
          className="flex flex-wrap justify-between border"
        >
          <div id="break-label" className="">
            Break Length
          </div>
          <div id="break-decrement" className="">
            <FaRegArrowAltCircleDown />
          </div>
          <div id="break-length" className="">
            5
          </div>
          <div id="break-increment" className="">
            <FaRegArrowAltCircleUp />
          </div>
          <div id="length-control" className="">
            <div id="session-label" className="">
              Session Length
            </div>
            <div id="session-decrement" className="">
              <FaRegArrowAltCircleDown />
            </div>
            <div id="session-length" className="">
              25
            </div>
            <div id="session-increment" className="">
              <FaRegArrowAltCircleUp />
            </div>
          </div>
        </div>
        <div id="timer-wrapper" className="">
          <div id="timer-label" className="font-extrabold text-xl">
            Work it baby!
          </div>
          <div id="time-left" className="">
            25:00
          </div>
        </div>
        <div id="controls-wrapper" className="">
          <div id="controls-wrapper" className="">
            <div id="start_stop" className="">
              <FaPlay />
              <FaPause />
            </div>
            <div id="reset" className="">
              <FaClockRotateLeft />
            </div>
          </div>
        </div>
      </div>
      <Author />
    </div>
  );
};

export default Container;
