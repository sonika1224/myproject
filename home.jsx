import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../app.css";

function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="bg-[#f6f6f6] text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <div className="min-h-screen px-8 md:px-16 py-20 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Text Content */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Not Just Products. <br />
            <span className="text-[#9A3412]">Pieces of Passion.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            From artisan creations to futuristic designs — welcome to a curated world where every item tells a story.
          </p>
        </motion.div>

        {/* Floating Grid with Parallax */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          style={{ y: y1 }}
        >
          {[1, 2, 3, 4].map((_, i) => (
            <motion.img
              key={i}
              src={`/images/1.jpg`}
              alt={`product ${i}`}
              className="rounded-2xl shadow-lg object-cover h-48 w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Meet the Collection Section */}
      <motion.section
        className="bg-white py-24 px-6 md:px-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
          Meet the Collection
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 text-lg mb-12">
          Curated essentials for everyday beauty. Designed with intention. Delivered with care.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["Crafted", "Minimal", "Timeless"].map((tag, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 p-6 rounded-3xl shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={`/images/2.jpg`}
                alt={tag}
                className="rounded-xl mb-4 object-cover h-48 w-full"
              />
              <h3 className="text-xl font-semibold text-gray-800">{tag}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {tag === "Crafted"
                  ? "Made with human touch, every curve and edge speaks."
                  : tag === "Minimal"
                  ? "Form meets function in its purest form."
                  : "Designs that last beyond seasons."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
