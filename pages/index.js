import Head from "next/head";

import {
  BsFillMoonStarsFill,
  BsHandThumbsUp,
  BsSunFill,
  BsFillPuzzleFill,
  BsEmojiSmile,
} from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
  AiOutlineLaptop,
} from "react-icons/ai";
import Image from "next/image";
import profile from "../public/profile.jpg";
import design from "../public/design2.png";
import code from "../public/code2.png";
import qa from "../public/qa.png";
import website1 from "../public/website1.png";
import website2 from "../public/website2.png";
import website3 from "../public/website3.png";
import website4 from "../public/website4.png";
import website5 from "../public/website5.png";
import website6 from "../public/website6.png";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll } from "framer-motion";
import Banner from "./Banner";
export default function Home() {
  const [darkMode, SetDarkMode] = useState(false);
  const [loader, setLoader] = useState(true);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      {loader ? (
        <div className="bg-teal-950 flex h-screen text-center ">
          <TypeAnimation
            sequence={["Welcome To My Personal Website", 1000]}
            speed={25}
            repeat={Infinity}
            wrapper="span"
            className="font-RalewayThin text-xl text-white font-bold m-auto"
          />
          <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-300"></div>
          </div>
        </div>
      ) : (
        <div>
          <Head>
            <title>Khant Min Kyi</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="bg-gradient-to-br dark:from-teal-800 dark:to-teal-900 ">
            {/* nav Bar */}
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
                  {darkMode ? (
                    <BsSunFill
                      onClick={() => SetDarkMode(!darkMode)}
                      className="  cursor-pointer text-cyan-300 dark:text-yellow-400"
                    />
                  ) : (
                    <BsFillMoonStarsFill
                      onClick={() => SetDarkMode(!darkMode)}
                      className=" cursor-pointer text-cyan-300 dark:text-gray-400 "
                    />
                  )}
                </li>
                <li></li>
              </ul>
            </nav>
            <section className="min-h-50 mt-20">
              {/* Banner */}
              <div className="grid md:grid-cols-2 text-center mb-6  md:py-12 py-6 bg-gray-50 dark:bg-teal-950 dark:text-white ">
                <div className="w-60 h-60 mx-auto rounded-full overflow-hidden animate-fade my-4">
                  <Image src={profile} alt="Image" priority />
                </div>
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: "0" }}
                  transition={{ duration: 1 }}
                  className="md:mt-5"
                  whileInView={"show"}
                >
                  <TypeAnimation
                    sequence={[
                      "Khant Min Kyi",
                      2000,
                      "Area 0",
                      1000,
                      "Khant Min Kyi",
                      2000,
                    ]}
                    speed={70}
                    repeat={Infinity}
                    wrapper="span"
                    className="text-4xl md:text-5xl font-RalewaySemiBold text-teal-500 mt-10 dark:text-white"
                  />
                  <h2 className="text-xl font-RalewayThin mt-3">
                    Professional Web Developer
                  </h2>
                  <h4 className="text-sm font-RalewayItalic mt-3">
                    "Learning Never Stop"
                  </h4>
                  <motion.div
                    className="flex text-2xl text-gray-600 dark:text-teal-400 gap-5 justify-center mt-5"
                    initial={{ y: "100%" }}
                    animate={{ y: "0" }}
                    transition={{ duration: 2 }}
                  >
                    <AiFillFacebook
                      className="hover:cursor-pointer hover:scale-125"
                      onClick={() =>
                        (window.location.href =
                          "https://www.facebook.com/khantmin.kyi")
                      }
                    />
                    <AiFillInstagram
                      className="hover:cursor-pointer hover:scale-125"
                      onClick={() =>
                        (window.location.href =
                          "https://www.instagram.com/khant_min_kyi/")
                      }
                    />
                    <AiFillGithub
                      className="hover:cursor-pointer hover:scale-125"
                      onClick={() =>
                        (window.location.href =
                          "https://github.com/KhantMinKyi")
                      }
                    />
                    <AiFillMail
                      className="hover:cursor-pointer hover:scale-125"
                      onClick={() =>
                        (window.location.href =
                          "https://gmail.com/khantminkyi@gmail.com")
                      }
                    />
                  </motion.div>
                </motion.div>
              </div>
            </section>
            {/* About Section */}
            <section id="about">
              <div className="text-center  min-h-50">
                <h1 className=" flex justify-center text-xl md:text-2xl font-RalewayItalic py-5 text-teal-500">
                  About Me <BsHandThumbsUp className="mx-2" />
                </h1>
                <div className="grid md:grid-cols-2 text-center my-6">
                  <div className="my-6 mx-12">
                    <h1 className="text-xl font-RalewaySemiBold mb-6 dark:text-gray-300">
                      Experience
                    </h1>
                    <ul className="list-none font-RalewayThin font-semibold max-w-lg mx-auto dark:text-gray-300">
                      <li className=" justify-center items-center p-2 text-sm">
                        Since 2020 Starting Working as Freelancer for small
                        Local Projects.
                      </li>

                      <TypeAnimation
                        sequence={[
                          " From , I StartWorking In MAVEN Technology Software Hosue as Full-Stack Web Developer. Developing Many Wordpress Site and Laravel Websites.",
                          2000,
                          "Develop a Laravel And React Website as a Freelancer.",
                          2000,
                        ]}
                        speed={70}
                        repeat={Infinity}
                        wrapper="span"
                        className="justify-center items-center p-2 text-sm mt-10 dark:text-white"
                      />
                    </ul>
                  </div>
                  <div className="text-center my-6">
                    <h1 className="font-RalewaySemiBold text-xl mb-6 dark:text-gray-300">
                      Education
                    </h1>
                    <h4 className="font-RalewayThin font-semibold mb-6 dark:text-gray-200">
                      BEHS No(1) Dagon
                    </h4>
                    <h4 className="font-RalewayThin font-semibold mb-6 dark:text-gray-200">
                      BE IT at Technological University Thanlyin
                    </h4>
                  </div>
                </div>
              </div>
            </section>
            {/* Skill Section */}
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
                  <p className="text-gray-600 py-1 dark:text-gray-300">
                    Php/Laravel
                  </p>
                  <p className="text-gray-600 py-1 dark:text-gray-300">
                    Next Js / React Js
                  </p>
                  <p className="text-gray-600 py-1 dark:text-gray-300">
                    Wordpress
                  </p>
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

            {/* Banner Section */}
            <section>
              <div
                style={{ height: "375px", overflowY: "scroll" }}
                className="bannerDiv"
              >
                <Banner className="bg-teal-100 dark:bg-teal-950">
                  <div className="my-auto dark:text-white">
                    <h1 className="text-4xl font-RalewayBold mt-10">
                      Team <b className="text-teal-400"> Work</b>
                    </h1>
                    <h6 className="font-RalewayItalic text-lg mt-10">
                      Love To Work Group Projects . Actively Participate With
                      Team
                    </h6>
                    <h5 className="flex gap-4 items-center text-xl font-RalewayBold mt-10">
                      Active Coder <AiOutlineLaptop />
                    </h5>
                  </div>
                </Banner>
                <Banner className="bg-teal-400 dark:bg-gray-950">
                  <div className="my-auto dark:text-gray-50">
                    <h1 className="text-4xl font-RalewayBold mt-10">
                      Brain
                      <b className="text-teal-100 dark:text-teal-300">
                        Storming
                      </b>
                    </h1>
                    <h6 className="font-RalewayItalic text-lg mt-10">
                      As a Backend Coder , Would Love To Think And Make
                      <b className="text-white dark:text-teal-300">
                        A New Systematic and Creative Idea
                      </b>
                      For Development
                    </h6>
                    <h5 className="flex gap-4 items-center text-xl font-RalewayBold mt-10">
                      Systematic Engineer <BsFillPuzzleFill />
                    </h5>
                  </div>
                </Banner>
                <Banner className="bg-teal-200 dark:bg-emerald-950">
                  <div className="my-auto dark:text-gray-100">
                    <h1 className="text-3xl font-RalewayBold mt-10">
                      Progressive
                      <b className="text-lime-800 dark:text-lime-300">
                        Learning
                      </b>
                    </h1>
                    <h6 className="font-RalewayItalic text-md mt-10">
                      I'm A Progressive Learner !{" "}
                      <b className="text-teal-800 dark:text-lime-200">
                        Explore , Research , Creative .
                      </b>
                    </h6>
                    <h5 className="flex gap-4 items-center text-xl font-RalewayBold mt-10">
                      Flexible Developer <BsEmojiSmile />
                    </h5>
                  </div>
                </Banner>
              </div>
            </section>
            {/* Portfolio */}
            <section id="portfolio">
              <h1 className="font-RalewayLight text-xl text-teal-500 text-center my-6">
                My Portfolios
              </h1>
              <motion.div
                className="flex flex-col gap-10 py-10 lg:flex-wrap lg:flex-row"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 },
                }}
              >
                <div className="basis-1/4 flex-1 p-4">
                  <Image
                    alt="Image"
                    src={website1}
                    className="rounded-lg object-cover me-4"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="basis-1/4 flex-1 p-4">
                  <Image
                    alt="Image"
                    src={website2}
                    className="rounded-lg object-cover me-4"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="basis-1/4 flex-1 p-4">
                  <Image
                    alt="Image"
                    src={website3}
                    className="rounded-lg object-cover me-4"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="basis-1/4 flex-1 p-4">
                  <Image
                    alt="Image"
                    src={website4}
                    className="rounded-lg object-cover me-4"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="basis-1/4 flex-1 p-4">
                  <Image
                    alt="Image"
                    src={website5}
                    className="rounded-lg object-cover me-4"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="basis-1/4 flex-1 p-4">
                  <Image
                    alt="Image"
                    src={website6}
                    className="rounded-lg object-cover me-4"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              </motion.div>
            </section>
          </main>
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <footer className="bg-gray-50 dark:bg-teal-800">
            <div className="text-center">
              <h1 className="font-RalewayThin text-xl md:text-2xl py-10 md:py-14 dark:text-teal-500">
                Developed By KMK{" "}
              </h1>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
