import React from "react";

function ExperienceSection() {
  return (
    <div>
      <h1 className="  flex justify-center text-xl md:text-2xl font-RalewayItalic py-5 text-teal-500">
        Experiences
      </h1>
      <div className="md:h-96 bg-teal-100 grid md:grid-cols-3 justify-items-stretch font-RalewayThin overflow-hidden ">
        <div className="bg-teal-50 dark:bg-teal-500 expandable-div">
          <h1 className="text-xl font-RalewayBold mt-10 ml-4">
            MAVEN Technology Software House
            <br></br>
            <b className="text-teal-700 dark:text-teal-950">
              (Full-Stack Web Developer):
            </b>
          </h1>
          <div className="ml-4">
            <ul className=" mt-4 text-md font-semibold leading-10 dark:text-teal-950 p-1">
              <li>Role: Full-Stack Web Developer</li>
              <li>Duration: 2022-2023</li>
              <li>
                Responsibilities: Developed numerous WordPress sites and Laravel
                websites, covering both front-end and back-end development
                tasks.
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-teal-100 dark:bg-teal-600 expandable-div">
          <h1 className="text-xl font-RalewayBold mt-10 ml-4 ">
            Ultimate Solutions
            <br></br>
            <b className="text-teal-900 dark:text-teal-200">
              (Backend Developer):
            </b>
          </h1>
          <div className="ml-4">
            <ul className=" mt-4 text-md font-semibold leading-10 dark:text-teal-100 p-1">
              <li>Role: Backend Developer (Php/Laravel/NodeJs)</li>
              <li>Duration: 2023(May) - 2023(Dec)</li>
              <li>
                Responsibilities: Developed numerous Laravel websites such as
                ERP , POS , HR and School Management System, covering With
                back-end development tasks.
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-teal-500 dark:bg-teal-900 expandable-div">
          <h1 className="text-xl font-RalewayBold mt-10 ml-4 ">
            BFI Education Services <br></br>
            <b className="text-teal-50 dark:text-teal-100">(Web Developer):</b>
          </h1>
          <div className="ml-4">
            <ul className=" mt-4 text-md font-semibold leading-10 text-gray-50 p-1">
              <li>Role: Web Developer (Php/Laravel)</li>
              <li>Duration: 2023(Dec) - Current</li>
              <li>
                Responsibilities: Developed numerous WordPress sites and
                Creating a Microservices with laravel .
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
