import React, { useState } from "react";
import { ImPlay2, ImPause } from "react-icons/im";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import Author from "./Author";

const Container = () => {
  const [breaker, setBreaker] = useState(5);
  const [session, setSession] = useState(25);
  const [timer, setTimer] = useState(formatAsTime);
  const buttonStyle =
    "transition-transform duration-[0.3s] ease-[ease-in-out] shadow-[3px_2px_5px_black] hover:shadow-[4px_3px_5px_black] hover:scale-110 hover:bg-[#50644d] active:shadow-[2px_1px_4px_black] active:scale-110 rounded-[50%] h-[35px] w-[35px]";

  const timeResetHandler = () => {
    setBreaker(5);
    setSession(25);
    setTimer(25);
  };

  //!===================================================
  var formatAsTime = (session) => {
    let seconds = session * 10;
    let minutes = parseInt(seconds / 60);
    seconds = seconds % 60;

    let displayTime =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");

    return displayTime;
  };
  console.log(formatAsTime(session)); //
  //!===================================================

  return (
    <div>
      <div id="wrapper" className="p-[5px] max-w-fit">
        <h1 id="main-title" className="font-extrabold text-[26px]">
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
                <FaRegArrowAltCircleDown className={buttonStyle} />
              </div>
              <div id="break-length" className="text-xl font-bold px-1">
                {breaker < 10 ? breaker.toString().padStart(2, "0") : breaker}
              </div>
              <div id="break-increment" className="">
                <FaRegArrowAltCircleUp className={buttonStyle} />
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
                <FaRegArrowAltCircleDown className={buttonStyle} />
              </div>
              <div id="session-length" className="text-xl font-bold px-1">
                {session < 10 ? session.toString().padStart(2, "0") : session}
              </div>
              <div id="session-increment" className="">
                <FaRegArrowAltCircleUp className={buttonStyle} />
              </div>
            </div>
          </div>
        </div>
        <div id="timer-wrapper" className="">
          <div id="timer-label" className="font-extrabold text-2xl">
            Work it baby!
          </div>
          <div id="time-left" className="text-8xl font-bold">
            25:00
          </div>
        </div>

        <div id="controls-wrapper" className="flex justify-around">
          <div id="start_stop" className="">
            <ImPlay2 className={buttonStyle} />
            <ImPause className={buttonStyle} />
          </div>
          <div id="reset" className="">
            <FaClockRotateLeft className={buttonStyle} />
          </div>
        </div>
      </div>
      <Author />
    </div>
  );
};

export default Container;
