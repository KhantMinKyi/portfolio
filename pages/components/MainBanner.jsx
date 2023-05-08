import React from "react";
import profile from "../../public/profile.jpg";
function MainBanner({
  motion,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
  TypeAnimation,
  Image,
}) {
  return (
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
                (window.location.href = "https://www.facebook.com/khantmin.kyi")
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
                (window.location.href = "https://github.com/KhantMinKyi")
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
  );
}

export default MainBanner;
