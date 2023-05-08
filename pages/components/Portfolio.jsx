import React from "react";
import website1 from "../../public/website1.png";
import website2 from "../../public/website2.png";
import website3 from "../../public/website3.png";
import website4 from "../../public/website4.png";
import website5 from "../../public/website5.png";
import website6 from "../../public/website6.png";
function Portfolio({ motion, Image }) {
  return (
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
        <motion.div
          className="basis-1/4 flex-1 p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          <Image
            alt="Image"
            src={website1}
            className="rounded-lg object-cover me-4"
            width={"100%"}
            height={"100%"}
          />
        </motion.div>
        <motion.div
          className="basis-1/4 flex-1 p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          <Image
            alt="Image"
            src={website2}
            className="rounded-lg object-cover me-4"
            width={"100%"}
            height={"100%"}
          />
        </motion.div>
        <motion.div
          className="basis-1/4 flex-1 p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          <Image
            alt="Image"
            src={website3}
            className="rounded-lg object-cover me-4"
            width={"100%"}
            height={"100%"}
          />
        </motion.div>
        <motion.div
          className="basis-1/4 flex-1 p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          <Image
            alt="Image"
            src={website4}
            className="rounded-lg object-cover me-4"
            width={"100%"}
            height={"100%"}
          />
        </motion.div>
        <motion.div
          className="basis-1/4 flex-1 p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          <Image
            alt="Image"
            src={website5}
            className="rounded-lg object-cover me-4"
            width={"100%"}
            height={"100%"}
          />
        </motion.div>
        <motion.div
          className="basis-1/4 flex-1 p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          <Image
            alt="Image"
            src={website6}
            className="rounded-lg object-cover me-4"
            width={"100%"}
            height={"100%"}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Portfolio;
