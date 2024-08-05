import React from 'react'
import about1 from '../assets/img/about1.avif'

const About = () => {
  return (
    <div>
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <div class="about-img">
              <img src={about1} alt=""/>
            </div>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>About Visko E-Serve</h3>
            <p class="fst-italic" style={{color:"black"}}>
            VISKO E-Serve Private Limited is a cutting-edge technology company specializing in the
development of innovative messaging applications. Established with a vision to redefine
communication in the digital age, we have consistently pushed the boundaries of messaging
technology to create seamless and intuitive communication platforms. Our mission is to
empower individuals and businesses by providing them with advanced messaging solutions
that enhance connectivity and foster meaningful interactions. We envision a world where
communication is not only efficient but also enjoyable, contributing to improved
collaboration and relationships.
            </p>
            
          </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default About
