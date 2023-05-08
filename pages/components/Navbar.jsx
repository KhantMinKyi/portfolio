import React from "react";

export default function Navbar(props) {
  return (
    <nav className="flex justify-between fixed w-screen z-10 top-0 py-8 px-5 pt-6 md:px-14 lg:px-20 bg-white dark:bg-teal-900">
      <h1
        className="text-md md:text-xl font-bold font-RalewayThin dark:text-white hover:cursor-pointer"
        onClick={() => (window.location.href = "#")}
      >
        Khant Min Kyi
      </h1>

      <ul className="flex items-center text-sm md:text-lg font-RalewayItalic text-teal-600 dark:text-white">
        <li></li>
        <li>
          <a className="mx-3 md:mx-6" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="mx-3 md:mx-6" href="#skill">
            Skill
          </a>
        </li>
        <li>
          <a className="mx-3 md:mx-6" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className=" border-green-900 dark:border-teal-400 rounded-2xl text-sm md:text-lg bg-gray-800 dark:bg-teal-950  p-2">
          {props.darkMode ? (
            <props.BsSunFill
              onClick={() => props.SetDarkMode(!props.darkMode)}
              className="  cursor-pointer text-cyan-300 dark:text-yellow-400"
            />
          ) : (
            <props.BsFillMoonStarsFill
              onClick={() => props.SetDarkMode(!props.darkMode)}
              className=" cursor-pointer text-cyan-300 dark:text-gray-400 "
            />
          )}
        </li>
        <li></li>
      </ul>
    </nav>
  );
}
