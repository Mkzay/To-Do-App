/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Head({ handleClick }) {
  return (
    <div className="flex items-center justify-center bg-[url('./images/bg-mobile-light.jpg')] dark:bg-[url('./images/bg-mobile-dark.jpg')] bg-no-repeat bg-cover w-full h-[250px] md:bg-[url('./images/bg-desktop-light.jpg')] md:dark:bg-[url('./images/bg-desktop-dark.jpg')] md:bg-no-repeat">
      <div className="flex items-center justify-between w-11/12 mb-24 px-5 md:w-7/12 md:px-0">
        <h1 className="text-4xl font-bold text-lightMode-VeryLightGray">
          T O D O
        </h1>
        <button
          onClick={handleClick}
          className="hidden dark:block text-white text-3xl hover:text-yellow-400"
        >
          <FontAwesomeIcon icon={faSun} />
        </button>
        <button
          onClick={handleClick}
          className="dark:hidden text-white text-3xl hover:text-blue-950"
        >
          <FontAwesomeIcon icon={faMoon} />
        </button>
      </div>
    </div>
  );
}
