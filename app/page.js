"use client";

import { ReactLenis } from "lenis/react"
import { useRef } from 'react'
import Parallaximage from "./components/Parallaximage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import TheyTrustUs from "./components/TheyTrustUs";
import ContactForm from "./components/ContactForm";


export default function Home() {

  const lenisRef = useRef()

  return (
    <>
      <ReactLenis ref={lenisRef} style={{ height: '100vh', overflowY: 'auto' }}>
        <ScrollToTop />
        <div className="app">
          <section id="home" className="hero page-section">
          <div className="img">
              <Parallaximage src="/images/img1.jpg" alt="img" />
              <Navbar />
            </div>
          </section>

          <section id="services" className="projects page-section">
            <div className="img">
              <Parallaximage src="/images/img2.jpg" alt="img" />
            </div>

            <div className="projects-brief">
              <p>
              Lorem ipsum dolor sit amet. Quo nesciunt molestias qui laboriosam explicabo qui repellendus vitae At culpa quam sit rerum alias. Aut eius necessitatibus et ipsum beatae et corrupti rerum aut dolores delectus est voluptas similique. Ut explicabo nihil rem dolorum magnam non reiciendis aperiam aut sunt internos hic quos aliquid id sint excepturi. 
              </p>
            </div>

            <div className="col projects-cover">
              <div>
                <Parallaximage src="/images/img4.jpg" alt="img" />
              </div>
            </div>

            <div className="col projects-list">
              <div className="project">
                <h1>Sunrise</h1>
                <p>Apple Music / spotify / Youtube</p>
              </div>
              <div className="project">
                <h1>Echos Within</h1>
                <p>Apple Music / spotify / Youtube</p>
              </div>
              <div className="project">
                <h1>Fading Memories</h1>
                <p>Apple Music / spotify / Youtube</p>
              </div>
            </div>
          </section>

          <section id="about" className="about page-section">
            <div className="col intro">
              <p>introduction</p>
              <p>Lorem ipsum dolor sit amet. Quo nesciunt molestias qui laboriosam explicabo qui repellendus vitae At culpa quam sit rerum alias. Aut eius necessitatibus et ipsum beatae et corrupti rerum aut dolores delectus est voluptas similique. Ut explicabo nihil rem dolorum magnam non reiciendis aperiam aut sunt internos hic quos aliquid id sint excepturi. </p>
            </div>

            <div className="col portrait">
              <div className="portrait-container">
                <div className="img">
                  <Parallaximage src="/images/img5.jpg" alt="img" />
                </div>
              </div>
            </div>
          </section>

          <section className="banner page-section">
            <div className="img">
              <Parallaximage src="/images/img6.jpg" alt="img" />
            </div>

            <div className="banner-copy">
              <p>be the</p>
              <h1>first to know</h1>
              <p>want to hear the latest about us</p>
              <button>join the newsletter</button>
            </div>
          </section>

          <section className="footer page-section">
            <div className="col">
              <div className="footer-links"> 
                <p>Menu</p>
                <h1>Tour</h1>
                <h1>Updates</h1>
                <h1>Merch</h1>
                <h1>Contact</h1>
              </div>
            </div>
            <div className="col">
              <div className="shop">
                <div className="img">
                  <Parallaximage src="/images/img7.jpg" alt="img" />
                </div>
              </div>     
            </div>
          </section>
        </div>
        <ContactForm />
        <TheyTrustUs />
        <Footer />
      </ReactLenis>
    </>
  );
}
