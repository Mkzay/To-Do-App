import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Body() {
  return (
    <div className="flex items-center justify-center flex-col gap-5 w-full -mt-28">
      <div className="flex items-center gap-3 w-11/12 h-14 rounded-md py-3 px-5 bg-lightMode-VeryLightGray dark:bg-darkMode-VeryDarkBlue md:w-7/12">
        <input className="" type="checkbox" />
        <input
          className="text-lightMode-VeryGrayishBlue dark:text-darkMode-LightGrayishBlue placeholder:text-base placeholder:text-lightMode-DarkGrayishBlue placeholder:dark:text-darkMode-VeryDarkGrayishBlue bg-lightMode-VeryLightGray dark:bg-darkMode-VeryDarkBlue outline-none"
          type="text"
          placeholder="Create a new todo..."
        />
      </div>
      <div className="flex items-center justify-center flex-col w-full shadow-2xl md:shadow-none">
        <div className="flex items-center justify-between w-11/12 h-14 rounded-md py-3 px-5 border-b bg-lightMode-VeryLightGray dark:bg-darkMode-VeryDarkBlue md:w-7/12">
          <div className="flex items-center gap-3">
            <input className="" type="checkbox" />
            <p className="text-lightMode-VeryDarkGrayishBlue dark:text-darkMode-DarkGrayishBlue text-base dark:textbase">
              My todos are done
            </p>
          </div>
          <div>
            <button className="dark:text-lightMode-DarkGrayishBlue">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 w-11/12 h-14 rounded-md py-3 px-5 bg-lightMode-VeryLightGray dark:bg-darkMode-VeryDarkBlue md:w-7/12">
          <p className="text-base text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue">
            1 items left
          </p>
          <p className="text-base text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue">
            Clear Completed
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 w-11/12 h-14 text-base rounded-md py-3 px-5 shadow-xl border-b bg-lightMode-VeryLightGray dark:bg-darkMode-VeryDarkBlue md:w-7/12 md:shadow-none md:-mt-5">
        <p className="font-bold text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue">
          All
        </p>
        <p className="font-bold text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue">
          Active
        </p>
        <p className="font-bold text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue">
          Completed
        </p>
      </div>
    </div>
  );
}
