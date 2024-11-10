"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { images } from "..";
import { FaCheck } from "react-icons/fa6";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import styles from "./Home.module.css"; // Import CSS module
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  images.car1,
  images.car2,
  images.car3,
  images.car4,
  images.car5,
  images.car6,
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  // Function to cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000); // change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.pageBackground}>
        {/* Navbar */}
        <div className={`${styles.maxWidthContainer} ${styles.navbarContainer}`}>
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className={`${styles.heroSection} hero-section`}>
          <AnimatePresence>
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="absolute inset-0    "
            >
              <Image
                src={heroImages[currentImage]}
                alt="Showroom Car"
                layout="fill"
                
                className=" opacity-50  "
              />
            </motion.div>
          </AnimatePresence>
          <div className="hero-content">
            <h1>About Us</h1>
            <p>Discover the luxury and style of our premium car showroom</p>
          </div>
        </div>

        {/* About Section */}
        <div className={styles.aboutSection}>
          <div className={`${styles.maxWidthContainer} ${styles.aboutContent}`}>
            <div className={styles.aboutImageContainer}>
              <div className="absolute -bottom-10 right-5 hidden lg:block">
                <Image
                  src={images.about1}
                  className={styles.aboutImage}
                  height={200}
                  width={300}
                  alt="About Image 1"
                />
              </div>
              <Image
                src={images.about2}
                className={styles.aboutImage}
                height={300}
                width={300}
                alt="About Image 2"
              />
            </div>
            <div>
              <h2 className={styles.aboutTextTitle}>About Us</h2>
              <h3 className={styles.aboutTextHeading}>
                Redefining the Car Showroom Experience
              </h3>
              <p className={styles.aboutTextDescription}>
                At our showroom, we redefine the car-buying experience with
                exceptional service, cutting-edge vehicles, and customer-focused
                solutions tailored to your needs.
              </p>

              <div className={styles.featuresList}>
                {[
                  "Customer-Centric Approach",
                  "Comprehensive Vehicle Selection",
                  "Test Drive Convenience",
                  "Exceptional Support",
                ].map((text, index) => (
                  <div key={index} className={styles.featureItem}>
                    <span className={styles.featureIcon}>
                      <FaCheck size={12} />
                    </span>
                    <h4>{text}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Popular Cards Section */}
        <div className={styles.popularSection}>
          <div className={styles.maxWidthContainer}>
            <div className={styles.popularContainer}>
              <div>
                <h2 className={styles.sectionHeading}>Popular Choices</h2>
                <h3 className={styles.sectionTitle}>Explore Our Collection</h3>
              </div>
              <div>
                <button className={styles.discoverButton}>
                  Discover more cars
                </button>
              </div>
            </div>

            {/* Card Grid Container */}
            <div className={styles.cardContainer}>
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>

        {/* Supportive Section */}
        <div className={styles.supportSection}>
          <div className={`${styles.maxWidthContainer} ${styles.supportGrid}`}>
            {["Expert Financing", "Flexible Maintenance", "Customer Care"].map(
              (title, index) => (
                <div key={index} className={styles.supportItem}>
                  <div className={styles.supportIconContainer}>
                    <span className={styles.supportIcon}>
                      <FaCheck size={14} />
                    </span>
                    <div className={styles.supportDivider}></div>
                  </div>
                  <h2 className={styles.supportTitle}>{title}</h2>
                  <p className={styles.supportDescription}>
                    Providing dedicated service and solutions for all your
                    automotive needs.
                  </p>
                </div>
              )
            )}
          </div>
        </div>


              
        <Footer />
      </div>
    </>
  );
}
