import React from "react";
import Image from "next/image";
import { images } from "@/index";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Contact.module.css"; // Import custom CSS

export default function ContactUsPage() {
  return (
    <div className={styles.pageContainer}>
      {/* <div className={styles.navbarContainer}>
       
          <Navbar className={styles.navbar} />
       
      </div> */}

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <Image src={images.car} alt="Contact Car" layout="fill" className={styles.heroImage} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            We’re here to help you with any questions you have about our showroom
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Get in Touch</h2>
        <div className={styles.contactContainer}>
          {/* Contact Form */}
          <div className={styles.contactFormContainer}>
            <h3 className={styles.formTitle}>Send Us a Message</h3>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Name</label>
                <input type="text" placeholder="Your Name" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email</label>
                <input type="email" placeholder="Your Email" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Message</label>
                <textarea rows="4" placeholder="Your Message" className={styles.formTextarea}></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>

          {/* Showroom Info */}
          <div className={styles.showroomInfo}>
            <h3 className={styles.showroomTitle}>Showroom Location</h3>
            <p className={styles.showroomDescription}>
              Visit our showroom to explore a range of luxury cars and experience our exceptional customer service.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactDetail}>
                <span className={styles.icon}>📍</span>
                <span>123 Luxury Drive, Car City, CA 90000</span>
              </div>
              <div className={styles.contactDetail}>
                <span className={styles.icon}>📞</span>
                <span>(123) 456-7890</span>
              </div>
              <div className={styles.contactDetail}>
                <span className={styles.icon}>✉️</span>
                <span>info@carshowroom.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <h2 className={styles.mapTitle}>Find Us on the Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509457!2d144.95373631558945!3d-37.8172098797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f6a9b1%3A0x5045675218cdd3!2sVictoria%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1619650171670!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            className={styles.mapIframe}
          ></iframe>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Looking for Your Dream Car?</h2>
          <p className={styles.ctaDescription}>
            Our team is here to assist you in finding the perfect car to match your lifestyle.
          </p>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </section>

      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}
