import React, { useState, useEffect } from "react";
import { ImPlay2, ImPause } from "react-icons/im";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import Author from "./Author";

const Container = () => {
  const [breaker, setBreaker] = useState(5);
  const [session, setSession] = useState(25);
  const [timer, setTimer] = useState(1500);
  const [startPause, setStartPause] = useState(false);

  const buttonStyle =
    "transition-transform duration-[0.3s] ease-[ease-in-out] shadow-[3px_2px_5px_black] hover:shadow-[4px_3px_5px_black] hover:scale-105 hover:bg-[#50644d] active:shadow-[2px_1px_4px_black] active:scale-110 rounded-[50%] h-[40px] w-[40px] cursor-pointer";

  const timeResetHandler = () => {
    setBreaker(5);
    setSession(25);
    setTimer(1500);
    setStartPause(false);
  };

  const decrementHandlerBreak = () =>
    (breaker > 0, !startPause) &&
    (setBreaker(breaker - 1), setTimer((breaker - 1) * 60));
  const incrementHandlerBreak = () =>
    (breaker < 60, !startPause) &&
    (setBreaker(breaker + 1), setTimer((breaker + 1) * 60));
  const decrementHandlerSession = () =>
    (session > 0, !startPause) &&
    (setSession(session - 1), setTimer((session - 1) * 60));
  const incrementHandlerSession = () =>
    (session < 60, !startPause) &&
    (setSession(session + 1), setTimer((session + 1) * 60));

  const startStopTimerHandler = () => {
    setStartPause(!startPause);
  };

  var formatAsTime = (timer) => {
    let seconds = timer;
    let minutes = parseInt(seconds / 60);
    seconds = seconds % 60;

    let displayTime =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");

    return displayTime;
  };

  //!
  useEffect(() => {
    let intervalId;
    if (startPause && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (startPause && timer === 0) {
      setTimer(breaker * 60);
      // audio should play
    } else {
      clearInterval(intervalId);
    }
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [startPause, timer, breaker]);
  //!

  console.log(startPause); //

  return (
    <div>
      <div id="wrapper" className="p-[5px] max-w-fit">
        <h1 id="main-title" className="font-extrabold text-[26px] mt-3">
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
              <div
                id="break-decrement"
                className=""
                onClick={decrementHandlerBreak}
              >
                <FaRegArrowAltCircleDown className={buttonStyle} />
              </div>
              <div id="break-length" className="text-xl font-bold px-1 mx-1">
                {breaker < 10 ? breaker.toString().padStart(2, "0") : breaker}
              </div>
              <div
                id="break-increment"
                className=""
                onClick={incrementHandlerBreak}
              >
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
              <div
                id="session-decrement"
                className=""
                onClick={decrementHandlerSession}
              >
                <FaRegArrowAltCircleDown className={buttonStyle} />
              </div>
              <div id="session-length" className="text-xl font-bold px-1 mx-1">
                {session < 10 ? session.toString().padStart(2, "0") : session}
              </div>
              <div
                id="session-increment"
                className=""
                onClick={incrementHandlerSession}
              >
                <FaRegArrowAltCircleUp className={buttonStyle} />
              </div>
            </div>
          </div>
        </div>
        <div id="timer-wrapper" className="">
          <div id="timer-label" className="font-extrabold text-2xl mt-2">
            Work it baby!
          </div>
          <div id="time-left" className="text-8xl font-bold mb-3">
            {formatAsTime(timer)}
          </div>
        </div>

        <div id="controls-wrapper" className="flex justify-around">
          <div id="start_stop" className="" onClick={startStopTimerHandler}>
            <ImPlay2
              className={startPause ? `${buttonStyle} + hidden` : buttonStyle}
              onClick={() => {
                setStartPause(!startPause);
              }}
            />
            <ImPause
              className={startPause ? buttonStyle : `${buttonStyle} + hidden`}
            />
          </div>
          <div id="reset" className="">
            <FaClockRotateLeft
              className={buttonStyle}
              onClick={timeResetHandler}
            />
          </div>
        </div>
      </div>
      <Author />
    </div>
  );
};

export default Container;
