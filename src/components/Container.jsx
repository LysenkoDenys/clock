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
  const [labelSession, setLabelSession] = useState(true);

  const buttonStyle =
    "transition-transform duration-[0.3s] ease-[ease-in-out] shadow-[3px_2px_5px_black] hover:shadow-[4px_3px_5px_black] hover:scale-105 hover:bg-[#50644d] active:shadow-[2px_1px_4px_black] active:scale-110 rounded-[50%] h-[40px] w-[40px] cursor-pointer";

  const timeResetHandler = () => {
    setBreaker(5);
    setSession(25);
    setTimer(1500);
    setStartPause(false);
    setLabelSession(true);
  };

  //break:
  const decrementHandlerBreak = () => {
    if (breaker > 0 && !startPause && !labelSession) {
      setBreaker(breaker - 1);
      setTimer((breaker - 1) * 60);
    } else if (breaker > 0 && !startPause) {
      setBreaker(breaker - 1);
    }
  };

  const incrementHandlerBreak = () => {
    if (breaker >= 0 && breaker < 60 && !startPause && !labelSession) {
      setBreaker(breaker + 1);
      setTimer((breaker + 1) * 60);
    } else if (breaker >= 0 && !startPause && breaker < 60) {
      setBreaker(breaker + 1);
    }
  };

  // session:
  const decrementHandlerSession = () => {
    if (session > 0 && !startPause && labelSession) {
      setSession(session - 1);
      setTimer((session - 1) * 60);
    } else if (session > 0 && !startPause) {
      setSession(session - 1);
    }
  };

  const incrementHandlerSession = () => {
    if (session >= 0 && session < 60 && !startPause && labelSession) {
      setSession(session + 1);
      setTimer((session + 1) * 60);
    } else if (session >= 0 && !startPause && session < 60) {
      setSession(session + 1);
    }
  };

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

  useEffect(() => {
    let intervalId;
    if (startPause && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (startPause && timer === 0) {
      setLabelSession(!labelSession);
      labelSession ? setTimer(breaker * 60) : setTimer(session * 60);
      // audio should play:
      new Audio(
        "https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg"
      ).play();
    } else {
      clearInterval(intervalId);
    }
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [startPause, timer, breaker, labelSession, session]);

  return (
    <div>
      <div id="wrapper" className="p-[5px] max-w-fit">
        <h1 id="main-title" className="font-extrabold text-[28px] mt-14">
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
          <div id="timer-label" className="font-extrabold text-xl mt-3">
            {labelSession ? "You should be working!" : "Time to relax!"}
          </div>
          <div
            id="time-left"
            className={
              timer > 0 && timer < 60
                ? "text-8xl font-bold mb-3 text-[#fde047]"
                : "text-8xl font-bold mb-3"
            }
          >
            {formatAsTime(timer)}
          </div>
        </div>

        <div id="controls-wrapper" className="flex justify-around">
          <div id="start_stop" className="" onClick={startStopTimerHandler}>
            <ImPlay2
              className={
                startPause
                  ? `${buttonStyle} + hidden`
                  : `${buttonStyle} + h-[70px] w-[70px]`
              }
              onClick={() => {
                setStartPause(!startPause);
              }}
            />
            <ImPause
              className={
                startPause
                  ? `${buttonStyle} + h-[70px] w-[70px]`
                  : `${buttonStyle} + hidden`
              }
            />
          </div>
          <div id="reset" className="">
            <FaClockRotateLeft
              className={`${buttonStyle} + h-[70px] w-[70px]`}
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
