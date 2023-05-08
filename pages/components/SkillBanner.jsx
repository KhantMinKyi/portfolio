import React from "react";
import design from "../../public/design2.png";
import code from "../../public/code2.png";
import qa from "../../public/qa.png";
function SkillBanner({ motion, Image }) {
  return (
    <motion.section
      className="bg-gray-50 py-6 dark:bg-teal-900"
      id="skill"
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div>
        <motion.h1 className="font-RalewaySemiBold text-teal-500 text-xl md:text-2xl text-center">
          What Can I Offer You
        </motion.h1>
      </div>
      <div className="md:flex gap-14 my-12 justify-center">
        {/* responsive Design */}
        <motion.div
          className="text-center shadow-lg my-6 rounded-lg p-10 mx-4 md:ms-2 hover:shadow-gray-300 dark:bg-teal-800 dark:bg-opacity-50 dark:hover:shadow-teal-950"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9 }}
          variants={{
            visible: { x: 0 },
            hidden: { x: -100 },
          }}
        >
          <Image
            src={design}
            width={"auto"}
            height={150}
            className="mx-auto hover:scale-110"
            alt="Image"
          />
          <h2 className="font-RalewaySemiBold mt-4 mb-4 text-lg md:text-xl dark:text-gray-300">
            Responsive Design
          </h2>
          <p className="dark:text-gray-200">
            I Can Offer You Responsive and Creative Web Design.{" "}
          </p>
          <h2 className="text-teal-500 py-4">Tools I Use</h2>
          <p className="text-gray-600 dark:text-gray-200 py-1">
            Adobe PhotoShop
          </p>
          <p className="text-gray-600 dark:text-gray-200 py-1">Figma</p>
        </motion.div>
        {/* backend Coder */}
        <div className="text-center shadow-lg rounded-lg my-6 p-10 mx-4 hover:shadow-gray-300 dark:bg-teal-800 dark:bg-opacity-50 dark:hover:shadow-teal-950">
          <Image
            alt="Image"
            src={code}
            width={"auto"}
            height={150}
            className="mx-auto hover:scale-110"
          />
          <h2 className="font-RalewaySemiBold mt-4 mb-4 text-lg md:text-xl dark:text-gray-200">
            Backend Coder
          </h2>
          <p className="max-w-sm dark:text-gray-200">
            Also Work as Backend Developer. Experience in
            <span className="text-teal-500">
              ERP System And Ecommerce Websites
            </span>
          </p>
          <h2 className="text-teal-500 py-4">Language I Use</h2>
          <p className="text-gray-600 py-1 dark:text-gray-300">Php/Laravel</p>
          <p className="text-gray-600 py-1 dark:text-gray-300">
            Next Js / React Js
          </p>
          <p className="text-gray-600 py-1 dark:text-gray-300">Wordpress</p>
        </div>
        {/* QA */}
        <motion.div
          className="text-center shadow-lg rounded-lg my-6 p-10  mx-4 md:me-2 hover:shadow-gray-300 dark:bg-teal-800 dark:bg-opacity-50 dark:hover:shadow-teal-950"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9 }}
          variants={{
            visible: { x: 0 },
            hidden: { x: 100 },
          }}
        >
          <Image
            alt="Image"
            src={qa}
            width={"auto"}
            height={"150"}
            className="mx-auto hover:scale-110"
          />
          <h2 className="font-RalewaySemiBold mt-4 mb-4 text-lg md:text-xl dark:text-gray-200">
            Quality Analysis
          </h2>
          <p className="dark:text-gray-200">
            I Can Do Quality Analysis For Website And System.
          </p>
          <h2 className="text-teal-500 py-4">Experience</h2>
          <p className="text-gray-600 py-1 dark:text-gray-300">
            Fresher At Quality Analysis
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default SkillBanner;
