import React from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import logoImage from "../../components/navbar/bucephalus2.png";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-blue-400"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl px-4 py-8 bg-white shadow-md rounded-lg"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-bold mb-4 text-center text-gray-800"
        >
         <div className="logo flex items-center md:mb-0">
          <Link to={'/'}>
            <img src={logoImage} alt="Logo" className="h-12 md:h-14 w-auto md:w-auto mr-8" />
          </Link>
          Bucephalus
          </div>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-gray-700 mb-2 leading-relaxed"
        >
          Bucephalus Garments Accessories stands as a beacon of style and innovation in the fashion industry. With a steadfast commitment to quality and craftsmanship, we create accessories that elevate any outfit to new heights of sophistication. What truly sets us apart is our unwavering dedication to sustainability, reflected in our eco-friendly materials and ethical sourcing practices. At Bucephalus, creativity knows no bounds, as we constantly push the envelope with cutting-edge designs and innovative techniques. Our accessories not only make a statement but also make a positive impact on the planet. Join us on our journey as we continue to adorn the world with style, one accessory at a time.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-gray-600 mb-4"
        >
          Address : <span className="font-semibold">Angeripalayam Main Rd, Avinasi Koundam,Angeripalayam,Tiruppur,Tamilnadu.<br/>
          Tiruppur-641603
          </span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full h-72"
        >
          <iframe
            title="7mobiles Shop Location"
            className="w-full h-full rounded-lg border-0"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.4581476704496!2d76.9174442148018!3d10.752628692340617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063a83efb1198f%3A0x7b2f4ec10f7432fc!2sTiruppur%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2suk!4v1644720600161!5m2!1sen!2suk"
          ></iframe>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
