"use client";

import { ReactLenis } from "lenis/react"
import { useRef } from 'react'
import Parallaximage from "./Parallaximage";
import Footer from "./Footer";

export default function Home() {
  


  const lenisRef = useRef()

  return (
    <>
      <ReactLenis ref={lenisRef} style={{ height: '100vh', overflowY: 'auto' }}>
        <div className="app">
          <section className="hero">
            <div className="img">
              <Parallaximage src="/images/img1.jpg" alt="img" />
              <div className="nav backdrop-blur-sm">
                <p className="text-black border-b-2 border-transparent hover:border-[#cea678] hover:scale-125 duration-200 text-lg">home</p>
                <p className="text-black border-b-2 border-transparent hover:border-[#cea678] hover:scale-125 duration-200 text-lg">about</p>
                <p className="text-black border-b-2 border-transparent hover:border-[#cea678] hover:scale-125 duration-200 text-lg">services</p>
                <p className="text-black border-b-2 border-transparent hover:border-[#cea678] hover:scale-125 duration-200 text-lg">contact</p>
              </div>
            </div>
          </section>

          <section className="projects">
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

          <section className="about">
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

          <section className="banner">
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

          <section className="footer">
            <div className="col">
              <div className="social">
                <p>Instagram</p>
                <p>Tiktok</p>
                <p>Discord</p>
              </div>
              <div className="footer-links"> 
                <p>Menu</p>
                <h1>Tour</h1>
                <h1>Updates</h1>
                <h1>Merch</h1>
                <h1>Contact</h1>
              </div>
              <p>&copy; Groupe Chabane</p>
            </div>
            <div className="col">
              <p>
                Join the newsletter <br /> 
                <button>Subscribe</button>
              </p>
              <div className="shop">
                <div className="img">
                  <Parallaximage src="/images/img7.jpg" alt="img" />
                </div>
              </div>
              <div className="test">
                <p>test1</p>
                <p>test2</p>
                <p>test3</p>
              </div>
              
            </div>
          </section>

        </div>
        <Footer />
      </ReactLenis>
    </>
  );
}
