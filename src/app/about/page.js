import React from "react";
import Image from "next/image";
import { images } from "@/index";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./style.css";

export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* <div className="navbar-1" >
        <Navbar   />
      </div> */}

      {/* Hero Section */}
      <div className="hero-section">
        <Image src={images.car} alt="Showroom Car" layout="fill" className="object-cover opacity-50" />
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Discover the luxury and style of our premium car showroom</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="story-section container">
        <h2>Our Story</h2>
        <div className="story-content">
          <div className="md:w-1/2">
            <p className="story-text">
              Established in 2005, our showroom has been dedicated to offering a selection of the finest
              cars from across the globe. Our mission is to provide an exceptional car-buying experience
              with a focus on luxury, quality, and customer satisfaction.
            </p>
            <p className="story-text mt-4">
              From classic muscle cars to the latest in high-performance vehicles, we offer a diverse
              range of options to meet every taste and preference.
            </p>
          </div>
          <div className="image-grid">
            <Image src={images.car2} alt="Luxury Car 2" className="image-item" width={300} height={300} />
            <Image src={images.car3} alt="Luxury Car 3" className="image-item" width={300} height={300} />
            <Image src={images.car4} alt="Luxury Car 4" className="image-item" width={300} height={300} />
            <Image src={images.car5} alt="Luxury Car 5" className="image-item" width={300} height={300} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-item">
            <h3>Exclusive Showroom Tours</h3>
            <p>Get a guided tour of our luxurious showroom and explore our wide range of vehicles.</p>
          </div>
          <div className="service-item">
            <h3>Personalized Financing Options</h3>
            <p>We offer a variety of financing options tailored to meet your unique needs.</p>
          </div>
          <div className="service-item">
            <h3>Luxury Car Rentals</h3>
            <p>Experience the thrill of driving a luxury car with our rental services.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section container">
        <h2 className="gallery-title">Our Fleet</h2>
        <div className="gallery-grid">
          <Image src={images.car2} alt="Car 2" className="gallery-item" width={500} height={300} />
          <Image src={images.car3} alt="Car 3" className="gallery-item" width={500} height={300} />
          <Image src={images.car4} alt="Car 4" className="gallery-item" width={500} height={300} />
          <Image src={images.car5} alt="Car 5" className="gallery-item" width={500} height={300} />
          <Image src={images.car6} alt="Car 6" className="gallery-item" width={500} height={300} />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Visit Us Today</h2>
        <p>Experience luxury like never before at our premium car showroom.</p>
        <button className="cta-button">Contact Us</button>
      </section>

      <Footer className="footer-container" />
    </div>
  );
}
